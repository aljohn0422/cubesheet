<script lang="ts">
    import Vis2dCard from "$lib/components/cube/vis2dCard.svelte";
    import Header from "$lib/components/header.svelte";
    import Paragraph from "$lib/components/paragraph.svelte";
    import Separator from "$lib/components/ui/separator/separator.svelte";
    import { breadcrumbs } from "$lib/state/shared.svelte";

    $effect(() => {
        breadcrumbs.paths = ["3x3x3 CFOP", "F2L"];
    });

    const cases = [
        {
            alg: "U (R U' R')",
            name: "F2L 1",
        },
        {
            alg: "y U' (L' U L) y'",
            name: "F2L 2",
        },
        {
            alg: "y' (R' U' R) y",
            name: "F2L 3",
        },
        {
            alg: "(R U R')",
            name: "F2L 4",
        },
        {
            alg: "U' R U R' U2 (R U' R)'",
            name: "F2L 5",
        },
        {
            alg: "y' U R' U' R U2 (R' U R) y",
            name: "F2L 6",
        },
        {
            alg: "U' R U2 R' U2 (R U' R')",
            name: "F2L 7",
        },
        {
            alg: "d R' U2 R U2 (R' U R) y",
            name: "F2L 8",
        },
        {
            alg: "U' R U' R' d (R' U' R) y",
            name: "F2L 9",
        },
        {
            alg: "U' R U R' U R U R'",
            name: "F2L 10",
        },
        {
            alg: "U' R U2 R' d (R' U' R) y",
            name: "F2L 11",
        },
        {
            alg: "R' U2 R2 U R2 U R",
            name: "F2L 12",
        },
        {
            alg: "d R' U R U' (R' U' R) y",
            name: "F2L 13",
        },
        {
            alg: "U' R U' R' U (R U R')",
            name: "F2L 14",
        },
        {
            alg: "F' U F U2 (R U R')",
            name: "F2L 15",
        },
        {
            alg: "R U' R' U2 y' (R' U' R) y",
            name: "F2L 16",
        },
        {
            alg: "R U2 R' U' (R U R')",
            name: "F2L 17",
        },
        {
            alg: "y' R' U2 R U (R' U' R) y",
            name: "F2L 18",
        },
        {
            alg: "U R U2 R' U (R U' R')",
            name: "F2L 19",
        },
        {
            alg: "y' U' R' U2 R U' (R' U R) y",
            name: "F2L 20",
        },
        {
            alg: "U2 R U R' U (R U' R')",
            name: "F2L 21",
        },
        {
            alg: "y' U2 R' U' R U' (R' U R) y",
            name: "F2L 22",
        },
        {
            alg: "R U R' U2 R U R' U' (R U R')",
            name: "F2L 23",
        },
        {
            alg: "R U R' d R' U R U' (R' U R) y",
            name: "F2L 24",
        },
        {
            alg: "U' F' U F U (R U' R')",
            name: "F2L 25",
        },
        {
            alg: "U R U' R' U' F' U F",
            name: "F2L 26",
        },
        {
            alg: "R U' R' U (R U' R')",
            name: "F2L 27",
        },
        {
            alg: "y' R' U R U' (R' U R) y",
            name: "F2L 28",
        },
        {
            alg: "y' R' U' R U (R' U' R) y",
            name: "F2L 29",
        },
        {
            alg: "R U R' U' (R U R')",
            name: "F2L 30",
        },
        {
            alg: "R U' R' U (F' U F)",
            name: "F2L 31",
        },
        {
            alg: "(R U R' U') (R U R' U') (R U R')",
            name: "F2L 32",
        },
        {
            alg: "U' R U' R' U2 (R U' R')",
            name: "F2L 33",
        },
        {
            alg: "U' R U2 R' U (R U R')",
            name: "F2L 34",
        },
        {
            alg: "U' R U R' U (F' U' F)",
            name: "F2L 35",
        },
        {
            alg: "U F' U' F U' (R U R')",
            name: "F2L 36",
        },
        {
            alg: "R U' R' U y' R' U2 R U2 (R' U R) y",
            name: "F2L 37",
        },
        {
            alg: "(R U R' U') R U2 R' U' (R U R')",
            name: "F2L 38",
        },
        {
            alg: "(R U' R' U) R U2 R' U (R U' R')",
            name: "F2L 39",
        },
        {
            alg: "R U' R' U' R U' R' U (F' U' F)",
            name: "F2L 40",
        },
        {
            alg: "R U R' U' R U' R' U2 (F' U' F)",
            name: "F2L 41",
        },
    ];
    const sections = [
        {
            header: "A、作到隔壁",
            description: "",
            IDs: [
                "F2L 1",
                "F2L 5",
                "F2L 7",
                "divider",
                "F2L 2",
                "F2L 6",
                "F2L 8",
            ],
        },
        {
            header: "B、作到對面",
            description: "",
            IDs: [
                "F2L 3",
                "F2L 9",
                "F2L 11",
                "F2L 13",
                "divider",
                "F2L 4",
                "F2L 10",
                "F2L 12",
                "F2L 14",
            ],
        },
        {
            header: "C、角塊朝上",
            description: "",
            IDs: ["F2L 19", "F2L 21", "divider", "F2L 20", "F2L 22"],
        },
        {
            header: "D、黏在一起但是方向錯了",
            description: "",
            IDs: [
                "F2L 15",
                "F2L 16",
                "divider",
                "F2L 17",
                "F2L 18",
                "divider",
                "F2L 23",
                "F2L 24",
            ],
        },
        {
            header: "E、角塊位置正確",
            description: "",
            IDs: [
                "F2L 25",
                "F2L 26",
                "divider",
                "F2L 27",
                "F2L 28",
                "divider",
                "F2L 29",
                "F2L 30",
            ],
        },
        {
            header: "F、邊塊位置正確",
            description: "",
            IDs: [
                "F2L 31",
                "F2L 32",
                "divider",
                "F2L 33",
                "F2L 34",
                "divider",
                "F2L 35",
                "F2L 36",
            ],
        },
        {
            header: "G、邊角位置都正確",
            description: "",
            IDs: [
                "F2L 38",
                "F2L 39",
                "divider",
                "F2L 40",
                "F2L 41",
                "divider",
                "F2L 37",
            ],
        },
    ];

    let caseDict = $derived(Object.fromEntries(cases.map((c) => [c.name, c])));
</script>

<Header>基礎型態</Header>
<Paragraph>
    F2L（first two
    layers）是CFOP速解法中的第二個步驟，目的是完成「前兩層」。在最基礎的LBL解法中，完成十字後，第一層的角塊、以及第二層的邊塊是獨立完成的；然而，這兩個步驟實際上可以合併為一系列的公式，也就是F2L。
</Paragraph>
<Paragraph>
    大部分的F2L可以靠著理解學習，實際上，最基礎的狀況只有2種型態：
</Paragraph>
<div class="flex flex-col items-center my-4">
    <div class="flex flex-wrap justify-center gap-2 my-2">
        {#each cases.filter((c) => ["F2L 1", "F2L 4"].includes(c.name)) as alg}
            <div class="w-60">
                <Vis2dCard
                    alg={alg.alg}
                    name={alg.name}
                    stage="f2l"
                    rotation="y35x-30"
                    view=""
                    fc="yyyyyyyyyrrrrrrrrrbbbbbbbbbwwwwwwwwwoooooooooggggggggg"
                />
            </div>
        {/each}
    </div>
    <div class="text-xs">F2L的基礎型態</div>
</div>
<Paragraph>
    若加上其左右顛倒的鏡像，則再多兩個，實際上只是右手換成左手：
</Paragraph>
<div class="flex flex-col items-center my-4">
    <div class="flex flex-wrap justify-center gap-2 my-2">
        {#each cases.filter((c) => ["F2L 2", "F2L 3"].includes(c.name)) as alg}
            <div class="w-60">
                <Vis2dCard
                    alg={alg.alg}
                    name={alg.name}
                    stage="f2l"
                    rotation="y35x-30"
                    view=""
                    fc="yyyyyyyyyrrrrrrrrrbbbbbbbbbwwwwwwwwwoooooooooggggggggg"
                />
            </div>
        {/each}
    </div>
    <div class="text-xs">F2L的基礎型態（鏡像）</div>
</div>
<Paragraph>
    絕大多數的F2L，都是先做成基礎型態後，使用上述4種公式處理。雖然F2L總共有41種公式，但都可以靠理解來學習，不需要強行記憶。
</Paragraph>

{#each sections as section}
    <div class="flex items-baseline gap-x-2">
        <Header>{section.header}</Header>
        <span>({section.IDs.filter((ele) => ele != "divider").length})</span>
    </div>
    <div class="">{section.description}</div>
    <div class="grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2">
        {#each section.IDs as id}
            {#if id == "divider"}
                <div class="col-span-full">
                    <Separator />
                </div>
            {:else}
                <Vis2dCard
                    alg={caseDict[id].alg}
                    name={id}
                    stage="f2l"
                    rotation="y35x-30"
                    view=""
                    fc="yyyyyyyyyrrrrrrrrrbbbbbbbbbwwwwwwwwwoooooooooggggggggg"
                />
            {/if}
        {/each}
    </div>
    <Separator class="my-8" />
{/each}
