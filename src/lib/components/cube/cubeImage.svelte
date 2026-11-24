<script lang="ts">

    let {
        alg,
        size = 100,
        pzl = 3,
        view = "plan",
        stage = undefined as string | undefined,
        arrow = undefined as string | undefined,
        rotation = "",
        fc = undefined as string | undefined,
        cc = "black",
    }: {
        alg: string;
        size?: number;
        pzl?: number;
        view?: string;
        stage?: string;
        arrow?: string;
        rotation?: string;
        fc?: string;
        cc?: string;
    } = $props();

    let container: HTMLDivElement;
    let status = $state<"loading" | "ready" | "error">("loading");

    function buildQuery() {
        const params: Record<string, string | undefined> = {
            size: String(size),
            pzl: String(pzl),
            view: view || undefined,
            case: alg,
            stage,
            r: rotation || undefined,
            arw: arrow
                ? arrow
                      .split(",")
                      .map((arw) => `${arw}-s8-black`)
                      .join(",")
                : undefined,
            fc,
            cc,
        };
        return Object.entries(params)
            .filter(([, value]) => value !== undefined)
            .map(([key, value]) => `${key}=${encodeURIComponent(value!)}`)
            .join("&");
    }

    $effect(() => {
        const query = buildQuery();
        let cancelled = false;
        status = "loading";

        Promise.all([
            import("sr-visualizer"),
            import("sr-visualizer/dist/lib/cube/parsing/options"),
        ])
            .then(([{ cubeSVG, Masking }, { parseOptions }]) => {
                if (cancelled) return;
                const options = parseOptions(query);
                if (
                    options.mask &&
                    !(Object.values(Masking) as string[]).includes(options.mask)
                ) {
                    console.warn(`Unsupported stage "${options.mask}", ignored`);
                    delete options.mask;
                }
                container.replaceChildren();
                cubeSVG(container, options);
                status = "ready";
            })
            .catch((err) => {
                if (cancelled) return;
                console.error(`Failed to render cube for "${alg}"`, err);
                status = "error";
            });

        return () => {
            cancelled = true;
        };
    });
</script>

<div
    class="relative shrink-0"
    style="width: {size}px; height: {size}px;"
    aria-hidden="true"
>
    {#if status === "loading"}
        <div class="absolute inset-0 rounded-md border border-dashed border-neutral-400"></div>
    {:else if status === "error"}
        <div class="absolute inset-0 flex items-center justify-center rounded-md border border-errata px-1 text-center text-[13px] leading-tight text-errata">
            圖片無法顯示
        </div>
    {/if}
    <div bind:this={container} class:invisible={status !== "ready"}></div>
</div>
