<script lang="ts">
    import { page } from "$app/state";
    import { anchorHref } from "$lib/anchor";
    import { navGroups } from "$lib/nav";

    let { onnavigate }: { onnavigate?: () => void } = $props();

    const isActive = (url: string) => page.url.pathname === url;

    const row =
        "flex min-h-11 items-center justify-between gap-3 rounded-lg px-2 text-[15px] transition-colors";
    const activeRow = "bg-ink font-semibold text-paper";
    const idleRow = "hover:bg-neutral-100";
</script>

<nav aria-label="目錄" class="text-ink">
    <div class="divide-y divide-neutral-300 border-y border-ink">
        <div>
            <a
                href="/"
                onclick={onnavigate}
                class="{row} {isActive('/') ? activeRow : idleRow}"
                aria-current={isActive("/") ? "page" : undefined}>首頁</a
            >
        </div>
        <div>
            <a href={anchorHref("記號說明", "/")} onclick={onnavigate} class="{row} {idleRow}">記號說明</a>
        </div>
    </div>

    {#each navGroups.filter((g) => g.items.some((item) => item.url)) as group (group.title)}
        <p class="mt-7 px-2 pb-1.5 text-[13px] font-semibold text-neutral-600">{group.title}</p>
        <ul class="border-t border-ink">
            {#each group.items.filter((item) => item.url) as item (item.url)}
                {@const active = isActive(item.url!)}
                <li class="border-b border-neutral-300 last:border-ink">
                    <a
                        href={item.url}
                        onclick={onnavigate}
                        class="{row} {active ? activeRow : idleRow}"
                        aria-current={active ? "page" : undefined}
                    >
                        <span>{item.title}</span>
                        {#if item.extent !== undefined}
                            <span
                                class="text-[13px] tabular-nums {active ? 'text-paper' : 'text-neutral-600'}"
                                >{item.extent}</span
                            >
                        {/if}
                    </a>
                </li>
            {/each}
        </ul>
    {/each}
</nav>
