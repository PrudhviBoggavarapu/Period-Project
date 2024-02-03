<script>
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';
</script>

<h1 class="text-2xl font-bold underline">Main Dashboard</h1>
<div class="flex justify-center items-center flex-col pb-6">
	<Button
		variant="outline"
		on:click={() => {
			localStorage.setItem('SawWelcome', 'true');
			goto('/test').then(() => {
				setTimeout(() => {
					window.location.reload();
				}, 0);
			});
		}}
		>View Dispenser Data
	</Button>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
