<script lang="ts">
  export let type ;
  export let icon;
  export let id;
  export let msg="";
  export let timeout=0;
  import { toasts } from "../../../store/toast/store";
  import { CircleX } from 'lucide-svelte';
  console.log(icon);
</script>

<div   class="toast-base alert {type === "info" ? "alert-info" : ""} {type === "success" ? "alert-success" : ""} {type === "warning" ? "alert-warning" : ""} {type === "error" ? "alert-error" : ""} shadow-lg">
  <div class="flex flex-row items-center  w-full">
    {#if icon}
      <svelte:component this={icon} class="h-6 w-6 flex-shrink-0" />
    {/if}
    <span class="ml-1">{msg}</span>
    {#if timeout === 0}
      <button
        on:click={() => {
          // console.log("onClickDismiss");
          toasts.delete(id);
        }}
        class=""
        >
        <CircleX on:click={()=>{
          toasts.delete(id);
        }} class="h-5 w-5 cursor-pointer " />
         </button
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
    margin: 0.1rem;
    display: flex ;
    align-items: center;
    justify-items: center;
    justify-content: space-between;
    flex-direction:column ;
  }
</style>