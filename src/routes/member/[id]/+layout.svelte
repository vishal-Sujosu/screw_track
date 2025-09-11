<script>
	import Layout from '$lib/components/shared/layout/dashboard/Layout.svelte';
	import { subContractorRoutes } from '$lib/constants/routes';
	import '../../../app.css';
</script>

<Layout siteBarItems={subContractorRoutes}>
	<slot />
</Layout>
