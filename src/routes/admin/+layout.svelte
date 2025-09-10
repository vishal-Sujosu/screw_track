<script>
	import Layout from '$lib/components/shared/dashboard/Layout.svelte';
	import { primeRoutes } from '$lib/components/shared/dashboard/sidebar/data';
	import '../../app.css';
</script>

<Layout siteBarItems={primeRoutes} >
	<slot />
</Layout>
