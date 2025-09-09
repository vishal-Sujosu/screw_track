<script>
	import { primeRoutes } from './data';
	import { page } from '$app/stores';
	import { sidebarOpen } from '../../../store/sideBar/store';

	const style = {
		title: `mx-4 text-sm whitespace-pre`,
		inactive: `text-secondary`,
		active: `font-medium text-primary hover:text-green-400`,
		link: `flex items-center justify-start my-2 p-4 w-full hover:text-white `,
		close: `lg:duration-700 lg:ease-out lg:invisible lg:opacity-0 lg:transition-all`,
		open: `lg:duration-500 lg:ease-in lg:h-auto lg:opacity-100 lg:transition-all lg:w-auto`
	};
</script>

<ul class="overflow-auto h-[80vh] overflow-x-hidden ">
	<li >
		{#each primeRoutes as item (item.title)}
		<div class="hover:bg-yellow-light ml-0 rounded-lg">
			<a
				href={item.link}
				class={`${style.link} 
            ${item.link === $page.url.pathname ? style.active : style.inactive} `}
			>
				<span><svelte:component this={item.icon} /></span>
				<span class={`${style.title} ${$sidebarOpen ? style.open : style.close}`}>
					{item.title}
				</span>
			</a>
		</div>

		{/each}
	</li>
</ul>
