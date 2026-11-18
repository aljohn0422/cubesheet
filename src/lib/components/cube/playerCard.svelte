<script lang="ts">
    import {
        Pause,
        Play,
        RotateCcw,
        StepBack,
        StepForward,
    } from "lucide-svelte";
    // import 時 cubing 會自行註冊 <twisty-player> 與 <twisty-alg-viewer>
    import type { TwistyAlgViewer, TwistyPlayer } from "cubing/twisty";
    import "cubing/twisty";

    let {
        /** 可含分組括號，例如 "F (R U R' U') F'"；cubing.js 會照分組顯示 */
        alg,
        puzzle = "3x3x3",
        setup = "x2",
        /** cubing.js 自訂遮罩字串（只顯示相關顏色） */
        mask = undefined as string | undefined,
    }: {
        alg: string;
        /** cubing.js puzzle id，例如 "2x2x2"、"4x4x4" */
        puzzle?: string;
        setup?: string;
        mask?: string;
    } = $props();

    const SPEEDS = ["0.5", "0.8", "1", "1.5", "2"];

    let twistyPlayer: TwistyPlayer;
    let algViewer: TwistyAlgViewer;
    let isPlaying = $state(false);
    let atStart = $state(true);
    let atEnd = $state(false);
    let speed = $state("1");

    // 以播放器本身的狀態為準：播放結束時按鈕會自動回到「播放」，到頭/到尾時停用單步按鈕
    $effect(() => {
        const model = twistyPlayer.experimentalModel;
        // 單步動畫期間 playing 也是 true；只有整段播放才算「播放中」
        const onPlaying = (info: { playing: boolean; untilBoundary: string }) => {
            isPlaying = info.playing && info.untilBoundary === "entire-timeline";
        };
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

    // 公式文字：播放時標出目前這一步（樣式見 app.css），點任一步可直接跳過去
    $effect(() => {
        algViewer.twistyPlayer = twistyPlayer;
    });

    function step(direction: 1 | -1) {
        const controller = twistyPlayer.controller.animationController;
        // 關掉「在頭/尾時自動跳到另一端」，否則按鈕停用狀態還沒更新時連按會讓方塊跳位
        controller.play({
            direction,
            untilBoundary: "move",
            autoSkipToOtherEndIfStartingAtBoundary: false,
        } as Parameters<
            typeof controller.play
        >[0]);
    }

    function restart() {
        twistyPlayer.pause();
        twistyPlayer.jumpToStart();
    }

    // 手冊按鈕：方角、細墨線；停用時「翻面」露出背面斜線
    const iconButton =
        "inline-flex size-11 items-center justify-center border border-ink transition-colors disabled:pointer-events-none disabled:text-ink/25";
</script>

<div class="flex w-full flex-col items-center gap-3">
    <twisty-player
        bind:this={twistyPlayer as any}
        {alg}
        experimental-setup-anchor="end"
        experimental-setup-alg={setup}
        experimental-stickering-mask-orbits={mask}
        {puzzle}
        tempo-scale={speed}
        background="none"
        viewer-link="none"
        control-panel="none"
        style="width: 224px; height: 224px;"
    >
    </twisty-player>

    <div class="flex items-center gap-2" role="group" aria-label="播放控制">
        <button type="button" class="{iconButton} bg-paper hover:bg-neutral-100" onclick={restart} aria-label="從頭開始">
            <RotateCcw class="size-5" aria-hidden="true" />
        </button>
        <button
            type="button"
            class="{iconButton} bg-paper hover:bg-neutral-100 {atStart ? 'face-down' : ''}"
            onclick={() => step(-1)}
            disabled={atStart}
            aria-label="上一步"
        >
            <StepBack class="size-5" aria-hidden="true" />
        </button>
        <button
            type="button"
            class="{iconButton} w-16 bg-ink text-paper hover:bg-neutral-800"
            onclick={() => twistyPlayer.togglePlay()}
            aria-label={isPlaying ? "暫停" : "播放"}
            data-autofocus
        >
            {#if isPlaying}
                <Pause class="size-5" fill="currentColor" aria-hidden="true" />
            {:else}
                <Play class="size-5 translate-x-px" fill="currentColor" aria-hidden="true" />
            {/if}
        </button>
        <button
            type="button"
            class="{iconButton} bg-paper hover:bg-neutral-100 {atEnd ? 'face-down' : ''}"
            onclick={() => step(1)}
            disabled={atEnd}
            aria-label="下一步"
        >
            <StepForward class="size-5" aria-hidden="true" />
        </button>
    </div>

    <div class="w-full border-y border-ink py-2 text-center text-[19px] font-semibold leading-[1.6] text-balance">
        <twisty-alg-viewer bind:this={algViewer as any}></twisty-alg-viewer>
    </div>

    <div class="flex items-center gap-3 text-[13px]">
        <span aria-hidden="true">速度</span>
        <div class="flex divide-x divide-ink border border-ink" role="group" aria-label="播放速度">
            {#each SPEEDS as value}
                {@const selected = speed === value}
                <button
                    type="button"
                    class="inline-flex h-11 min-w-11 items-center justify-center gap-1 px-1.5 tabular-nums {selected
                        ? 'bg-ink text-paper'
                        : 'bg-paper hover:bg-neutral-100'}"
                    aria-pressed={selected}
                    onclick={() => (speed = value)}
                >
                    {value}×
                </button>
            {/each}
        </div>
    </div>
</div>
