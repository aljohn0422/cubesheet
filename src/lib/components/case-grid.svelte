<script lang="ts">
    import type { Snippet } from "svelte";

    let { children }: { children: Snippet } = $props();
</script>

<div class="ruled-frame">
    <div class="ruled-grid grid md:grid-cols-2 xl:grid-cols-3">
        {@render children()}
    </div>
</div>
