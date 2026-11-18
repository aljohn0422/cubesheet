<script lang="ts">
    import type { Snippet } from "svelte";

    // 插圖：一組並排的公式卡（表格線），下面一行灰色圖說
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
