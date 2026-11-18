<script lang="ts">
	import { Dialog as DialogPrimitive, type WithoutChildrenOrChild } from "bits-ui";
	import X from "lucide-svelte/icons/x";
	import type { Snippet } from "svelte";
	import * as Dialog from "./index.js";
	import { cn } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		portalProps,
		children,
		onOpenAutoFocus,
		...restProps
	}: WithoutChildrenOrChild<DialogPrimitive.ContentProps> & {
		portalProps?: DialogPrimitive.PortalProps;
		children: Snippet;
	} = $props();

	// 內容裡標了 data-autofocus 的元素（例如播放鍵）優先取得焦點，而不是第一顆按鈕。
	// 開啟當下內容可能還沒掛上，所以等下一格畫面再找；找不到就退回第一個可聚焦元素。
	function handleOpenAutoFocus(event: Event) {
		onOpenAutoFocus?.(event);
		if (event.defaultPrevented) return;
		event.preventDefault();
		requestAnimationFrame(() => {
			const target =
				ref?.querySelector<HTMLElement>("[data-autofocus]") ??
				ref?.querySelector<HTMLElement>("button, [href], input, [tabindex]:not([tabindex='-1'])");
			target?.focus();
		});
	}
</script>

<Dialog.Portal {...portalProps}>
	<Dialog.Overlay />
	<DialogPrimitive.Content
		bind:ref
		class={cn(
			"fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 rounded-xl border border-ink bg-paper p-6 shadow-[0_18px_40px_-8px_rgb(17_17_17/0.35)]",
			className
		)}
		onOpenAutoFocus={handleOpenAutoFocus}
		{...restProps}
	>
		{@render children?.()}
		<DialogPrimitive.Close
			class="absolute right-2 top-2 inline-flex size-11 items-center justify-center rounded-lg border border-transparent hover:border-ink disabled:pointer-events-none"
		>
			<X class="size-5" />
			<span class="sr-only">關閉</span>
		</DialogPrimitive.Close>
	</DialogPrimitive.Content>
</Dialog.Portal>
