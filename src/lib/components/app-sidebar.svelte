<script lang="ts" module>
    import { base } from "$app/paths";
    const data = {
        navMain: [
            {
                title: "3x3x3 CFOP",
                url: "",
                items: [
                    {
                        title: "OLL",
                        url: "/333cfop/oll",
                    },
                    {
                        title: "PLL",
                        url: "/333cfop/pll",
                    },
                ],
            },
        ],
    };
</script>

<script lang="ts">
    import * as Sidebar from "$lib/components/ui/sidebar/index";
    import { Box } from "lucide-svelte";
    import type { ComponentProps } from "svelte";
    let {
        ref = $bindable(null),
        ...restProps
    }: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root bind:ref {...restProps}>
    <Sidebar.Header>
        <Sidebar.Menu>
            <Sidebar.MenuItem>
                <Sidebar.MenuButton size="lg">
                    {#snippet child({ props })}
                        <a href="/" {...props}>
                            <div
                                class="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg"
                            >
                                <Box class="size-5" />
                            </div>
                            <div class="flex flex-col gap-0.5 leading-none">
                                <span class="font-semibold"
                                    >給老婆小孩的魔術方塊筆記</span
                                >
                            </div>
                        </a>
                    {/snippet}
                </Sidebar.MenuButton>
            </Sidebar.MenuItem>
        </Sidebar.Menu>
    </Sidebar.Header>
    <Sidebar.Content>
        <Sidebar.Group>
            <Sidebar.Menu>
                {#each data.navMain as groupItem (groupItem.title)}
                    <Sidebar.MenuItem>
                        <Sidebar.MenuButton class="font-medium">
                            {#snippet child({ props })}
                                <a href={groupItem.url} {...props}>
                                    {groupItem.title}
                                </a>
                            {/snippet}
                        </Sidebar.MenuButton>
                        {#if groupItem.items?.length}
                            <Sidebar.MenuSub>
                                {#each groupItem.items as item (item.title)}
                                    <Sidebar.MenuSubItem>
                                        <Sidebar.MenuSubButton>
                                            {#snippet child({ props })}
                                                <a href={item.url} {...props}
                                                    >{item.title}</a
                                                >
                                            {/snippet}
                                        </Sidebar.MenuSubButton>
                                    </Sidebar.MenuSubItem>
                                {/each}
                            </Sidebar.MenuSub>
                        {/if}
                    </Sidebar.MenuItem>
                {/each}
            </Sidebar.Menu>
        </Sidebar.Group>
    </Sidebar.Content>
    <Sidebar.Rail />
</Sidebar.Root>
