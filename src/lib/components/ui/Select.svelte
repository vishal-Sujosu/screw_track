<!-- src/lib/components/ui/Select.svelte -->
<script>
  export let label = '';
  export let options = []; // [{ value: 'us', label: 'United States' }]
  export let value = '';
  export let placeholder = 'Select an option';
  export let disabled = false;
  export let required = false;
  export let className = '';
  export let error = '';
</script>

<div class="form-control w-full">
  {#if label}
    <label class="label">
      <span class="label-text">{label}</span>
    </label>
  {/if}

  <select
    bind:value
    class="select select-md text-black focus:ring-0 focus:border-none  select-primary select-bordered w-ful sm:select-sm lg:select-md   w-full max-w-xs{className}"
    class:select-error={!!error}
    disabled={disabled}
    required={required}
  >
    <option value="" disabled selected hidden>{placeholder}</option>

    {#each options as option}
      <option value={option.value}>{option.label}</option>
    {/each}
  </select>

  {#if error}
    <label class="label">
      <span class="label-text-alt text-error">{error}</span>
    </label>
  {/if}
</div>
