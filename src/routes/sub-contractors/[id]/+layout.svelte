<script>
	import Layout from '$lib/components/shared/dashboard/Layout.svelte';
	import { subContractorRoutes } from '$lib/components/shared/dashboard/sidebar/data';
	import '../../../app.css';
</script>

<Layout siteBarItems={subContractorRoutes}>
	<slot />
</Layout>
