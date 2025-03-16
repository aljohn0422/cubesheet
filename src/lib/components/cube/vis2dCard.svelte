<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import * as Dialog from "$lib/components/ui/dialog/index.js";
    import Skeleton from "../ui/skeleton/skeleton.svelte";

    import PlayerCard from "./playerCard.svelte";
    let {
        alg,
        bg = "t",
        view = "plan",
        stage = undefined as string | undefined,
        name = undefined as string | undefined,
        arrow = undefined as string | undefined,
        rotation = "",
        fc = undefined as string | undefined,
        cc = "black",
    } = $props();
    let url = $state("");
    let isLoading = $state(true);

    function buildCubeUrl() {
        const baseUrl = "https://cube.rider.biz/visualcube.php";
        const params = {
            size: 144,
            fmt: "png",
            view: view,
            bg: bg,
            case: alg,
            stage: stage,
            r: rotation,
            arw: arrow
                ? arrow
                      .split(",")
                      .map((arw) => `${arw}-s8-black`)
                      .join(",")
                : undefined,
            fc: fc ? fc : undefined,
            cc: cc,
        };

        const searchParams = new URLSearchParams();

        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined) {
                searchParams.append(key, String(value));
            }
        });

        return `${baseUrl}?${searchParams.toString()}`;
    }

    $effect(() => {
        url = buildCubeUrl();
    });

    function handleImageLoad() {
        isLoading = false;
    }

    function getActualAlg(alg: string) {
        alg = alg.replace("(", "");
        alg = alg.replace(")", "");
        return alg;
    }

    const actualAlg = $derived(getActualAlg(alg));
    const stickerMapping: Record<string, string> = {
        f2l: "F2L",
    };
</script>

<Card.Root>
    <Card.Content class="p-3">
        <div class="flex gap-1 w-full">
            <div class="flex flex-col items-center">
                <div class="w-24">
                    {#if isLoading}
                        <Skeleton class="h-[96px] w-[96px] rounded-xl" />
                    {/if}
                    <img
                        src={url}
                        alt=""
                        height="100px"
                        width="100px"
                        onload={handleImageLoad}
                        style="display: {isLoading ? 'none' : 'block'};"
                    />
                </div>
                {#if name}
                    <div class="text-xs text-slate-500 cursor-default">
                        {name}
                    </div>
                {/if}
            </div>
            <div class="flex align-middle">
                <Dialog.Root>
                    <Dialog.Trigger>
                        <p class="text-left">
                            {alg}<span class="ml-1 text-xs text-slate-500"
                                >({actualAlg.split(" ").length})</span
                            >
                        </p>
                    </Dialog.Trigger>
                    <Dialog.Content class="w-80 flex justify-center rounded-lg">
                        <PlayerCard alg={actualAlg} />
                    </Dialog.Content>
                </Dialog.Root>
            </div>
        </div>
    </Card.Content>
</Card.Root>
