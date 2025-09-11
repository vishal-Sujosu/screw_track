<script>
	import Layout from '$lib/components/shared/layout/dashboard/Layout.svelte';
	import { primeRoutes } from '$lib/constants/routes';
	import '../../app.css';
</script>

<Layout siteBarItems={primeRoutes} >
	<slot />
</Layout>
