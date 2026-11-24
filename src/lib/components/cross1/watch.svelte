<script lang="ts">
    import { Pause, Play, RotateCcw, SkipBack, SkipForward, StepBack, StepForward } from "lucide-svelte";
    import { crossMask, type CrossExample } from "$lib/data/cross-plus-one";
    import CubeStage from "./cube-stage.svelte";

    let { example }: { example: CrossExample } = $props();

    const segments = $derived([
        ...(example.inspection
            ? [{ moves: example.inspection, label: "觀察", stm: 0, slots: [] as string[], pairs: [] }]
            : []),
        example.cross,
        ...example.f2l,
    ]);
    let index = $state(0);
    let hidden = $state<Set<number>>(new Set());
    $effect(() => {
        example.id;
        index = 0;
        hidden = new Set();
    });

    const mask = $derived(crossMask(segments.flatMap((s, i) => (hidden.has(i) ? [] : s.pairs))));
    function toggle(i: number) {
        const next = new Set(hidden);
        if (!next.delete(i)) next.add(i);
        hidden = next;
    }

    const setup = $derived([example.scramble, ...segments.slice(0, index).map((s) => s.moves)].join(" "));

    let stage: CubeStage;
    let viewport = $state(1024);
    const stageSize = $derived(Math.min(440, viewport - 40));
    let playing = $state(false);
    let atStart = $state(true);
    let atEnd = $state(false);

    const iconButton =
        "inline-flex size-11 items-center justify-center rounded-lg border border-ink transition-colors disabled:pointer-events-none disabled:text-ink/25";
</script>

<svelte:window bind:innerWidth={viewport} />

<div class="grid gap-8 xl:grid-cols-[auto_minmax(0,24rem)] xl:items-start">
    <div class="flex flex-col items-center gap-3">
        <CubeStage bind:this={stage} bind:playing bind:atStart bind:atEnd {setup} alg={segments[index]?.moves} {mask} size={stageSize} />
        <div class="flex items-center gap-2" role="group" aria-label="播放控制">
            <button type="button" class="{iconButton} bg-paper hover:bg-neutral-100" aria-label="回到這一步驟開頭，視角也重置" onclick={() => stage.reset()}>
                <RotateCcw class="size-5" aria-hidden="true" />
            </button>
            <span class="mx-0.5 h-6 w-px bg-neutral-300" aria-hidden="true"></span>
            <button
                type="button"
                class="{iconButton} bg-paper hover:bg-neutral-100 {index === 0 ? 'face-down' : ''}"
                aria-label="上一步驟"
                disabled={index === 0}
                onclick={() => index--}
            >
                <SkipBack class="size-5" aria-hidden="true" />
            </button>
            <button
                type="button"
                class="{iconButton} bg-paper hover:bg-neutral-100 {atStart ? 'face-down' : ''}"
                aria-label="退一步"
                disabled={atStart}
                onclick={() => stage.step(-1)}
            >
                <StepBack class="size-5" aria-hidden="true" />
            </button>
            <button
                type="button"
                class="{iconButton} w-14 bg-ink text-paper hover:bg-neutral-800"
                aria-label={playing ? "暫停" : "播放這一步驟"}
                onclick={() => stage.toggle()}
            >
                {#if playing}
                    <Pause class="size-5" fill="currentColor" aria-hidden="true" />
                {:else}
                    <Play class="size-5 translate-x-px" fill="currentColor" aria-hidden="true" />
                {/if}
            </button>
            <button
                type="button"
                class="{iconButton} bg-paper hover:bg-neutral-100 {atEnd ? 'face-down' : ''}"
                aria-label="進一步"
                disabled={atEnd}
                onclick={() => stage.step(1)}
            >
                <StepForward class="size-5" aria-hidden="true" />
            </button>
            <button
                type="button"
                class="{iconButton} bg-paper hover:bg-neutral-100 {index === segments.length - 1 ? 'face-down' : ''}"
                aria-label="下一步驟"
                disabled={index === segments.length - 1}
                onclick={() => index++}
            >
                <SkipForward class="size-5" aria-hidden="true" />
            </button>
        </div>
        <p class="text-[13px] tabular-nums text-neutral-600">
            第 {index + 1} 步驟，共 {segments.length} 步驟（{segments[index]?.label}）
        </p>
    </div>

    <div>
        <p class="flex justify-end px-1 pb-1 text-[13px] font-semibold text-neutral-600" aria-hidden="true">貼紙</p>
        <ol class="divide-y divide-neutral-300 border-y border-ink">
            {#each segments as segment, i}
                {@const active = i === index}
                <li class="flex items-stretch gap-1">
                    <button
                        type="button"
                        class="grid min-w-0 flex-1 grid-cols-[3.5rem_minmax(0,1fr)_auto] items-baseline gap-3 rounded-lg px-2 py-2 text-left transition-colors {active
                            ? 'bg-ink text-paper'
                            : 'hover:bg-neutral-100'}"
                        aria-current={active ? "step" : undefined}
                        onclick={() => (index = i)}
                    >
                        <span class="text-[13px] font-semibold">{segment.label}</span>
                        <span class="min-w-0 text-[19px] font-semibold leading-snug [word-spacing:0.15em]">{segment.moves}</span>
                        <span class="text-right text-[13px] tabular-nums {active ? 'text-paper' : 'text-neutral-600'}">
                            {#if segment.stm}{segment.stm} 步{/if}{#if segment.slots.length}<br />{segment.slots.join("、")}{/if}
                        </span>
                    </button>
                    {#if segment.pairs.length}
                        <label class="flex w-11 shrink-0 cursor-pointer items-center justify-center rounded-lg hover:bg-neutral-100">
                            <input
                                type="checkbox"
                                class="size-5 cursor-pointer accent-ink"
                                checked={!hidden.has(i)}
                                onchange={() => toggle(i)}
                                aria-label="顯示{segment.label}的貼紙"
                            />
                        </label>
                    {:else}
                        <span class="w-11 shrink-0" aria-hidden="true"></span>
                    {/if}
                </li>
            {/each}
        </ol>
    </div>
</div>
