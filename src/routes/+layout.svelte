<script>
	import '../app.css';
	import Layout from '$lib/components/dashboard/Layout.svelte';
	import Notifications from '$lib/components/toast/Notifications.svelte';
</script>

<Layout>
	<Notifications />
	<slot />
</Layout>
