<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import { Play, Pause, Square, ReplaceAll } from "lucide-svelte";
    import { TwistyPlayer } from "cubing/twisty";

    $effect(() => {
        if (!customElements.get("twisty-player")) {
            customElements.define("twisty-player", TwistyPlayer);
        }
    });

    let twistyPlayer: TwistyPlayer;
    let isPlaying = $state(false);
    let {
        alg,
        puzzle = "3x3x3",
        setup = "x2",
        sticker = "full",
        speed = 1.5,
    } = $props();

    function togglePlay(event: MouseEvent) {
        twistyPlayer.togglePlay();
        isPlaying = !isPlaying;
    }

    function stop() {
        isPlaying = false;
        twistyPlayer.jumpToStart();
    }

    function copy() {
        navigator.clipboard.writeText(alg);
    }
</script>

<Card.Root class="w-[288px] border-none shadow-none">
    <Card.Content class="p-2">
        <div class="flex w-full justify-center">
            <twisty-player
                bind:this={twistyPlayer as any}
                alg={alg.replaceAll("'2", "2")}
                experimental-setup-anchor="end"
                experimental-setup-alg={setup}
                experimental-stickering={sticker}
                {puzzle}
                tempo-scale={speed}
                background="none"
                viewer-link="none"
                control-panel="none"
                style="width: 224px; height: 224px; margin: auto;"
            >
            </twisty-player>
        </div>

        <div class="flex justify-center w-full">
            <Button variant="ghost" size="icon" onclick={togglePlay}>
                {#if isPlaying}
                    <Pause fill="#475569" size={20} color="#475569" />
                {:else}
                    <Play fill="#475569" size={20} color="#475569" />
                {/if}
            </Button>
            <Button variant="ghost" size="icon" onclick={stop}>
                <Square fill="#475569" size={20} color="#475569" />
            </Button>
        </div>
        <div
            class="flex w-full justify-center text-lg tracking-wider text-slate-700 cursor-pointer"
        >
            {alg}
        </div>
    </Card.Content>
</Card.Root>
