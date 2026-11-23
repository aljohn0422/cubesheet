<script lang="ts">
    import CubeImage from "./cube/cubeImage.svelte";

    // 篩選用的圖示格：上面一張小圖解，下面標籤。
    // 跟其他控制項一樣是 1px 墨框；選中只用一種標示：標籤反白。
    let {
        label,
        selected,
        onclick,
        /** 會被復原的公式（圖解的 case 參數）；沒有時顯示「全部」的格子 */
        alg = undefined as string | undefined,
        stage = undefined as string | undefined,
    }: {
        label: string;
        selected: boolean;
        onclick: () => void;
        alg?: string;
        stage?: string;
    } = $props();
</script>

<button
    type="button"
    aria-pressed={selected}
    class="flex w-[4.5rem] shrink-0 flex-col items-center gap-1.5 rounded-lg border border-ink p-1.5 transition-colors hover:bg-neutral-100"
    {onclick}
>
    {#if alg}
        <CubeImage {alg} {stage} size={52} />
    {:else}
        <!-- 「全部」：一面空白的 3x3，用方塊自己的語彙，不用通用 UI 圖示 -->
        <svg viewBox="0 0 52 52" class="size-[52px]" aria-hidden="true">
            {#each [0, 1, 2] as row}
                {#each [0, 1, 2] as col}
                    <rect
                        x={7 + col * 13.5}
                        y={7 + row * 13.5}
                        width="11"
                        height="11"
                        rx="2"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                    />
                {/each}
            {/each}
        </svg>
    {/if}
    <span
        class="w-full rounded px-1 text-center text-[13px] font-semibold leading-6 {selected ? 'bg-ink text-paper' : ''}"
        >{label}</span
    >
</button>
