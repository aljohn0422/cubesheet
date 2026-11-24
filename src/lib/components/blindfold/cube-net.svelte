<script lang="ts">
    import { STICKER_COLORS } from "$lib/blindfold/cube";

    let { faces }: { faces: number[][][] } = $props();

    const layout = [null, 0, null, null, 1, 2, 3, 4, null, 5, null, null];
</script>

<div class="inline-grid grid-cols-4 gap-1.5" aria-hidden="true">
    {#each layout as faceIndex}
        {#if faceIndex === null}
            <div></div>
        {:else}
            <div class="grid grid-cols-3 gap-0.5">
                {#each faces[faceIndex].flat() as sticker}
                    <div class="size-5 rounded border border-ink/30" style="background-color: {STICKER_COLORS[sticker]}"></div>
                {/each}
            </div>
        {/if}
    {/each}
</div>
