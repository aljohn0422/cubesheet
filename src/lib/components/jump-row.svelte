<script lang="ts">
    import { anchorHref } from "$lib/anchor";

    // 本頁段落：像速查表的欄位標頭，一行列出所有段落，點了直接跳過去。
    // 段落少於兩個時不顯示。
    let { items }: { items: { title: string; count?: number }[] } = $props();
</script>

{#if items.length > 1}
    <!-- -mt-4：緊接在 layout 的章節標題（mb-12）下方 -->
    <nav aria-label="本頁段落" class="-mt-4 mb-12 flex flex-wrap gap-x-6 gap-y-1 border-y border-ink py-2 print:hidden">
        {#each items as item}
            <a
                href={anchorHref(item.title)}
                class="inline-flex min-h-11 items-center gap-1.5 text-[15px] font-semibold hover:underline"
            >
                {item.title}
                {#if item.count !== undefined}
                    <span class="font-normal tabular-nums text-neutral-600">{item.count}</span>
                {/if}
            </a>
        {/each}
    </nav>
{/if}
