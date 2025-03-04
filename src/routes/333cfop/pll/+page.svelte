<script>
    import { breadcrumbs } from "$lib/state/shared.svelte";

    $effect(() => {
        breadcrumbs.paths = ["3x3x3 CFOP", "PLL"];
    });
</script>
