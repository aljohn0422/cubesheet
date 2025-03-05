<script>
    let { children } = $props();
</script>

<div class="text-slate-700 font-semibold text-xl mt-4 mb-3">
    <span class="text-indigo-500">#</span>
    {@render children?.()}
</div>
