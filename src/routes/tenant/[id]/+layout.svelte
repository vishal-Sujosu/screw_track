<script>
	import Layout from '$lib/components/shared/layout/dashboard/Layout.svelte';
	import { contractorRoutes } from '$lib/constants/routes';
	import '../../../app.css';
	import { navigating } from '$app/stores';
</script>

<Layout siteBarItems={contractorRoutes}>
	{#if $navigating}
		<div class="loader">Loading...</div>
	{/if}
	<slot />
</Layout>

<style>
	.loader {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
	}
</style>
