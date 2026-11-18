<script lang="ts">
    import CaseSections from "$lib/components/case-sections.svelte";
    import JumpRow from "$lib/components/jump-row.svelte";
    import { pllSections as sections } from "$lib/data/cfop-pll";
    import { jumpItems } from "$lib/data/util";
</script>

<JumpRow items={jumpItems(sections)} />

<CaseSections {sections} />
