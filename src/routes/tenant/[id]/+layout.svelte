<script>
	import Layout from '$lib/components/shared/layout/dashboard/Layout.svelte';
	import { contractorRoutes } from '$lib/constants/routes';
	import '../../../app.css';
</script>

<Layout siteBarItems={contractorRoutes}>
	<slot />
</Layout>
