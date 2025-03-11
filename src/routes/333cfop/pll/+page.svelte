<script>
    import Vis2dCard from "$lib/components/cube/vis2dCard.svelte";
    import Header from "$lib/components/header.svelte";
    import Separator from "$lib/components/ui/separator/separator.svelte";
    import { breadcrumbs } from "$lib/state/shared.svelte";

    $effect(() => {
        breadcrumbs.paths = ["3x3x3 CFOP", "PLL"];
    });

    const sections = [
        {
            header: "二段PLL",
            description: "",
            stage: "pll",
            algorithms: [
                {
                    alg: "R U' R U R U R U' R' U' R2",
                    name: "Ua",
                    arrow: "U5U3,U3U7,U7U5",
                },
                {
                    alg: "R2 U R U R' U' R' U' R' U R'",
                    name: "Ub",
                    arrow: "U3U5,U5U7,U7U3",
                },
                {
                    alg: "x' R U' R D2' R' U R D2' R2 x",
                    name: "Ab",
                    arrow: "U2U6,U6U8,U8U2",
                },
                {
                    alg: "x' L' U L' D2' L U' L' D2' L2 x",
                    name: "Aa",
                    arrow: "U0U8,U8U6,U6U0",
                },
                {
                    alg: "M2' U M2' U2 M2' U M2'",
                    name: "H",
                    arrow: "U1U7,U7U1,U5U3,U3U5",
                },
                {
                    alg: "M' U M2' U M2' U M' U2 M2'",
                    name: "Z",
                    arrow: "U1U5,U5U1,U3U7,U7U3",
                },
                {
                    alg: "(F R U' R' U' R U R' F') (R U R' U' R' F R F')",
                    name: "OLL23",
                    arrow: "U0U8,U8U0,U1U3,U3U1",
                },
            ],
        },
        {
            header: "簡單PLL",
            description: "",
            stage: "pll",
            algorithms: [
                {
                    alg: "R U R' U' R' F R2 U' R' U' R U R' F'",
                    name: "T",
                    arrow: "U3U5,U5U3,U2U8,U8U2",
                },
                {
                    alg: "(R U R D) (R' U R D') (R' U' R D) (R' U' R D') R2'",
                    name: "E",
                    arrow: "U2U8,U8U2,U0U6,U6U0",
                },
                {
                    alg: "(R U R' F') R U R' U' R' F R2 U' R'",
                    name: "Jb",
                    arrow: "U2U8,U8U2,U5U7,U7U5",
                },
                {
                    alg: "(L' U' L F) L' U' L U L F' L2' U L",
                    name: "Ja",
                    arrow: "U0U6,U6U0,U3U7,U7U3",
                },
            ],
        },
        {
            header: "有點奇怪PLL",
            description: "",
            stage: "pll",
            algorithms: [
                {
                    alg: "R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R",
                    name: "F",
                    arrow: "U1U7,U7U1,U2U8,U8U2",
                },
                {
                    alg: "R' U R U' R' f' U' R U2' R' U' R U' R' f R",
                    name: "F",
                    arrow: "U0U8,U8U0,U1U5,U5U1",
                },
                {
                    alg: "(R' U2 R U2') R' F R U R' U' R' F' R2",
                    name: "Rb",
                    arrow: "U2U0,U0U2,U5U7,U7U5",
                },
                {
                    alg: "R U' R' U' R U R D R' U' R D' R' U2 R'",
                    name: "Ra",
                    arrow: "U2U9,U9U2,U1U3,U3U1",
                },
                {
                    alg: "(R U R' U) (R U R' F' R U R' U' R' F R2 U' R') U2 R U' R'",
                    name: "Na",
                    arrow: "U2U6,U6U2,U3U5,U5U3",
                },
                {
                    alg: "R' U R U' R' F' U' F R U R' F R' F' R U' R",
                    name: "Nb",
                    arrow: "U0U8,U8U0,U3U5,U5U3",
                },
            ],
        },
        {
            header: "四大天王",
            description: "",
            stage: "pll",
            algorithms: [
                {
                    alg: "R2 U R' U R' U' R U' R2 U' D R' U R D'",
                    name: "Ga",
                    arrow: "U0U2,U2U6,U6U0,U1U3,U3U5,U5U1",
                },
                {
                    alg: "R' U' R U D' R2 U R' U R U' R U' R2 D",
                    name: "Gb",
                    arrow: "U0U6,U6U8,U8U0,U1U7,U7U3,U3U1",
                },
                {
                    alg: "R2 U' R U' R U R' U R2 U D' R U' R' D",
                    name: "Gc",
                    arrow: "U0U6,U6U8,U8U0,U3U5,U5U7,U7U3",
                },
                {
                    alg: "R U R' U' D R2 U' R U' R' U R' U R2 D'",
                    name: "Gd",
                    arrow: "U0U2,U2U6,U6U0,U1U3,U3U7,U7U1",
                },
            ],
        },
    ];
</script>

{#each sections as section}
    <div class="flex items-baseline gap-x-2">
        <Header>{section.header}</Header>
        <span>({section.algorithms.length})</span>
    </div>
    <div class="">{section.description}</div>
    <div class="grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2">
        {#each section.algorithms as algorithm}
            <Vis2dCard
                alg={algorithm.alg}
                name={algorithm.name}
                stage={section.stage}
                arrow={algorithm.arrow}
            />
        {/each}
    </div>
    <Separator class="my-8" />
{/each}
