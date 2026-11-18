<script lang="ts">
    import type { ComponentProps } from "svelte";
    import CaseGrid from "./case-grid.svelte";
    import Vis2dCard from "./cube/vis2dCard.svelte";
    import Section from "./section.svelte";
    import { DIVIDER, type AlgSection } from "$lib/data/types";
    import { countAlgs } from "$lib/data/util";

    // 章節頁的公式區：每個段落一張表格。所有章節共用，新增欄位只要改 Vis2dCard。
    let {
        sections,
        /** 套到每張卡片的共用參數，例如 F2L 的斜角視圖 */
        card = {},
    }: {
        sections: AlgSection[];
        card?: Partial<ComponentProps<typeof Vis2dCard>>;
    } = $props();
</script>

{#each sections as section (section.header)}
    <Section title={section.header} count={countAlgs(section)}>
        <CaseGrid>
            {#each section.algorithms as item}
                {#if item === DIVIDER}
                    <div class="col-span-full h-3 bg-neutral-100" aria-hidden="true"></div>
                {:else}
                    <Vis2dCard {...item} stage={section.stage} {...card} />
                {/if}
            {/each}
        </CaseGrid>
    </Section>
{/each}
