<script lang="ts">
    import type { TwistyPlayer } from "cubing/twisty";
    import "cubing/twisty";
    import { rememberCamera } from "$lib/components/cube/camera";

    let {
        setup,
        alg = "",
        mask = undefined as string | undefined,
        size = 240,
        playing = $bindable(false),
        atStart = $bindable(true),
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

    $effect(() => {
        void `${setup}|${alg}`;
        player?.pause();
        player?.jumpToStart();
        resetCamera();
    });

    export function toggle() {
        if (playing) return player.pause();
        if (atEnd) player.jumpToStart();
        player.play();
    }

    export function step(direction: 1 | -1) {
        const controller = player.controller.animationController;
        controller.play({
            direction,
            untilBoundary: "move",
            autoSkipToOtherEndIfStartingAtBoundary: false,
        } as Parameters<typeof controller.play>[0]);
    }

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
