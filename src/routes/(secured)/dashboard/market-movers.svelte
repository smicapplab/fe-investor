<script>
	import { onMount } from 'svelte';
	import * as Table from '$lib/components/ui/table/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Button } from '$lib/components/ui/button';

	let stocks = [
		{
			code: 'PLUS',
			name: 'DigiPlus Interactive Corp',
			last: '20.00',
			change: '-4.76',
			vol: '19.13M'
		},
		{
			code: 'ALI',
			name: 'Ayala Land Inc',
			last: '35.45',
			change: '2.01',
			vol: '7.30M'
		},
		{
			code: 'BDO',
			name: 'BDO Unibank Inc',
			last: '159.60',
			change: '1.20',
			vol: '2.40M'
		},
		{
			code: 'ICT',
			name: 'International Container Terminal Services Inc',
			last: '418.60',
			change: '2.80',
			vol: '1.13M'
		},
		{
			code: 'AC',
			name: 'Ayala Corp',
			last: '616.00',
			change: '0.98',
			vol: '392.13K'
		},
		{
			code: 'SM',
			name: 'SM Investments Corp',
			last: '920.00',
			change: '1.55',
			vol: '225.32K'
		},
		{
			code: 'GLO',
			name: 'Globe Telecom Inc',
			last: '2,202.00',
			change: '-1.52',
			vol: '80.85K'
		}
	];

	onMount(() => {
		// Any initialization code can go here
	});
</script>

<Card.Root class="w-full">
	<Card.Header>
		<Card.Title>Market Movers</Card.Title>
		<div class="flex space-x-2">
			<Button variant="secondary" size="sm">Active</Button>
			<Button variant="outline" size="sm">Gainers</Button>
			<Button variant="outline" size="sm">Losers</Button>
		</div>
	</Card.Header>
	<Card.Content class="overflow-x-auto">
		<div class="inline-block min-w-full align-middle">
			<Table.Root>
				<Table.Header>
					<Table.Row>
						<Table.Head class="text-center whitespace-nowrap">Stock</Table.Head>
						<Table.Head class="text-center whitespace-nowrap">Last</Table.Head>
						<Table.Head class="text-center whitespace-nowrap">Change(%)</Table.Head>
						<Table.Head class="text-center whitespace-nowrap">Vol</Table.Head>
						<Table.Head class="text-center whitespace-nowrap"></Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each stocks as stock}
						<Table.Row>
							<Table.Cell>
								<div class="font-medium">{stock.code}</div>
								<div class="text-sm text-muted-foreground">{stock.name}</div>
							</Table.Cell>
							<Table.Cell class="text-right whitespace-nowrap">{stock.last}</Table.Cell>
							<Table.Cell
								class="whitespace-nowrap text-right {stock.change > 0
									? 'text-green-500'
									: 'text-red-500'}">{stock.change}</Table.Cell
							>
							<Table.Cell class="text-right whitespace-nowrap">{stock.vol}</Table.Cell>
							<Table.Cell class="whitespace-nowrap"
								><Button variant="outline" size="sm">Buy</Button></Table.Cell
							>
						</Table.Row>
					{/each}
				</Table.Body>
			</Table.Root>
		</div>
	</Card.Content>
</Card.Root>
