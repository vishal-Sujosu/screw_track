<script >
	import '@carbon/charts-svelte/styles.css'
      import { onMount } from 'svelte';
  let ChartComponent;

  onMount(async () => {
    const module = await import('@carbon/charts-svelte');
    ChartComponent = module.BarChartSimple;  // or any chart you need
  });
</script>
<div>
    Contractor dashboard
</div>

{#if ChartComponent}
  <svelte:component this={ChartComponent} data={[
		{ group: 'Qty', value: 65000 },
		{ group: 'More', value: 29123 },
		{ group: 'Sold', value: 35213 },
		{ group: 'Restocking', value: 51213 },
		{ group: 'Misc', value: 16932 }
	]} options={{
		theme: 'white',
		title: 'Simple bar (discrete)',
		height: '400px',
        fileDownload: {
            filename: 'dummy-filename'
        },
        
		axes: {
			left: { mapsTo: 'value' },
			bottom: { mapsTo: 'group', scaleType: 'labels' }
		},
        
	}}  />
{/if}

