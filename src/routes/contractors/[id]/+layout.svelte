<script>
	import Layout from '$lib/components/shared/dashboard/Layout.svelte';
	import { contractorRoutes } from '$lib/components/shared/dashboard/sidebar/data';
	import '../../../app.css';
</script>

<Layout siteBarItems={contractorRoutes}>
	<slot />
</Layout>
