<script lang="ts">
	import { onMount } from 'svelte';
	import * as Table from '$lib/components/ui/table';
	onMount(() => {
		setInterval(() => {
			data = [
				...data,
				{
					product: 'Pad',
					status: 'avaliable',
					amount: '10'
				}
			];
		}, 500);
	});

	var data = [
		{
			product: 'Tampon',
			status: 'not avaliable',
			amount: '0'
		},
		{
			product: 'Tampon',
			status: 'not avaliable',
			amount: '0'
		},
		{
			product: 'Tampon',
			status: 'not avaliable',
			amount: '0'
		},
		{
			product: 'Tampon',
			status: 'not avaliable',
			amount: '0'
		},
		{
			product: 'Pad',
			status: 'avaliable',
			amount: '10'
		}
	];
</script>

<Table.Root>
	<Table.Caption>Period Project Tracker Test by ANDREW MWAHAAH</Table.Caption>
	<Table.Header>
		<Table.Row>
			<Table.Head class="w-[100px]">Product</Table.Head>
			<Table.Head>Status</Table.Head>
			<Table.Head>Amount</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each data as element, e (e)}
			<Table.Row>
				<Table.Cell class="font-medium">{element.product}</Table.Cell>
				<Table.Cell>{element.status}</Table.Cell>
				<Table.Cell>{element.amount}</Table.Cell>
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
