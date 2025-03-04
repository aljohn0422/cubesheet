<script lang="ts">
    import "../app.css";
    import * as Sidebar from "$lib/components/ui/sidebar/index.js";
    import AppSidebar from "$lib/components/app-sidebar.svelte";
    import * as Breadcrumb from "$lib/components/ui/breadcrumb/index";
    import { Separator } from "$lib/components/ui/separator/index.js";
    import { breadcrumbs } from "../lib/state/shared.svelte";

    let { children } = $props();
    export const prerender = true;
</script>

<Sidebar.Provider>
    <AppSidebar />
    <main>
        <Sidebar.Inset>
            <header
                class="flex h-16 shrink-0 items-center gap-2 border-b mb-3 sticky top-0 bg-white z-10"
            >
                <div class="flex items-center gap-2 px-3">
                    <Sidebar.Trigger />
                    <Separator orientation="vertical" class="mr-2 h-4" />
                    <Breadcrumb.Root>
                        <Breadcrumb.List>
                            {#each breadcrumbs.paths as path, i}
                                <Breadcrumb.Item class="hidden md:block">
                                    {path}
                                </Breadcrumb.Item>
                                {#if i != breadcrumbs.paths.length - 1}
                                    <Breadcrumb.Separator
                                        class="hidden md:block"
                                    />
                                {/if}
                            {/each}
                        </Breadcrumb.List>
                    </Breadcrumb.Root>
                </div>
            </header>
            <div class="px-6 xl:px-24 2xl:px-36 py-4 text-slate-700">
                {@render children?.()}
            </div>
        </Sidebar.Inset>
    </main>
</Sidebar.Provider>
