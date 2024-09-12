<script>
	import * as Card from '$lib/components/ui/card/index.js';
	import { CalendarArrowUp, ChartCandlestick, ChartLine, CreditCardIcon } from 'lucide-svelte';
</script>

<Card.Root>
	<Card.Header class="flex flex-row items-center justify-between pb-2 space-y-0">
		<Card.Title class="text-sm font-medium">Purchasing Power</Card.Title>
		<CreditCardIcon class="w-4 h-4 text-muted-foreground" />
	</Card.Header>
	<Card.Content>
		<div class="text-2xl font-bold">₱92,350.10</div>
		<p class="text-xs text-muted-foreground">Actual Balance: ₱57,123.32</p>
	</Card.Content>
</Card.Root>
<Card.Root>
	<Card.Header class="flex flex-row items-center justify-between pb-2 space-y-0">
		<Card.Title class="text-sm font-medium">Total Trade Value</Card.Title>
		<ChartCandlestick class="w-4 h-4 text-muted-foreground" />
	</Card.Header>
	<Card.Content>
		<div class="text-2xl font-bold">₱145,231.89</div>
		<p class="text-xs text-muted-foreground">+20.1% from last month</p>
	</Card.Content>
</Card.Root>
<Card.Root>
	<Card.Header class="flex flex-row items-center justify-between pb-2 space-y-0">
		<Card.Title class="text-sm font-medium">Gain/Loss</Card.Title>
		<ChartLine class="w-4 h-4 text-muted-foreground" />
	</Card.Header>
	<Card.Content>
		<div class="text-2xl font-bold text-green-600">+12,234.42</div>
		<p class="text-xs text-muted-foreground">+19% from last month</p>
	</Card.Content>
</Card.Root>
<Card.Root>
	<Card.Header class="flex flex-row items-center justify-between pb-2 space-y-0">
		<Card.Title class="text-sm font-medium">Day Change</Card.Title>
		<CalendarArrowUp class="w-4 h-4 text-muted-foreground" />
	</Card.Header>
	<Card.Content>
		<div class="text-2xl font-bold text-green-600">+₱2,350.77</div>
		<p class="text-xs text-muted-foreground">+180.1% from last yesterday</p>
	</Card.Content>
</Card.Root>
