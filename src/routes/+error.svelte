<script>
	import { page } from '$app/stores'; // or '$app/state' depending on SvelteKit version
</script>

<svelte:head>
	<title>{page.error?.message || 'Error'}</title>
</svelte:head>

<main class="w-full h-screen flex flex-col items-center justify-center p-4 text-center">
	<figure>
		<img
			alt="maintenance"
			src="/images/under_maintenance.webp"
			class="w-full h-96 object-contain"
		/>
	</figure>
	<h1>{'Sorry For the inconvenience!'}</h1>
	<h1>It seems there has been an error, sorry about that.</h1>
	<h3>Our Team is fixing this issue</h3>
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
