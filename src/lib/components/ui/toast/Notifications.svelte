<script>
  import { toasts } from "../../../store/toast/store";
  import Toast from "./Toast.svelte";
</script>

<div class="notifications">
  <!-- {@debug $toasts} -->
  {#each [...$toasts] as [key, value]}
    {@const y = key.substring(0, key.indexOf("-"))}
    {@const x = key.substring(key.indexOf("-") + 1)}
    <div class={`toast  toast-${x} toast-${y} z-50 `}>
      {#each value as toast}
        
        <Toast type={toast.type} icon={toast.icon} id={toast.id} msg={toast.msg} timeout={toast.timeout}  />
      {/each}
    </div>
  {/each}
</div>

<style>
  .toast:where(.toast-center) {
    right: 0 !important;
  }
</style>