<script lang="ts">
    import CaseSections from "$lib/components/case-sections.svelte";
    import { F2L_VIEW } from "$lib/components/cube/presets";
    import { advancedF2lSections as sections } from "$lib/data/advanced-f2l";
</script>

<CaseSections {sections} card={F2L_VIEW} />
