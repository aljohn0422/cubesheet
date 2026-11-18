<script lang="ts">
    import CaseSections from "$lib/components/case-sections.svelte";
    import Vis2dCard from "$lib/components/cube/vis2dCard.svelte";
    import Figure from "$lib/components/figure.svelte";
    import JumpRow from "$lib/components/jump-row.svelte";
    import Paragraph from "$lib/components/paragraph.svelte";
    import Section from "$lib/components/section.svelte";
    import { F2L_VIEW } from "$lib/components/cube/presets";
    import { f2lCases, f2lSections as sections } from "$lib/data/cfop-f2l";
    import { indexByName, jumpItems } from "$lib/data/util";

    const byName = indexByName(f2lCases);
</script>

<JumpRow items={[{ title: "基礎型態" }, ...jumpItems(sections)]} />

<Section title="基礎型態">
    <Paragraph>
    F2L（first two
    layers）是CFOP速解法中的第二個步驟，目的是完成「前兩層」。在最基礎的LBL解法中，完成十字後，第一層的角塊、以及第二層的邊塊是獨立完成的；然而，這兩個步驟實際上可以合併為一系列的公式，也就是F2L。
    </Paragraph>
    <Paragraph>
    大部分的F2L可以靠著理解學習，實際上，最基礎的狀況只有2種型態：
    </Paragraph>
    <Figure caption="F2L的基礎型態">
        {#each ["F2L 1", "F2L 4"] as name}
            <Vis2dCard {...byName[name]} {...F2L_VIEW} />
        {/each}
    </Figure>
    <Paragraph>
    若加上其左右顛倒的鏡像，則再多兩個，實際上只是右手換成左手：
    </Paragraph>
    <Figure caption="F2L的基礎型態（鏡像）">
        {#each ["F2L 2", "F2L 3"] as name}
            <Vis2dCard {...byName[name]} {...F2L_VIEW} />
        {/each}
    </Figure>
    <Paragraph>
    絕大多數的F2L，都是先做成基礎型態後，使用上述4種公式處理。雖然F2L總共有41種公式，但都可以靠理解來學習，不需要強行記憶。
    </Paragraph>
</Section>

<CaseSections {sections} card={F2L_VIEW} />
