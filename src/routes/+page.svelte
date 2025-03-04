<script>
    import { breadcrumbs } from "$lib/state/shared.svelte";

    $effect(() => {
        breadcrumbs.paths = [];
    });
</script>
