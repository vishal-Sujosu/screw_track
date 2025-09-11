<script>
  import { toasts } from "../../../store/toast/store";
  import Toast from "./Toast.svelte";
  import { Info ,Check ,X ,CircleAlert ,BellRing  } from 'lucide-svelte';

  const getIconByType = (type) => {
  switch (type) {
    case "success": return Check; // Success icon
    case "error": return X;   // Error icon
    case "info": return Info;    // Info icon    
    case "warning": return CircleAlert; // Warning icon
    default: return BellRing;        // Default icon
  }
};

</script>

<div class="notifications">
  <!-- {@debug $toasts} -->
  {#each [...$toasts] as [key, value]}
    {@const y = key.substring(0, key.indexOf("-"))}
    {@const x = key.substring(key.indexOf("-") + 1)}
    <div class={`toast  toast-${x} toast-${y} z-50 `}>
      {#each value as toast}
        <Toast type={toast.type} icon={getIconByType(toast.type)} id={toast.id} msg={toast.msg} timeout={toast.timeout}  />
      {/each}
    </div>
  {/each}
</div>

<style>
  .toast:where(.toast-center) {
    right: 0 !important;
  }
</style>