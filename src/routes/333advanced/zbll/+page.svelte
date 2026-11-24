<script lang="ts">
    import { Alg } from "cubing/alg";
    import { goto } from "$app/navigation";
    import { page } from "$app/state";
    import CaseSections from "$lib/components/case-sections.svelte";
    import CaseTile from "$lib/components/case-tile.svelte";
    import { zbllCount, zbllSubsets } from "$lib/data/zbll";
    import { isCase } from "$lib/data/util";
    import type { AlgSection } from "$lib/data/types";
    import { findNav } from "$lib/nav";

    if (import.meta.env.DEV && findNav("/333advanced/zbll")?.item.extent !== zbllCount) {
        console.warn(`nav.ts 的 ZBLL 數量和 zbll.json（${zbllCount} 個）不一致`);
    }

    const subset = $derived(
        zbllSubsets.find((s) => s.name === page.url.searchParams.get("set")) ?? zbllSubsets[0],
    );
    const group = $derived(
        subset.sections.find((s) => s.header === page.url.searchParams.get("group")),
    );
    const shown = $derived(group ? [group] : subset.sections);

    function select(set: string, groupName?: string) {
        const url = new URL(page.url);
        url.searchParams.set("set", set);
        if (groupName) url.searchParams.set("group", groupName);
        else url.searchParams.delete("group");
        url.hash = "";
        goto(url, { replaceState: true, noScroll: true, keepFocus: true });
    }

    const tileRow =
        "flex gap-2 sm:flex-wrap max-sm:-mx-5 max-sm:snap-x max-sm:overflow-x-auto max-sm:px-5 max-sm:pb-2 max-sm:[&>*]:snap-start";

    function iconAlg(section: AlgSection) {
        const first = section.algorithms.find(isCase);
        return first?.setup ? new Alg(first.setup).invert().toString() : undefined;
    }
</script>

<div class="mb-16 grid gap-x-4 gap-y-3 sm:grid-cols-[3rem_minmax(0,1fr)]">
    <p class="pt-1 text-[13px] font-semibold text-neutral-600">形狀</p>
    <div class="{tileRow}" role="group" aria-label="形狀">
        {#each zbllSubsets as s (s.name)}
            <CaseTile
                label={s.name}
                selected={s.name === subset.name}
                alg={iconAlg(s.sections[0])}
                stage="oll"
                onclick={() => select(s.name)}
            />
        {/each}
    </div>

    <p class="pt-1 text-[13px] font-semibold text-neutral-600 max-sm:mt-2">小組</p>
    <div class="{tileRow}" role="group" aria-label="小組">
        <CaseTile label="全部" selected={!group} onclick={() => select(subset.name)} />
        {#each subset.sections as section (section.header)}
            <CaseTile
                label={section.header}
                selected={section === group}
                alg={iconAlg(section)}
                stage="ll"
                onclick={() => select(subset.name, section.header)}
            />
        {/each}
    </div>
</div>

{#key subset.name + (group?.header ?? "")}
    <CaseSections sections={shown} />
{/key}
