<script>
	import * as Card from '$lib/components/ui/card/index.js';
	import { SignpostBig, CreditCardIcon, Handshake, HandCoins } from 'lucide-svelte';
</script>

<Card.Root>
	<Card.Header class="flex flex-row items-center justify-between pb-2 space-y-0">
		<Card.Title class="text-sm font-medium">Purchasing Power</Card.Title>
		<CreditCardIcon class="w-4 h-4 text-muted-foreground" />
	</Card.Header>
	<Card.Content>
		<div class="text-2xl font-bold">₱4,192,350.00</div>
		<p class="text-xs text-muted-foreground">Actual Balance: ₱8,192,000.00</p>
	</Card.Content>
</Card.Root>
<Card.Root>
	<Card.Header class="flex flex-row items-center justify-between pb-2 space-y-0">
		<Card.Title class="text-sm font-medium">Total Investment</Card.Title>
		<Handshake class="w-4 h-4 text-muted-foreground" />
	</Card.Header>
	<Card.Content>
		<div class="text-2xl font-bold">₱54,000,500.00</div>
		<p class="text-xs text-muted-foreground">Across 7 active investments</p>
	</Card.Content>
</Card.Root>
<Card.Root>
	<Card.Header class="flex flex-row items-center justify-between pb-2 space-y-0">
		<Card.Title class="text-sm font-medium">Total Returns</Card.Title>
		<HandCoins class="w-4 h-4 text-muted-foreground" />
	</Card.Header>
	<Card.Content>
		<div class="text-2xl font-bold">₱720,234.42</div>
		<p class="text-xs text-muted-foreground">13% from last month</p>
	</Card.Content>
</Card.Root>
<Card.Root>
	<Card.Header class="flex flex-row items-center justify-between pb-2 space-y-0">
		<Card.Title class="text-sm font-medium">In Auction</Card.Title>
		<SignpostBig class="w-4 h-4 text-muted-foreground" />
	</Card.Header>
	<Card.Content>
		<div class="text-2xl font-bold">₱3,999,650.00</div>
		<p class="text-xs text-muted-foreground">Across 3 auctioned notes</p>
	</Card.Content>
</Card.Root>
