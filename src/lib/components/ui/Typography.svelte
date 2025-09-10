<!-- src/lib/components/Typography.svelte -->
<script>
	export let variant = 'body';
	export let className = '';
</script>

{#if variant === 'h1'}
	<h1 class="text-4xl font-bold {className}"><slot /></h1>
{:else if variant === 'h2'}
	<h2 class="text-3xl font-semibold {className}"><slot /></h2>
{:else if variant === 'h3'}
	<h3 class="text-2xl font-semibold {className}"><slot /></h3>
{:else if variant === 'h4'}
	<h4 class="text-xl font-semibold {className}"><slot /></h4>
{:else if variant === 'caption'}
	<p class="text-sm text-muted {className}"><slot /></p>
{:else}
	<p class="text-base {className}"><slot /></p>
{/if}
