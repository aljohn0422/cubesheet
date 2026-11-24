<script lang="ts">
    import Paragraph from "$lib/components/paragraph.svelte";
    import Section from "$lib/components/section.svelte";
    import { navGroups, SITE_TITLE_LINES } from "$lib/nav";
    import { ArrowRight } from "lucide-svelte";

    const notation = [
        { symbol: "R L U D F B", meaning: "右、左、上、下、前、後面，順時針轉 90°（正對那一面看）" },
        { symbol: "R'", meaning: "加上 ' 代表逆時針" },
        { symbol: "U2", meaning: "轉 180°，順逆時針結果一樣" },
        { symbol: "r f l", meaning: "小寫：連同中間層一起轉兩層" },
        { symbol: "M", meaning: "左右之間的中間層，方向跟 L 一樣" },
        { symbol: "x y z", meaning: "整顆方塊轉向，方向分別跟 R、U、F 一樣；不算步數" },
        { symbol: "(R U R' U')", meaning: "括號只是分組方便記，照順序轉就好" },
    ];
</script>

<svelte:head>
    <meta
        name="description"
        content="給老婆小孩的魔術方塊公式筆記：每個公式都有圖解和可以一步一步播放的 3D 動畫。"
    />
</svelte:head>

<div class="mb-14">
    <h1 class="text-[clamp(2.25rem,6vw,4.25rem)] font-black leading-[1.15] tracking-[-0.02em]">
        {#each SITE_TITLE_LINES as line}<span class="inline-block">{line}</span>{/each}
    </h1>
    <p class="mt-5 max-w-[38em] text-lg">
        依分組照順序學魔術方塊公式。本筆記一律以黃色為頂面、白色在底。點任何一張公式卡片就會打開 3D 動畫，可以一步一步前進後退、調整速度。
    </p>
</div>

{#each navGroups as group (group.title)}
    <Section title={group.title} flush>
        <ol class="max-w-[46rem]">
            {#each group.items as item, i (item.title)}
                <li class="border-b border-neutral-300 last:border-ink">
                    <svelte:element
                        this={item.url ? "a" : "div"}
                        href={item.url}
                        class="grid grid-cols-[2rem_minmax(0,1fr)_auto] items-center gap-4 rounded-lg px-2 py-3 {item.url
                            ? 'transition-colors hover:bg-neutral-100'
                            : 'text-neutral-600'}"
                    >
                        <span class="text-[15px] font-bold tabular-nums">{group.ordered ? i + 1 : ""}</span>
                        <span class="min-w-0">
                            <span class="block text-lg font-bold leading-snug">{item.title}</span>
                            <span class="block text-[15px] leading-snug text-neutral-600">{item.summary}</span>
                        </span>
                        {#if item.url}
                            <span class="flex items-center gap-2 text-[15px] tabular-nums text-neutral-600">
                                {item.extent}
                                <ArrowRight class="size-4 text-ink" aria-hidden="true" />
                            </span>
                        {:else}
                            <span class="text-[13px]">未收錄</span>
                        {/if}
                    </svelte:element>
                </li>
            {/each}
        </ol>
    </Section>
{/each}

<Section title="記號說明">
    <Paragraph>公式用的是國際通用的轉法記號，看懂下面幾條就能讀所有公式。</Paragraph>
    <dl class="mt-5 grid max-w-[46rem] grid-cols-[auto_minmax(0,1fr)] border-t border-ink">
        {#each notation as row}
            <dt class="border-b border-neutral-300 py-3 pr-6 text-[19px] font-semibold [word-spacing:0.2em] max-sm:text-[17px]">
                {row.symbol}
            </dt>
            <dd class="border-b border-neutral-300 py-3 [text-wrap:pretty]">{row.meaning}</dd>
        {/each}
    </dl>
</Section>
