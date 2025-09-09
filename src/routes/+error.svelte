<script>
  import { page } from '$app/stores'; // or '$app/state' depending on SvelteKit version
</script>

<svelte:head>
  <title>{page.error?.message || 'Error'}</title>
</svelte:head>

<main>
  <h1>{ 'Something went wrong!'}</h1>
   <h1>It seems there has been an error, sorry about that.</h1>
   <h3>We are looking</h3>
    {#if $page?.error}
        <div class="mt-4 p-4 border-y-2">
            {#if $page?.status}
                <p>Page status: {$page?.status}</p>
            {/if}
            {#if $page?.error?.message}
                <p>Error message: {$page?.error?.message}</p>
            {/if}
        </div>
    {/if}
</main>
