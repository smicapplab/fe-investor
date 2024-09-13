<script>
	import { onMount } from 'svelte';
	import * as Table from '$lib/components/ui/table/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Button } from '$lib/components/ui/button';
	let debtNotes = [
		{
			name: 'Koredor Capital',
			type: 'Debt',
			principal: '₱12,345,678.90',
			ownership: '100%',
			maturity: '2024-06-30',
			status: 'Current',
			interest: '2.15',
			profit: '₱88,765.43'
		},
		{
			name: 'TechNova Solutions',
			type: 'Debt',
			principal: '₱9,876,543.21',
			ownership: '100%',
			maturity: '2024-05-15',
			status: 'Current',
			interest: '1.87',
			profit: '₱61,234.56'
		},
		{
			name: 'GreenLeaf Energy',
			type: 'Equity',
			principal: '₱7,654,321.09',
			ownership: '50%',
			maturity: '2024-07-30',
			status: 'Current',
			interest: '2.34',
			profit: '₱59,876.54'
		},
		{
			name: 'UrbanScape Developers',
			type: 'Debt',
			principal: '₱8,765,432.10',
			ownership: '100%',
			maturity: '2024-04-15',
			status: 'Current',
			interest: '1.95',
			profit: '₱56,789.01'
		},
		{
			name: 'QuantumHealth Systems',
			type: 'Debt',
			principal: '₱6,543,210.98',
			ownership: '100%',
			maturity: '2024-03-30',
			status: 'Paid',
			interest: '2.28',
			profit: '₱49,876.54'
		},
		{
			name: 'AeroVista Dynamics',
			type: 'Debt',
			principal: '₱5,432,109.87',
			ownership: '25%',
			maturity: '2024-02-15',
			status: 'Paid',
			interest: '1.76',
			profit: '₱31,234.56'
		},
		{
			name: 'OceanTech Innovations',
			type: 'Equity',
			principal: '₱3,383,203.85',
			ownership: '50%',
			maturity: '2024-08-30',
			status: 'Current',
			interest: '2.45',
			profit: '₱27,654.32'
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
						<Table.Head class="text-center whitespace-nowrap">Issuer</Table.Head>
						<Table.Head class="text-center whitespace-nowrap">Type</Table.Head>
						<Table.Head class="text-center whitespace-nowrap">Principal</Table.Head>
						<Table.Head class="text-center whitespace-nowrap">Ownership</Table.Head>
						<Table.Head class="text-center whitespace-nowrap">Maturity</Table.Head>
						<Table.Head class="text-center whitespace-nowrap">Status</Table.Head>
						<Table.Head class="text-center whitespace-nowrap">Interest</Table.Head>
						<Table.Head class="text-center whitespace-nowrap">Profit</Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each debtNotes as { name, type, principal, ownership, maturity, status, interest, profit }}
						<Table.Row>
							<Table.Cell>{name}</Table.Cell>
							<Table.Cell class="text-right whitespace-nowrap">{type}</Table.Cell>
							<Table.Cell class="text-right whitespace-nowrap">{principal}</Table.Cell>
							<Table.Cell class="text-right whitespace-nowrap">{ownership}</Table.Cell>
							<Table.Cell class="text-right whitespace-nowrap">{maturity}</Table.Cell>
							<Table.Cell class="text-right whitespace-nowrap">{status}</Table.Cell>
							<Table.Cell class="text-right text-green-500 whitespace-nowrap">{interest}</Table.Cell
							>
							<Table.Cell class="text-right text-green-500 whitespace-nowrap">{profit}</Table.Cell>
						</Table.Row>
					{/each}
				</Table.Body>
			</Table.Root>
		</div>
	</Card.Content>
</Card.Root>
