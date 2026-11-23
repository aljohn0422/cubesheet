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

    // nav 裡的數量是手寫的，資料改了要記得同步
    if (import.meta.env.DEV && findNav("/333advanced/zbll")?.item.extent !== zbllCount) {
        console.warn(`nav.ts 的 ZBLL 數量和 zbll.json（${zbllCount} 個）不一致`);
    }

    // 兩層篩選：形狀 → 小組，記在網址（?set=Pi&group=Pi 1），可以直接分享。
    // 一次只畫一種形狀（最多 72 個），472 個全畫太重。
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

    // 桌面換行；手機單列橫向捲動，左右出血到螢幕邊緣（抵銷 layout 的 20px 邊距）
    const tileRow =
        "flex gap-2 sm:flex-wrap max-sm:-mx-5 max-sm:snap-x max-sm:overflow-x-auto max-sm:px-5 max-sm:pb-2 max-sm:[&>*]:snap-start";

    /** 段落第一個 case 的打亂狀態，轉成圖解要的「會被復原的公式」 */
    function iconAlg(section: AlgSection) {
        const first = section.algorithms.find(isCase);
        return first?.setup ? new Alg(first.setup).invert().toString() : undefined;
    }
</script>

<!-- 手機上每一列改成橫向捲動，兩列加起來不到半屏，第一個公式不會被推到第二屏 -->
<div class="mb-16 grid gap-x-4 gap-y-3 sm:grid-cols-[3rem_minmax(0,1fr)]">
    <!-- 形狀：只顯示黃色，看頂面角塊的形狀 -->
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

    <!-- 小組：全彩，看側面顏色 -->
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
