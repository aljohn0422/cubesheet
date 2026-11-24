<script lang="ts">
    import CaseSections from "$lib/components/case-sections.svelte";
    import Vis2dCard from "$lib/components/cube/vis2dCard.svelte";
    import Figure from "$lib/components/figure.svelte";
    import JumpRow from "$lib/components/jump-row.svelte";
    import Paragraph from "$lib/components/paragraph.svelte";
    import Section from "$lib/components/section.svelte";
    import { ollSections as sections } from "$lib/data/cfop-oll";
    import { indexByName, isCase, jumpItems, sumAlgs } from "$lib/data/util";

    const listedCount = sumAlgs(sections);
    const byName = indexByName(sections.flatMap((s) => s.algorithms).filter(isCase));
</script>

<JumpRow items={[{ title: "怎麼學" }, ...jumpItems(sections)]} />

<Section title="怎麼學">
    <Paragraph>
    OLL (orientation of last
    layer)為完成第三層頂面填色的步驟，本頁以黃色作為頂面，練完OLL，即可以一個公式完成黃色面。
    </Paragraph>
    <Paragraph>
    整套OLL共有57個公式，一般來說，是初學玩家第一次學習這麼龐大的公式組合，對於手部肌肉記憶、辨識眼力都是一大挑戰。
    </Paragraph>
    <Paragraph>
    第一次學習OLL這種大型公式的困難點有幾個，首先，OLL幾乎沒有可以靠「純理解」學習的公式，大部分是硬碰硬的練習；其次，整組公式有57個，好不容易背好的公式在實戰中也不常遇到，缺乏練習機會。剛開始練習的時候可能會覺得眼花撩亂、也許很容易背了就忘、或是混淆類似的公式，務必耐心學習。
    </Paragraph>
    <Paragraph>
    雖說困難重重，但仍然有技巧可以採用。OLL的公式都有一個鏡像（左右相反）的兄弟，例如OLL47、OLL48，其實只是左右手交換，骨子裡根本是同樣的公式；此外，有些公式雖然形狀完全不相似，但手順相當接近，例如OLL27與OLL7。這種有關聯性的公式比較容易記憶。
    </Paragraph>
    <Figure caption="OLL47與OLL48只是左右手互換的公式，外觀也是左右交換。">
        {#each ["OLL47", "OLL48"] as name}
            <Vis2dCard {...byName[name]} stage="oll" />
        {/each}
    </Figure>
    <Figure caption="OLL27與OLL7雖然外觀沒有任何的相似之處，但手法非常接近，可以一起學習。">
        {#each ["OLL27", "OLL7"] as name}
            <Vis2dCard {...byName[name]} stage="oll" />
        {/each}
    </Figure>
    <Paragraph>
    練習的順序建議由「二段OLL」開始，這是最重要的7組公式，能大幅降低OLL的時間；接著，我們練習手順簡單、容易記憶的公式；最後再來處理形狀、手順都複雜的公式。
    <span class="text-neutral-600"
        >（本頁目前收錄 {listedCount} 個，其餘形狀、手順都複雜的公式還沒整理進來。）</span
    >
    </Paragraph>
</Section>

<CaseSections {sections} />
