<script lang="ts">
    import { page } from "$app/state";

    const notFound = $derived(page.status === 404);
</script>

<div class="max-w-xl py-6">
    <h1 class="text-4xl font-extrabold tracking-[-0.02em]">
        {notFound ? "找不到這一頁" : "發生錯誤"}
    </h1>
    <p class="mt-4">
        {notFound
            ? "網址可能打錯了，或這一頁已經搬家。可以從目錄重新找。"
            : `頁面載入時出了問題（${page.status}），重新整理通常就會好。`}
    </p>
    <a
        href="/"
        class="mt-8 inline-flex h-11 items-center bg-ink px-5 text-[15px] font-semibold text-paper hover:bg-neutral-800"
        >回首頁</a
    >
</div>
