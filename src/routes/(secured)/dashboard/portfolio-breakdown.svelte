<script>
	import * as Card from '$lib/components/ui/card/index.js';
	import Sector from './pies/sector.svelte';
	import Risk from './pies/risk.svelte';
	import Types from './pies/types.svelte';
	import Status from './pies/status.svelte';
</script>

<Card.Root>
	<Card.Header class="flex flex-row items-center justify-between pb-2 space-y-0">
		<Card.Title class="text-sm font-medium">Risk Distribution</Card.Title>
	</Card.Header>
	<Card.Content>
		<Risk />
	</Card.Content>
</Card.Root>

<Card.Root>
	<Card.Header class="flex flex-row items-center justify-between pb-2 space-y-0">
		<Card.Title class="text-sm font-medium">Issuer Sector Distribution</Card.Title>
	</Card.Header>
	<Card.Content>
		<Sector />
	</Card.Content>
</Card.Root>

<Card.Root>
	<Card.Header class="flex flex-row items-center justify-between pb-2 space-y-0">
		<Card.Title class="text-sm font-medium">Product Distribution</Card.Title>
	</Card.Header>
	<Card.Content>
		<Types />
	</Card.Content>
</Card.Root>

<Card.Root>
	<Card.Header class="flex flex-row items-center justify-between pb-2 space-y-0">
		<Card.Title class="text-sm font-medium">Loan Status Distribution</Card.Title>
	</Card.Header>
	<Card.Content>
		<Status />
	</Card.Content>
</Card.Root>

