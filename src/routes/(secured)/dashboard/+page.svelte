<script>
	import { onMount } from 'svelte';
	import ArrowUpRight from 'lucide-svelte/icons/arrow-up-right';

	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import * as Table from '$lib/components/ui/table/index.js';
	import { Button } from '$lib/components/ui/button';

	import * as Card from '$lib/components/ui/card/index.js';
	import Summary from './summary.svelte';
	import PseChart from './pse-chart.svelte';
	import PortfolioPerf from './portfolio-perf.svelte';
	import MarketMovers from './market-movers.svelte';
	import Portfolio from './portfolio.svelte';


	let stocks = [
		{ name: 'AAPL', value: 25000, shares: 150 },
		{ name: 'GOOGL', value: 30000, shares: 20 },
		{ name: 'MSFT', value: 28000, shares: 100 },
		{ name: 'AMZN', value: 17000, shares: 15 }
	];

	// let performanceData = {
	// 	labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
	// 	datasets: [
	// 		{
	// 			data: [95000, 97000, 99000, 148000, 132997.47, 145231.89],
	// 			borderColor: 'rgb(255, 102, 0)',
	// 			tension: 0.1
	// 		}
	// 	]
	// };

	// let chartOptions = {
	// 	responsive: true,
	// 	maintainAspectRatio: false,
	// 	plugins: {
	// 		legend: {
	// 			display: false // This will hide the legend
	// 		}
	// 	}
	// };

	onMount(() => {
		// Any initialization code can go here
	});
</script>

<!-- <div class="container p-4 mx-auto">
	<h1 class="mb-6 text-3xl font-bold">Stock Portfolio</h1>

	<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
		<Card>
			<CardHeader>
				<CardTitle>Portfolio Value</CardTitle>
			</CardHeader>
			<CardContent>
				<p class="text-4xl font-bold">${portfolioValue.toLocaleString()}</p>
			</CardContent>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle>Performance</CardTitle>
			</CardHeader>
			<CardContent>
				<div style="height: 200px;">
					<Line data={performanceData} options={chartOptions} />
				</div>
			</CardContent>
		</Card>
	</div>

	<Card class="mt-6">
		<CardHeader>
			<CardTitle>Stock Holdings</CardTitle>
		</CardHeader>
		<CardContent>
			<div class="overflow-x-auto">
				<table class="w-full">
					<thead>
						<tr>
							<th class="text-left">Stock</th>
							<th class="text-left">Shares</th>
							<th class="text-left">Value</th>
						</tr>
					</thead>
					<tbody>
						{#each stocks as stock}
							<tr>
								<td>{stock.name}</td>
								<td>{stock.shares}</td>
								<td>${stock.value.toLocaleString()}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</CardContent>
	</Card>

	<div class="mt-6">
		<Button>Add Stock</Button>
	</div>
</div> -->

<main class="flex flex-col flex-1 gap-2 p-4 md:gap-5 md:p-8">
	<div class="grid gap-2 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
		<Summary />
	</div>
	
	<div class="grid grid-cols-1 gap-2 md:grid-cols-1 md:gap-5 lg:grid-cols-2">
		<div>
			<PortfolioPerf />
		</div>
		<div>
			<PseChart />
		</div>
	</div>

	<div class="grid gap-2 md:gap-5 lg:grid-cols-2 xl:grid-cols-3">
		<div class="xl:col-span-2">
			<Portfolio />
		</div>
		<MarketMovers />
	</div>
</main>
