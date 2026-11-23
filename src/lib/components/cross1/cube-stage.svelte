<script lang="ts">
    // import 時 cubing 會自行註冊 <twisty-player>
    import type { TwistyPlayer } from "cubing/twisty";
    import "cubing/twisty";
    import { rememberCamera } from "$lib/components/cube/camera";

    // 十字 +1 的 3D 舞台：停在 setup（打亂＋前面做過的步驟）的狀態，按播放才播 alg 這一段。
    // 換步驟時直接跳到這一步的開頭（也就是前一步結束），不自動播，視角回到預設。
    let {
        setup,
        alg = "",
        mask = undefined as string | undefined,
        size = 240,
        /** 正在播（給外面的播放鍵顯示用） */
        playing = $bindable(false),
        /** 停在這一段的開頭 */
        atStart = $bindable(true),
        /** 已經播到這一段的結尾 */
        atEnd = $bindable(false),
    }: {
        setup: string;
        alg?: string;
        mask?: string;
        size?: number;
        playing?: boolean;
        atStart?: boolean;
        atEnd?: boolean;
    } = $props();

    let player: TwistyPlayer;
    let resetCamera: () => Promise<void> = async () => {};

    $effect(() => {
        resetCamera = rememberCamera(player);
        const model = player.experimentalModel;
        // 單步動畫期間 playing 也是 true；只有整段播放才算「播放中」（播放鍵才顯示暫停）
        const onPlaying = (info: { playing: boolean; untilBoundary: string }) =>
            (playing = info.playing && info.untilBoundary === "entire-timeline");
        const onTimeline = (info: { atStart: boolean; atEnd: boolean }) => {
            atStart = info.atStart;
            atEnd = info.atEnd;
        };
        model.playingInfo.addFreshListener(onPlaying);
        model.detailedTimelineInfo.addFreshListener(onTimeline);
        return () => {
            model.playingInfo.removeFreshListener(onPlaying);
            model.detailedTimelineInfo.removeFreshListener(onTimeline);
        };
    });

    // 換步驟（或換例子）：停下來、跳到這一段的開頭，視角也放回預設
    $effect(() => {
        void `${setup}|${alg}`;
        player?.pause();
        player?.jumpToStart();
        resetCamera();
    });

    /** 播放／暫停；已經在結尾時從這一段開頭重播 */
    export function toggle() {
        if (playing) return player.pause();
        if (atEnd) player.jumpToStart();
        player.play();
    }

    /** 前進或後退一步（一個轉動），只在這一段裡面走 */
    export function step(direction: 1 | -1) {
        const controller = player.controller.animationController;
        // 關掉「在頭/尾時自動跳到另一端」，否則按鈕停用狀態還沒更新時連按會讓方塊跳位
        controller.play({
            direction,
            untilBoundary: "move",
            autoSkipToOtherEndIfStartingAtBoundary: false,
        } as Parameters<typeof controller.play>[0]);
    }

    /** 回到這一段開頭，視角也放回一開始的位置 */
    export function reset() {
        player.pause();
        player.jumpToStart();
        resetCamera();
    }
</script>

<twisty-player
    bind:this={player as any}
    experimental-setup-alg={setup}
    experimental-setup-anchor="start"
    {alg}
    experimental-stickering-mask-orbits={mask}
    tempo-scale="0.8"
    camera-latitude="-32"
    camera-longitude="24"
    background="none"
    viewer-link="none"
    control-panel="none"
    style="width: {size}px; height: {size}px;"
></twisty-player>
