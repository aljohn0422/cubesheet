<script lang="ts" generics="T extends string">
    let {
        options,
        value,
        onselect,
        label,
    }: {
        options: { value: T; label: string }[];
        value: T;
        onselect: (value: T) => void;
        label: string;
    } = $props();
</script>

<div role="group" aria-label={label} class="inline-flex divide-x divide-ink overflow-hidden rounded-lg border border-ink">
    {#each options as option (option.value)}
        {@const selected = option.value === value}
        <button
            type="button"
            aria-pressed={selected}
            class="h-11 px-4 text-[15px] font-semibold transition-colors {selected
                ? 'bg-ink text-paper'
                : 'hover:bg-neutral-100'}"
            onclick={() => onselect(option.value)}
        >
            {option.label}
        </button>
    {/each}
</div>
