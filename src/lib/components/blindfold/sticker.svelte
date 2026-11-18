<script lang="ts">
    import { STICKER_COLORS } from "$lib/blindfold/cube";
    import type { RecogItem } from "$lib/blindfold/recognition";

    // 貼紙辨認的圖：中間是正對你的那張貼紙，旁邊的細條是同一塊上的其他貼紙
    let { item }: { item: RecogItem } = $props();

    // item.sides 的順序是 [上, 右, 下, 左]
    const sideClass = [
        "left-1/2 top-0 h-3 w-10 -translate-x-1/2",
        "right-0 top-1/2 h-10 w-3 -translate-y-1/2",
        "bottom-0 left-1/2 h-3 w-10 -translate-x-1/2",
        "left-0 top-1/2 h-10 w-3 -translate-y-1/2",
    ];
</script>

<div class="relative size-24" aria-hidden="true">
    <div
        class="absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-ink"
        style="background-color: {STICKER_COLORS[item.main]}"
    ></div>
    {#each item.sides as color, i}
        {#if color >= 0}
            <div
                class="absolute rounded border border-ink {sideClass[i]}"
                style="background-color: {STICKER_COLORS[color]}"
            ></div>
        {/if}
    {/each}
</div>
