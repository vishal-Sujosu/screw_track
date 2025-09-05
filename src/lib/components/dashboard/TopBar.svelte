<script>
	import ThemeSwitch from '$lib/components/themeSwitch/ThemeSwitch.svelte';
	import { openSidebar } from './store';
</script>

<header class="bg-white dark:bg-gray-700 h-16 items-center relative shadow w-full z-10 md:h-20">
	<div class="flex flex-center flex-col h-full justify-center mx-auto px-3 relative">
		<div class="flex items-center pl-1 relative w-full sm:ml-0 sm:pr-2 lg:max-w-68">
			<div class="flex left-0 relative w-3/4">
				<div class="flex group h-full items-center relative w-12">
					<button
						type="button"
						aria-expanded="false"
						aria-label="Toggle sidenav"
						on:click={openSidebar}
						class="text-4xl text-black dark:text-white focus:outline-none"
					>
						&#8801;
					</button>
				</div>
			</div>
			<div class="flex items-center justify-end ml-5 p-1 relative w-full sm:mr-0 sm:right-auto">

				<span class="block pr-5 relative">
					<ThemeSwitch />
				</span>
				<span class="block relative">
					<img
						alt="profile"
						src="/images/1.jpg"
						class="h-10 mx-auto object-cover rounded-full w-10"
					/>
				</span>
			</div>
		</div>
	</div>
</header>
