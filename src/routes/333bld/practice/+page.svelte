<script lang="ts">
    import { onMount } from "svelte";
    import { RotateCcw } from "lucide-svelte";
    import Paragraph from "$lib/components/paragraph.svelte";
    import Section from "$lib/components/section.svelte";
    import CubeNet from "$lib/components/blindfold/cube-net.svelte";
    import Segmented from "$lib/components/blindfold/segmented.svelte";
    import Sticker from "$lib/components/blindfold/sticker.svelte";
    import { doScramble } from "$lib/blindfold/cube";
    import { findCycle, findLetter, pieceLetterGroups } from "$lib/blindfold/cycles";
    import { randomRecognition, type RecogItem } from "$lib/blindfold/recognition";

    type Mode = "scramble" | "pair" | "recognition";
    type PieceType = "edge" | "corner";

    const EDGE_BUFFER = "UF";
    const CORNER_BUFFER = "UFR";

    const modes: { value: Mode; label: string }[] = [
        { value: "scramble", label: "打亂" },
        { value: "pair", label: "字母配對" },
        { value: "recognition", label: "貼紙辨認" },
    ];
    const pieceTypes: { value: PieceType; label: string }[] = [
        { value: "edge", label: "邊塊" },
        { value: "corner", label: "角塊" },
    ];

    let mode = $state<Mode>("scramble");

    // ── 打亂 ────────────────────────────────────────────
    let scramble = $state("");

    async function newScramble() {
        // cubing 的打亂產生器會開 web worker，只能在瀏覽器端載入
        const { randomScrambleForEvent } = await import("cubing/scramble");
        scramble = (await randomScrambleForEvent("333")).toString();
    }

    onMount(newScramble);

    // 第一個循環如果是從緩衝塊開始，就把頭尾兩個字母（緩衝塊本身）加上括號。
    // 回傳新物件，不改動 findCycle 自己的陣列。
    function findCycleMarked(faces: number[][][], buffer: string, stickers: 2 | 3) {
        const result = findCycle(faces, buffer, stickers);
        const first = result.cyclesCode[0];
        if (first && result.cycles[0][0] == buffer) {
            const marked = [...first];
            marked[0] = `(${marked[0]})`;
            marked[marked.length - 1] = `(${marked[marked.length - 1]})`;
            result.cyclesCode = [marked, ...result.cyclesCode.slice(1)];
        }
        return result;
    }

    const faces = $derived(doScramble(scramble));
    const traces = $derived([
        { title: "邊塊", buffer: EDGE_BUFFER, flip: "EO", ...findCycleMarked(faces, EDGE_BUFFER, 2) },
        { title: "角塊", buffer: CORNER_BUFFER, flip: "CO", ...findCycleMarked(faces, CORNER_BUFFER, 3) },
    ]);

    // ── 字母配對 ────────────────────────────────────────
    let pairType = $state<PieceType>("edge");
    let pair = $state("");

    // 抽兩個不同、也不在同一塊上的字母，並且避開緩衝塊的貼紙
    function newPair() {
        const buffer = pairType === "edge" ? EDGE_BUFFER : CORNER_BUFFER;
        const groups = pieceLetterGroups(pairType);
        const bufferGroup = groups.find((g) => g.includes(findLetter(buffer))) ?? [];
        const letters = groups.flat().filter((l) => !bufferGroup.includes(l));
        const samePiece = (a: string, b: string) => groups.some((g) => g.includes(a) && g.includes(b));
        let a = "";
        let b = "";
        do {
            a = letters[Math.floor(Math.random() * letters.length)];
            b = letters[Math.floor(Math.random() * letters.length)];
        } while (a === b || samePiece(a, b));
        pair = a + b;
    }

    function selectPairType(type: PieceType) {
        pairType = type;
        newPair();
    }

    // ── 貼紙辨認 ────────────────────────────────────────
    let recogType = $state<PieceType>("edge");
    let recogItem = $state<RecogItem | null>(null);
    let revealed = $state(false);

    function newRecog() {
        recogItem = randomRecognition(recogType);
        revealed = false;
    }

    // 第一下顯示答案，第二下換下一張
    function advanceRecog() {
        if (!revealed) revealed = true;
        else newRecog();
    }

    function selectRecogType(type: PieceType) {
        recogType = type;
        newRecog();
    }

    function selectMode(next: Mode) {
        mode = next;
        if (next === "pair" && !pair) newPair();
        if (next === "recognition" && !recogItem) newRecog();
    }

    function handleKeydown(e: KeyboardEvent) {
        if (e.key !== " " || e.repeat || e.metaKey || e.ctrlKey || e.altKey) return;
        const target = e.target as HTMLElement | null;
        if (target?.closest("input, textarea, [contenteditable], [role=dialog]")) return;
        // 擋掉聚焦中按鈕自己的空白鍵觸發，動作只執行一次
        e.preventDefault();
        if (mode === "scramble") newScramble();
        else if (mode === "pair") newPair();
        else advanceRecog();
    }
</script>

<svelte:window onkeydown={handleKeydown} />

<Section title="怎麼用">
    <Paragraph>
        盲解拿方塊的方向跟其他頁不同：<strong>白色朝上、綠色朝前</strong>（WCA 打亂的方向）。字母用 Speffz，邊塊從 UF、角塊從 UFR 當緩衝塊。
    </Paragraph>
    <Paragraph>
        「打亂」會產生一組打亂並算出記憶的字母；括號裡的是緩衝塊。「字母配對」練把兩個字母快速轉成你的記憶圖像；「貼紙辨認」練看到一張貼紙就叫出它的字母。電腦上按空白鍵就能換下一題。
    </Paragraph>
</Section>

<Section title="練習">
    <Segmented label="練習項目" options={modes} value={mode} onselect={selectMode} />

    {#if mode === "scramble"}
        <div class="mt-8 grid gap-10 md:grid-cols-2 md:items-start">
            <div>
                <div class="flex items-start justify-between gap-4">
                    <p class="min-h-[2.75rem] text-[19px] font-semibold leading-snug [word-spacing:0.15em]">
                        {#if scramble}
                            {scramble}
                        {:else}
                            <span class="text-[15px] font-normal text-neutral-600">產生打亂中…</span>
                        {/if}
                    </p>
                    <button
                        type="button"
                        class="inline-flex size-11 shrink-0 items-center justify-center rounded-lg border border-ink transition-colors hover:bg-neutral-100"
                        aria-label="換一組打亂"
                        onclick={newScramble}
                    >
                        <RotateCcw class="size-5" aria-hidden="true" />
                    </button>
                </div>
                <div class="mt-5">
                    <CubeNet {faces} />
                </div>
            </div>

            <div class="flex flex-col gap-8">
                {#each traces as trace (trace.title)}
                    <div>
                        <h3
                            class="flex items-baseline justify-between gap-4 border-b-2 border-ink pb-1.5 text-[1.125rem] font-bold"
                        >
                            {trace.title}
                            <span class="text-[13px] font-normal text-neutral-600">緩衝 {trace.buffer}</span>
                        </h3>
                        {#if trace.misOriented.length === 0 && trace.cyclesCode.length === 0}
                            <p class="border-b border-ink py-3 text-[15px] text-neutral-600">已經在正確位置</p>
                        {:else}
                            <dl class="grid grid-cols-[auto_minmax(0,1fr)]">
                                {#if trace.misOriented.length > 0}
                                    <dt class="border-b border-neutral-300 py-2.5 pr-6 text-[15px] font-semibold">
                                        {trace.flip}
                                    </dt>
                                    <dd class="border-b border-neutral-300 py-2 text-[19px] font-semibold [word-spacing:0.3em]">
                                        {trace.misOrientedCode.join(" ")}
                                    </dd>
                                {/if}
                                {#each trace.cyclesCode as code, i}
                                    <dt class="whitespace-nowrap border-b border-neutral-300 py-2.5 pr-6 text-[15px] font-semibold">
                                        循環 {i + 1}
                                    </dt>
                                    <dd class="border-b border-neutral-300 py-2 text-[19px] font-semibold [word-spacing:0.3em]">
                                        {code.join(" ")}
                                    </dd>
                                {/each}
                            </dl>
                            <div class="border-t border-ink"></div>
                        {/if}
                    </div>
                {/each}
            </div>
        </div>
    {:else if mode === "pair"}
        <div class="mt-8 max-w-[30rem]">
            <Segmented label="塊的種類" options={pieceTypes} value={pairType} onselect={selectPairType} />
            <button
                type="button"
                class="mt-5 block w-full rounded-xl border border-ink py-10 text-center text-[clamp(3.5rem,11vw,6rem)] font-extrabold leading-none tracking-[0.2em] transition-colors hover:bg-neutral-100 active:bg-neutral-200"
                aria-label="字母 {pair.split('').join(' ')}，換一組"
                onclick={newPair}
            >
                {pair}
            </button>
            <p class="mt-3 text-[13px] text-neutral-600">按空白鍵或點一下換一組</p>
        </div>
    {:else}
        <div class="mt-8 max-w-[30rem]">
            <Segmented label="塊的種類" options={pieceTypes} value={recogType} onselect={selectRecogType} />
            <button
                type="button"
                class="mt-5 flex w-full flex-col items-center gap-4 rounded-xl border border-ink py-8 transition-colors hover:bg-neutral-100 active:bg-neutral-200"
                aria-label={revealed ? "下一張貼紙" : "顯示答案"}
                onclick={advanceRecog}
            >
                {#if recogItem}
                    <Sticker item={recogItem} />
                {/if}
                {#if revealed && recogItem}
                    <span class="text-[clamp(3.5rem,11vw,6rem)] font-extrabold leading-none">{recogItem.letter}</span>
                    <span class="text-[15px] tabular-nums text-neutral-600">{recogItem.location}</span>
                {:else}
                    <span class="text-[clamp(3.5rem,11vw,6rem)] font-extrabold leading-none text-neutral-300">?</span>
                    <span class="text-[15px] text-transparent" aria-hidden="true">—</span>
                {/if}
            </button>
            <p class="mt-3 text-[13px] text-neutral-600">
                按空白鍵或點一下{revealed ? "換下一張" : "看答案"}
            </p>
        </div>
    {/if}
</Section>
