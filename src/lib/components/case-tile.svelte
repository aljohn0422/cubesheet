<script lang="ts">
    import CubeImage from "./cube/cubeImage.svelte";

    let {
        label,
        selected,
        onclick,
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
