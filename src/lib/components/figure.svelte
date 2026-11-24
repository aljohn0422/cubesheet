<script lang="ts">
    import type { Snippet } from "svelte";

    let { caption, children }: { caption: string; children: Snippet } = $props();
</script>

<figure class="my-8 max-w-[46rem]">
    <div class="ruled-frame">
        <div class="ruled-grid grid sm:grid-cols-2">
            {@render children()}
        </div>
    </div>
    <figcaption class="mt-3 text-[15px] text-neutral-600">{caption}</figcaption>
</figure>
