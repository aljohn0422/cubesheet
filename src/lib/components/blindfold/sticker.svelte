<script lang="ts">
    import { STICKER_COLORS } from "$lib/blindfold/cube";
    import type { RecogItem } from "$lib/blindfold/recognition";

    let { item }: { item: RecogItem } = $props();

    const isCorner = $derived(item.sides.filter((c) => c >= 0).length === 2);
    const has = (i: number) => item.sides[(i + 4) % 4] >= 0;

    function barClass(i: number) {
        const horizontal = i === 0 || i === 2;
        const edge = ["top-0", "right-0", "bottom-0", "left-0"][i];
        if (!isCorner) {
            return horizontal
                ? `${edge} left-1/2 h-3 w-10 -translate-x-1/2`
                : `${edge} top-1/2 h-10 w-3 -translate-y-1/2`;
        }
        if (horizontal) return `${edge} h-3 w-10 ${has(i + 1) ? "right-4" : "left-4"}`;
        return `${edge} h-10 w-3 ${has(i - 1) ? "top-4" : "bottom-4"}`;
    }
</script>

<div class="relative size-24" aria-hidden="true">
    <div
        class="absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-ink"
        style="background-color: {STICKER_COLORS[item.main]}"
    ></div>
    {#each item.sides as color, i}
        {#if color >= 0}
            <div
                class="absolute rounded border border-ink {barClass(i)}"
                style="background-color: {STICKER_COLORS[color]}"
            ></div>
        {/if}
    {/each}
</div>
