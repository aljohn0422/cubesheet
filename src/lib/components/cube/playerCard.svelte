<script lang="ts">
    import {
        Pause,
        Play,
        RotateCcw,
        StepBack,
        StepForward,
    } from "lucide-svelte";
    import type { TwistyAlgViewer, TwistyPlayer } from "cubing/twisty";
    import "cubing/twisty";
    import { rememberCamera } from "./camera";

    let {
        alg,
        puzzle = "3x3x3",
        setup = "x2",
        anchor = "end",
        mask = undefined as string | undefined,
    }: {
        alg: string;
        puzzle?: string;
        setup?: string;
        anchor?: "start" | "end";
        mask?: string;
    } = $props();

    const SPEEDS = ["0.5", "0.8", "1", "1.5", "2"];

    let twistyPlayer: TwistyPlayer;
    let algViewer: TwistyAlgViewer;
    let isPlaying = $state(false);
    let atStart = $state(true);
    let atEnd = $state(false);
    let speed = $state("1");

    $effect(() => {
        const model = twistyPlayer.experimentalModel;
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

    let resetCamera: () => Promise<void> = async () => {};
    $effect(() => {
        resetCamera = rememberCamera(twistyPlayer);
    });

    $effect(() => {
        algViewer.twistyPlayer = twistyPlayer;
    });

    function step(direction: 1 | -1) {
        const controller = twistyPlayer.controller.animationController;
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
        resetCamera();
    }

    const iconButton =
        "inline-flex size-11 items-center justify-center rounded-lg border border-ink transition-colors disabled:pointer-events-none disabled:text-ink/25";
</script>

<div class="flex w-full flex-col items-center gap-3">
    <twisty-player
        bind:this={twistyPlayer as any}
        {alg}
        experimental-setup-anchor={anchor}
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
        <div class="flex divide-x divide-ink overflow-hidden rounded-lg border border-ink" role="group" aria-label="播放速度">
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
