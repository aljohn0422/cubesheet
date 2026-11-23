<script lang="ts">
    import Section from "$lib/components/section.svelte";
    import Watch from "$lib/components/cross1/watch.svelte";
    import { crossExamples } from "$lib/data/cross-plus-one";

    let current = $state(crossExamples[0]);

    // 分兩列：十字做完再接 F2L / 十字和第一組一起完成（xcross）
    const groups = [
        { label: "十字", examples: crossExamples.filter((e) => e.cross.label === "十字") },
        { label: "xcross", examples: crossExamples.filter((e) => e.cross.label === "xcross") },
    ];

</script>

<Section title="高手示範" count={crossExamples.length}>
    <!-- 例子：分成「十字做完再接 F2L」和「xcross」兩列；按鈕寫選手、時間、各步驟步數 -->
    <div class="grid gap-x-4 gap-y-3 sm:grid-cols-[3.5rem_minmax(0,1fr)]">
        {#each groups as group (group.label)}
            <p class="pt-2 text-[13px] font-semibold text-neutral-600">{group.label}</p>
            <!-- 桌面換行；手機單列橫向捲動，左右出血到螢幕邊緣，動畫才不會被推到第二屏以後 -->
            <div
                class="flex gap-2 sm:flex-wrap max-sm:-mx-5 max-sm:snap-x max-sm:overflow-x-auto max-sm:px-5 max-sm:pb-2 max-sm:[&>*]:shrink-0 max-sm:[&>*]:snap-start"
                role="group"
                aria-label={group.label}
            >
                {#each group.examples as example (example.id)}
                    {@const selected = example.id === current.id}
                    <button
                        type="button"
                        aria-pressed={selected}
                        class="flex min-h-11 flex-col items-start rounded-lg border border-ink px-3 py-1 text-left transition-colors {selected
                            ? 'bg-ink text-paper'
                            : 'hover:bg-neutral-100'}"
                        onclick={() => (current = example)}
                    >
                        <span class="text-[15px] font-semibold leading-snug">{example.solver}</span>
                        <span class="text-[13px] tabular-nums {selected ? 'text-paper' : 'text-neutral-600'}">
                            {example.time} 秒 · {[example.cross, ...example.f2l].map((s) => s.stm).join(" + ")} 步
                        </span>
                    </button>
                {/each}
            </div>
        {/each}
    </div>

    <!-- 打亂：拿真的方塊跟著轉 -->
    <div class="mt-6 border-y border-ink py-4">
        <p class="text-[13px] font-semibold text-neutral-600">打亂（白色朝上、綠色朝前）</p>
        <p class="mt-1 text-[19px] font-semibold leading-snug [word-spacing:0.15em]">{current.scramble}</p>
    </div>

    <div class="mt-8">
        <Watch example={current} />
    </div>

    <p class="mt-10 text-[13px] text-neutral-600">
        {current.solver}，{current.comp}（{current.date}），{current.time} 秒。Reconstruction：{current.reconstructor}，
        <a href={current.url} class="underline" target="_blank" rel="noopener">reco.nz #{current.id}</a>
    </p>
</Section>
