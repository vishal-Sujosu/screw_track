<script>
	import Layout from '$lib/components/dashboard/Layout.svelte';
	import { primeRoutes } from '$lib/components/dashboard/sidebar/data';
	import '../../app.css';
</script>

<Layout siteBarItems={primeRoutes} >
	<slot />
</Layout>
