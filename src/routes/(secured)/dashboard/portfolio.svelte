<script>
	import { onMount } from 'svelte';
	import * as Table from '$lib/components/ui/table/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Button } from '$lib/components/ui/button';
	let stocks = [
		{
			code: 'KRD',
			name: 'Koredor Capital',
			price: '85.50',
			market: '42,562.50',
			ave: '82.00',
			shares: '500',
			perf: '1,750.00',
			percent: '4.29'
		},
		{
			code: 'MEG',
			name: 'Mega Fincorp',
			price: '32.75',
			market: '36,025.00',
			ave: '30.50',
			shares: '1,100',
			perf: '2,475.00',
			percent: '7.37'
		},
		{
			code: 'BLT',
			name: 'Bank Leumi Trust',
			price: '178.25',
			market: '33,867.50',
			ave: '165.00',
			shares: '190',
			perf: '2,517.50',
			percent: '8.03'
		},
		{
			code: 'AC',
			name: 'Ayala Corp',
			price: '655.35',
			market: '32,776.89',
			ave: '620.00',
			shares: '50',
			perf: '1,767.50',
			percent: '5.70'
		}
	];

	onMount(() => {
		// Any initialization code can go here
	});
</script>

<Card.Root class="w-full">
	<Card.Header>
		<Card.Title>My Portfolio</Card.Title>
	</Card.Header>
	<Card.Content class="overflow-x-auto">
		<div class="inline-block min-w-full align-middle">
			<Table.Root>
				<Table.Header>
					<Table.Row class="border-spacing-1">
						<Table.Head class="text-center whitespace-nowrap">Stock</Table.Head>
						<Table.Head class="text-center whitespace-nowrap">Market Price</Table.Head>
						<Table.Head class="text-center whitespace-nowrap">Ave Price</Table.Head>
						<Table.Head class="text-center whitespace-nowrap">Shares</Table.Head>
						<Table.Head class="text-center whitespace-nowrap">Value</Table.Head>
						<Table.Head class="text-center whitespace-nowrap">Gain/Loss</Table.Head>
						<Table.Head class="text-center whitespace-nowrap">%</Table.Head>
						<Table.Head></Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each stocks as stock}
						<Table.Row>
							<Table.Cell>
								<div class="font-medium">{stock.code}</div>
								<div class="text-sm text-muted-foreground">{stock.name}</div>
							</Table.Cell>
							<Table.Cell class="text-right whitespace-nowrap">{stock.price}</Table.Cell>
							<Table.Cell class="text-right whitespace-nowrap">{stock.ave}</Table.Cell>
							<Table.Cell class="text-right whitespace-nowrap">{stock.shares}</Table.Cell>
							<Table.Cell class="text-right whitespace-nowrap">{stock.market}</Table.Cell>
							<Table.Cell class="text-right text-green-500 whitespace-nowrap"
								>{stock.perf}</Table.Cell
							>
							<Table.Cell class="text-right text-green-500 whitespace-nowrap"
								>{stock.percent}</Table.Cell
							>
							<Table.Cell class="text-right whitespace-nowrap">
								<Button variant="outline" size="sm">Buy</Button>
								<Button variant="outline" size="sm">Sell</Button>
							</Table.Cell>
						</Table.Row>
					{/each}
				</Table.Body>
			</Table.Root>
		</div>
	</Card.Content>
</Card.Root>
