<script lang="ts">
    import "../app.css";
    import { page } from "$app/state";
    import SiteIndex from "$lib/components/site-index.svelte";
    import * as Sheet from "$lib/components/ui/sheet/index.js";
    import { findNav, SITE_TITLE } from "$lib/nav";

    let { children } = $props();

    const current = $derived(findNav(page.url.pathname));
    const documentTitle = $derived(
        current
            ? `${current.item.title} · ${current.group.title} · ${SITE_TITLE}`
            : SITE_TITLE,
    );

    let indexOpen = $state(false);
</script>

<svelte:head>
    <title>{documentTitle}</title>
</svelte:head>

<header class="sticky top-0 z-20 h-14 border-b border-ink bg-paper print:hidden">
    <div class="mx-auto flex h-full max-w-[90rem] items-center justify-between gap-4 px-5">
        <a href="/" class="truncate text-[15px] font-bold">{SITE_TITLE}</a>

        {#if current}
            <p class="hidden shrink-0 text-[15px] text-neutral-600 lg:block">
                {current.group.title} ／ <span class="font-semibold text-ink">{current.item.title}</span>
            </p>
        {/if}

        <Sheet.Root bind:open={indexOpen}>
            <Sheet.Trigger
                class="inline-flex h-11 shrink-0 items-center rounded-lg border border-ink px-4 text-[15px] font-semibold hover:bg-neutral-100 lg:hidden"
            >
                目錄
            </Sheet.Trigger>
            <Sheet.Content side="left" class="w-[min(20rem,85vw)] overflow-y-auto border-ink p-5 pt-16">
                <Sheet.Title class="sr-only">目錄</Sheet.Title>
                <SiteIndex onnavigate={() => (indexOpen = false)} />
            </Sheet.Content>
        </Sheet.Root>
    </div>
</header>

<div class="mx-auto max-w-[90rem] px-5 lg:grid lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-14">
    <aside class="hidden lg:block print:hidden">
        <div class="sticky top-14 max-h-[calc(100dvh-3.5rem)] overflow-y-auto py-10">
            <SiteIndex />
        </div>
    </aside>

    <main class="min-w-0 pb-24 pt-10">
        {#if current && !page.error}
            <div class="mb-12">
                <h1
                    class="text-[clamp(3.5rem,11vw,6rem)] font-extrabold leading-none tracking-[-0.03em]"
                >
                    {current.item.title}
                </h1>
                <p class="mt-4 text-lg">
                    {current.item.summary}
                    {#if current.item.extent !== undefined}
                        <span class="whitespace-nowrap text-neutral-600">收錄 {current.item.extent} 個</span>
                    {/if}
                </p>
            </div>
        {/if}
        {@render children?.()}
    </main>
</div>
