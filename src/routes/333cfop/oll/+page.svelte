<script>
    import Vis2dCard from "$lib/components/cube/vis2dCard.svelte";
    import Header from "$lib/components/header.svelte";
    import Paragraph from "$lib/components/paragraph.svelte";
    import Separator from "$lib/components/ui/separator/separator.svelte";
    import { breadcrumbs } from "$lib/state/shared.svelte";
    $effect(() => {
        breadcrumbs.paths = ["3x3x3 CFOP", "OLL"];
    });
    const sections = [
        {
            header: "二段OLL",
            description: "",
            stage: "oll",
            algorithms: [
                {
                    alg: "R U R' U R U2' R'",
                    name: "OLL27",
                },
                {
                    alg: "R U2' R' U' R U' R'",
                    name: "OLL26",
                },
                {
                    alg: "F R U R' U' R U R' U' R U R' U' F'",
                    name: "OLL21",
                    algDisplay: "F (R U R' U') (R U R' U') (R U R' U') F'",
                },
                {
                    alg: "R U2' R2' U' R2 U' R2' U2' R",
                    name: "OLL22",
                },
                {
                    alg: "x' R U L U' R' U L' U' x",
                    name: "OLL25",
                },
                {
                    alg: "x' R U L' U' R' U L U' x",
                    name: "OLL24",
                },
                {
                    alg: "R2' D' R U2' R' D R U2' R",
                    name: "OLL23",
                },
            ],
        },
        {
            header: "簡單OLL",
            description: "",
            stage: "oll",
            algorithms: [
                {
                    alg: "F (R U R' U') F'",
                    name: "OLL45",
                },
                {
                    alg: "(R U R' U') R' F R F'",
                    name: "OLL33",
                },
                {
                    alg: "F (R U R' U') (R U R' U') F'",
                    name: "OLL48",
                },
                {
                    alg: "F' (L' U' L U) (L' U' L U) F",
                    name: "OLL47",
                },
                {
                    alg: "R' U' F' U F R",
                    name: "OLL43",
                },
                {
                    alg: "f (R U R' U') f'",
                    name: "OLL44",
                },
                {
                    alg: "F (U R U' R') (U R U' R') F'",
                    name: "OLL51",
                },
                {
                    alg: "R' U' R' F R F' U R",
                    name: "OLL46",
                },
                {
                    alg: "r U R' U R U2' r'",
                    name: "OLL7",
                },
                {
                    alg: "l' U' L U' L' U2' l",
                    name: "OLL8",
                },
                {
                    alg: "F R' F' R U R U' R'",
                    name: "OLL37",
                },
                {
                    alg: "r U2 R' U' R U' r'",
                    name: "OLL6",
                },
                {
                    alg: "l' U2 L U L' U l",
                    name: "OLL5",
                },
                {
                    alg: "r U R' U' r' R U R U' R'",
                    name: "OLL28",
                },
                {
                    alg: "R U R' U' R' r U R U' r'",
                    name: "OLL57",
                },
                {
                    alg: "(R U R' U) (R U' R' U') R' F R F'",
                    name: "OLL38",
                },
                {
                    alg: "(L' U' L U') (L' U L U) L F' L' F",
                    name: "OLL36",
                },
            ],
        },
    ];
</script>

<Header>OLL</Header>
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
<div class="flex flex-col items-center my-4">
    <div class="flex flex-wrap justify-center gap-2 my-1">
        <div class="w-60">
            <Vis2dCard
                alg="F' (L' U' L U) (L' U' L U) F"
                name="OLL47"
                stage="oll"
            />
        </div>
        <div class="w-60">
            <Vis2dCard
                alg="F (R U R' U') (R U R' U') F'"
                name="OLL48"
                stage="oll"
            />
        </div>
    </div>
    <div class="text-xs">
        OLL47與OLL48只是左右手互換的公式，外觀也是左右交換。
    </div>
</div>
<div class="flex flex-col items-center my-4">
    <div class="flex flex-wrap justify-center gap-2 my-2">
        <div class="w-60">
            <Vis2dCard alg="R U R' U R U2' R'" name="OLL27" stage="oll" />
        </div>
        <div class="w-60">
            <Vis2dCard alg="r U R' U R U2' r'" name="OLL7" stage="oll" />
        </div>
    </div>
    <div class="text-xs">
        OLL27與OLL7雖然外觀沒有任何的相似之處，但手法非常接近，可以一起學習。
    </div>
</div>
<Paragraph>
    練習的順序建議由「二段OLL」開始，這是最重要的7組公式，能大幅降低OLL的時間；接著，我們練習手順簡單、容易記憶的公式；最後再來處理形狀、手順都複雜的公式。
</Paragraph>
{#each sections as section}
    <div class="flex items-baseline gap-x-2">
        <Header>{section.header}</Header>
        <span>({section.algorithms.length})</span>
    </div>
    <div class="">{section.description}</div>
    <div class="grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2">
        {#each section.algorithms as algorithm}
            <Vis2dCard
                alg={algorithm.alg}
                name={algorithm.name}
                stage={section.stage}
            />
        {/each}
    </div>
    <Separator class="my-8" />
{/each}
