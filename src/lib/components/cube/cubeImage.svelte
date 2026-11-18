<script lang="ts">

    // 參數沿用 VisualCube 的 query param 語意，由 sr-visualizer 在瀏覽器端畫成 SVG，
    // 不再依賴外部圖片服務。
    let {
        alg,
        size = 100,
        /** 方塊邊長（3 = 三階） */
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
        // sr-visualizer 的 parser 用 decodeURIComponent，不能用 URLSearchParams（空白會變成 "+"）
        return Object.entries(params)
            .filter(([, value]) => value !== undefined)
            .map(([key, value]) => `${key}=${encodeURIComponent(value!)}`)
            .join("&");
    }

    $effect(() => {
        const query = buildQuery();
        let cancelled = false;
        status = "loading";

        // svg.js 在 import 時就會碰 window，只能在瀏覽器端動態載入
        Promise.all([
            import("sr-visualizer"),
            import("sr-visualizer/dist/lib/cube/parsing/options"),
        ])
            .then(([{ cubeSVG, Masking }, { parseOptions }]) => {
                if (cancelled) return;
                const options = parseOptions(query);
                // 舊的 VisualCube 會默默忽略不認得的 stage，sr-visualizer 則會直接丟錯
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
        <!-- 還沒畫好：虛線框，像還沒貼上的圖 -->
        <div class="absolute inset-0 border border-dashed border-neutral-400"></div>
    {:else if status === "error"}
        <!-- 紅色只用在錯誤 -->
        <div class="absolute inset-0 flex items-center justify-center border border-errata px-1 text-center text-[13px] leading-tight text-errata">
            圖片無法顯示
        </div>
    {/if}
    <div bind:this={container} class:invisible={status !== "ready"}></div>
</div>
