<script lang="ts">
    import type { ComponentProps } from "svelte";
    import * as Dialog from "$lib/components/ui/dialog/index.js";
    import CubeImage from "./cubeImage.svelte";
    import PlayerCard from "./playerCard.svelte";
    import { PLAYER_MASKS } from "./presets";

    // 2D 圖的參數（view、arrow、rotation、fc…）直接轉給 CubeImage，預設值只在那裡定義一次
    type ImageProps = Omit<ComponentProps<typeof CubeImage>, "alg" | "stage" | "size" | "pzl">;

    let {
        alg,
        name,
        algDisplay,
        alternatives = [],
        stage,
        /** 方塊種類（cubing.js 的 puzzle id），例如 "2x2x2"、"4x4x4" */
        puzzle = "3x3x3",
        ...image
    }: {
        alg: string;
        name: string;
        algDisplay?: string;
        alternatives?: string[];
        stage?: string;
        puzzle?: string;
    } & ImageProps = $props();

    // 以下三個 regex 假設公式只有單層、不重複的括號分組（目前資料都是如此）

    /** 拿掉分組用的括號，給 2D 圖使用 */
    function stripGrouping(alg: string) {
        return alg.replace(/[()]/g, "").replace(/\s+/g, " ").trim();
    }

    /** 步數不含整顆轉向（x、y、z） */
    function countMoves(alg: string) {
        return stripGrouping(alg)
            .split(" ")
            .filter((move) => move && !/^[xyz]/.test(move)).length;
    }

    /** 斷行單位：括號分組不拆開，其餘以單步為單位 */
    function toChunks(alg: string) {
        return alg.match(/\([^)]*\)|\S+/g) ?? [];
    }

    const displayAlg = $derived(algDisplay ?? alg);
    // 遮罩是依三階的方塊排列寫的，其他階數一律全彩
    const playerMask = $derived(stage && puzzle === "3x3x3" ? PLAYER_MASKS[stage] : undefined);
    // VisualCube 的 pzl 參數只要邊長
    const cubeSize = $derived(parseInt(puzzle) || 3);
</script>

{#snippet algText(text: string, size = "text-[19px]")}
    {@const chunks = toChunks(text)}
    <span class="font-semibold leading-snug {size}"
        >{#each chunks as chunk, i}<span class="whitespace-nowrap">{chunk}</span
            >{i < chunks.length - 1 ? " " : ""}{/each}</span
    >
{/snippet}

{#snippet playerDialog(title: string, playAlg: string)}
    <Dialog.Content class="w-[calc(100vw-1.5rem)] max-w-sm gap-2 px-5 pb-5 pt-4">
        <Dialog.Header class="border-b-2 border-ink pb-2 pr-10 text-left">
            <Dialog.Title class="text-2xl font-bold">{title}</Dialog.Title>
        </Dialog.Header>
        <PlayerCard alg={playAlg} {puzzle} mask={playerMask} />
    </Dialog.Content>
{/snippet}

<!-- 表格裡的一格：整格都是按鈕，點開看動畫 -->
<div class="flex flex-col">
    <Dialog.Root>
        <Dialog.Trigger
            class="flex w-full flex-1 items-start gap-4 p-4 text-left transition-colors hover:bg-neutral-100 active:bg-neutral-200"
        >
            <CubeImage alg={stripGrouping(alg)} {stage} pzl={cubeSize} size={88} {...image} />
            <div class="min-w-0 flex-1">
                <p class="text-[15px] font-bold">{name}</p>
                <p class="mt-1 text-balance">{@render algText(displayAlg)}</p>
                <p class="mt-2 text-[13px] tabular-nums text-neutral-600">{countMoves(displayAlg)} 步</p>
            </div>
        </Dialog.Trigger>
        {@render playerDialog(name, displayAlg)}
    </Dialog.Root>

    {#each alternatives as alternative}
        <Dialog.Root>
            <Dialog.Trigger
                class="flex min-h-11 w-full items-baseline gap-3 border-t border-neutral-300 px-4 py-2.5 text-left transition-colors hover:bg-neutral-100"
            >
                <span class="shrink-0 text-[13px] text-neutral-600">或</span>
                <span class="min-w-0 flex-1 text-balance">{@render algText(alternative, "text-[17px]")}</span>
                <span class="shrink-0 text-[13px] tabular-nums text-neutral-600">{countMoves(alternative)} 步</span>
            </Dialog.Trigger>
            {@render playerDialog(`${name}（替代公式）`, alternative)}
        </Dialog.Root>
    {/each}
</div>
