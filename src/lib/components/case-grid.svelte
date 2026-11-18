<script lang="ts">
    import type { Snippet } from "svelte";

    // 公式卡的表格：三欄 → 兩欄 → 一欄，變窄時只減少欄數、不縮小卡片
    let { children }: { children: Snippet } = $props();
</script>

<div class="ruled-grid grid md:grid-cols-2 xl:grid-cols-3">
    {@render children()}
</div>
