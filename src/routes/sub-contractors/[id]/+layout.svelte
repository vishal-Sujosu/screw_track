<script>
	import Layout from '$lib/components/dashboard/Layout.svelte';
	import { subContractorRoutes } from '$lib/components/dashboard/sidebar/data';
	import '../../../app.css';
</script>

<Layout siteBarItems={subContractorRoutes}>
	<slot />
</Layout>
