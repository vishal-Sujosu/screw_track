<script>
	import Layout from '$lib/components/dashboard/Layout.svelte';
	import { contractorRoutes } from '$lib/components/dashboard/sidebar/data';
	import '../../../app.css';
</script>

<Layout siteBarItems={contractorRoutes}>
	<slot />
</Layout>
