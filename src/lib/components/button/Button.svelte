<script>
  export let variant = 'primary';       // DaisyUI: primary, secondary, etc.
  export let size = 'md';               // DaisyUI: sm, md, lg
  export let loading = false;
  export let disabled = false;
  export let isOutlined = false;
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