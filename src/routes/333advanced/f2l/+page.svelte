<script lang="ts">
    import Vis2dCard from "$lib/components/cube/vis2dCard.svelte";
    import Header from "$lib/components/header.svelte";
    import Paragraph from "$lib/components/paragraph.svelte";
    import Separator from "$lib/components/ui/separator/separator.svelte";
    import { breadcrumbs } from "$lib/state/shared.svelte";

    $effect(() => {
        breadcrumbs.paths = ["3x3x3 Advanced", "F2L"];
    });

    const cases = [
        {
            alg: "(R U2' R' U' R U' R') R' U' R",
            alternatives: ["(R U R' U R U2 R') R' U R"],
            name: "Sune 1",
        },
        {
            alg: "(R U2' R' U' R U' R') L U' L'",
            alternatives: ["(R U R' U R U2 R') L U L'"],
            name: "Sune 2",
        },
        {
            alg: "(R U R' U R U2 R') R' U' R",
            name: "Sune 3",
        },
        {
            alg: "(R U R' U R U2 R') U' L' U L",
            name: "Sune 4",
        },
        {
            alg: "(R U2' R' U' R U' R') L U2 L'",
            name: "Sune 5",
        },
    ];
    const sections = [
        {
            header: "A、Sune",
            description: "",
            IDs: ["Sune 1", "Sune 2", "Sune 3", "Sune 4", "Sune 5"],
        },
    ];

    let caseDict = $derived(Object.fromEntries(cases.map((c) => [c.name, c])));
</script>

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
