<script>
  export let label = '';
  export let value = '';
  export let placeholder = 'Type';
  export let disabled = false;
  export let required = false;
  export let className = '';
  export let error = '';
</script>

<div class="form-control w-full max-w-xs ">

  <input bind:value type="text" disabled={disabled} required={required} placeholder={placeholder} class={`input focus:ring-0 focus:border-none  text-black input-bordered w-full input-sm md:input-sm lg:input-md  max-w-xs ${className ? className : ''}`} />


    {#if error}
    <label class="label">
      <span class="label-text-alt text-error">{error}</span>
    </label>
  {/if}
</div>