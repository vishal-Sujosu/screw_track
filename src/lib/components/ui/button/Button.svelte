<script>
  export let loading = false;
  export let disabled = false;
  export let className = '';
  export let handleOnClick =() => {};
</script>

<button
  class={`btn  sm:btn-sm md:btn-md lg:btn-md border-0 w-full   ${loading ? 'loading' : ''}  ${className}`}
  disabled={disabled || loading}
  on:click={handleOnClick}
>
  <slot />
</button>

