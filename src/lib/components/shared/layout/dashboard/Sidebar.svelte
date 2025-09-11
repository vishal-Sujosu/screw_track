<script>
	import { page } from '$app/stores';
	import { sidebarOpen } from '$lib/store/sideBar/store';

	const style = {
		mobileOrientation: {
			start: 'left-0 ',
			end: 'right-0 lg:left-0'
		},
		container: `pb-32 lg:pb-12`,
		close: `duration-700 ease-out hidden transition-all lg:w-24`,
		default: `bg-gray-darkest dark:bg-white h-screen overflow-y-auto top-0 lg:absolute lg:block lg:z-40`,
		open: `absolute duration-500 ease-in transition-all w-8/12 z-40 sm:w-5/12 md:w-64`
	};

	const sideBarItemStyle = {
		title: `mx-4 text-sm whitespace-pre`,
		inactive: `text-secondary`,
		active: `font-medium text-primary hover:text-green-400`,
		link: `flex items-center justify-start my-2 p-4 w-full hover:text-white `,
		close: `lg:duration-700 lg:ease-out lg:invisible lg:opacity-0 lg:transition-all`,
		open: `lg:duration-500 lg:ease-in lg:h-auto lg:opacity-100 lg:transition-all lg:w-auto`
	};

	export let mobileOrientation = 'end';
	export let siteBarItems;
</script>

<aside
	class={`${style.default} ${style.mobileOrientation[mobileOrientation]}
       ${$sidebarOpen ? style.open : style.close} scrollbar`}
>
	<div class={style.container}>
		<!-- <SidebarHeader /> -->
		<div
			class="bg-grey-dark dark:bg-white flex h-20 items-center justify-center mb-6 sticky top-0 z-10"
		>
			<img src="/images/2.png" width={50} height={50} alt="Enoch Ndika" />
		</div>

		<!-- <SidebarItems {siteBarItems} /> -->

		<ul class="overflow-auto h-[80vh] overflow-x-hidden">
			<li>
				{#each siteBarItems as item (item.title)}
					<div class="hover:bg-yellow-light ml-0 rounded-lg">
						<a
							href={item.link}
							class={`${sideBarItemStyle.link} 
            ${item.link === $page.url.pathname ? sideBarItemStyle.active : sideBarItemStyle.inactive} `}
						>
							<span><svelte:component this={item.icon} /></span>
							<span class={`${sideBarItemStyle.title} ${$sidebarOpen ? sideBarItemStyle.open : sideBarItemStyle.close}`}>
								{item.title}
							</span>
						</a>
					</div>
				{/each}
			</li>
		</ul>
	</div>
</aside>

<style>
	.scrollbar::-webkit-scrollbar {
		width: 0;
		background: transparent; /* hide Sidebar scrollbar on Chrome, Opera and other webkit Browsers*/
	}
	.scrollbar {
		-ms-overflow-style: none;
	}
</style>
