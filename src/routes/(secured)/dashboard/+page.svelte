<script>
	import { onMount } from 'svelte';
	import Summary from './summary.svelte';
	import PseChart from './pse-chart.svelte';
	import PortfolioPerf from './portfolio-perf.svelte';
	import Portfolio from './portfolio.svelte';
	import PortfolioBreakdown from './portfolio-breakdown.svelte';

	onMount(() => {
		// Any initialization code can go here
	});
</script>

<main class="flex flex-col flex-1 gap-2 p-4 md:gap-5 md:p-8">
	<div class="grid gap-2 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
		<h2 class="col-span-full">Investment Summary</h2>
		<Summary />
	</div>
	<div class="grid grid-cols-1 gap-2 md:gap-5 lg:grid-cols-2 xl:grid-cols-4">
		<h2 class="col-span-full">Portfolio Breakdown</h2>
		<PortfolioBreakdown />
	</div>

	<div class="grid grid-cols-1 gap-2 md:grid-cols-1 md:gap-5 lg:grid-cols-2">
		<div>
			<PortfolioPerf />
		</div>
		<div>
			<PseChart />
		</div>
	</div>

	<div class="grid grid-cols-1 gap-2 md:gap-5">
		<div class="xl:col-span-2">
			<Portfolio />
		</div>
	</div>
</main>
