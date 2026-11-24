<script lang="ts">
    import type { Snippet } from "svelte";
    import { anchorId } from "$lib/anchor";

    let {
        title,
        count = undefined as number | undefined,
        flush = false,
        children,
    }: {
        title: string;
        count?: number;
        flush?: boolean;
        children: Snippet;
    } = $props();
</script>

<section id={anchorId(title)} class="mb-16">
    <h2
        class="flex items-baseline justify-between gap-4 border-b-2 border-ink pb-2 text-2xl font-bold {flush
            ? ''
            : 'mb-5'}"
    >
        {title}
        {#if count !== undefined}
            <span class="text-[15px] font-normal tabular-nums text-neutral-600">{count}</span>
        {/if}
    </h2>
    {@render children()}
</section>
