<script lang="ts">
   let toastClass;
   export { toastClass as class };
  export let icon;
  export let id;
  export let msg="";
  export let timeout=0;
  import { toasts } from "../../store/toast/store";
</script>

<div   class="toast-base alert {toastClass}">
  <div>
    {#if icon}
    <icon />
    {/if}
    <span>{msg}</span>
    {#if timeout === 0}
      <button
        on:click={() => {
          // console.log("onClickDismiss");
          toasts.delete(id);
        }}
        class="btn btn-ghost hover:none"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></button
      >
    {/if}
  </div>
</div>

<style>
  .toast-base {
    z-index: 50;
    width: auto;
    max-width: 350px;
    min-width: 250px;
    margin: 0.5rem;
  }
</style>