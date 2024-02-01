<script lang="ts">
	import { goto } from '$app/navigation';
	/* The button code */
	import { Button } from '$lib/components/ui/button';
</script>

<div class="mx-auto p-4 max-w-7xl">
	<!-- Adjusted max-width -->
	<div>
		<h1 class="text-2xl font-bold text-center mb-2">Welcome to the Period Project Locator</h1>
		<h2 class="text-1xl font-bold text-center mb-6">
			For the Louisiana State University Baton Rouge Campus
		</h2>
	</div>
</div>
<div>
	<p class="text-lg flex justify-center items-center flex-col pb-8">
		Here you can track and locate the nearest Period Project Tracker for your convienience
	</p>
</div>
<!-- the actual button-->
<div class="flex justify-center items-center flex-col pb-6">
	<Button
		variant="outline"
		on:click={() => {
			localStorage.setItem('SawWelcome', 'true');
			goto('/').then(() => {
				setTimeout(() => {
					window.location.reload();
				}, 0);
			});
		}}
		>I have read everything and i understand what this website is about
	</Button>
</div>
