<script>
	import { onMount } from 'svelte';
	import * as Card from '$lib/components/ui/card/index.js';

	let data = generateRandomCandlestickData();

	function generateRandomCandlestickData() {
		const end = new Date();
		const start = new Date(end.getTime() - 60 * 24 * 60 * 60 * 1000); // 90 days ago
		const data = [];
		let prevClose = 175; // Starting price
		const volatility = 0.02; // 2% daily volatility
		const trend = 0.0001; // Slight upward trend

		for (let date = new Date(start); date <= end; date.setDate(date.getDate() + 1)) {
			// Skip weekends
			if (date.getDay() === 0 || date.getDay() === 6) continue;

			const change = (Math.random() - 0.5) * volatility + trend;
			const open = prevClose * (1 + change);
			const close = open * (1 + (Math.random() - 0.5) * volatility);
			const high = Math.max(open, close) * (1 + Math.random() * volatility);
			const low = Math.min(open, close) * (1 - Math.random() * volatility);

			data.push({
				x: new Date(date),
				y: [open, high, low, close].map((val) => parseFloat(val.toFixed(2)))
			});

			prevClose = close;
		}

		return data;
	}

	let chart;

	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;

		const options = {
			series: [
				{
					data: data
				}
			],
			chart: {
				type: 'candlestick',
				height: 350,
				animations: {
					enabled: false // Disable animations for SSR
				},
				toolbar: {
					show: false
				}
			},
			xaxis: {
				type: 'datetime'
			},
			yaxis: {
				tooltip: {
					enabled: true
				}
			}
		};

		chart = new ApexCharts(document.querySelector('#portfolio-perf'), options);
		chart.render();

		return () => {
			if (chart) {
				chart.destroy();
			}
		};
	});
</script>

<div class="w-full">
	<Card.Root>
		<Card.Header class="flex flex-row items-center justify-between pb-2 space-y-0">
			<Card.Title class="text-sm font-medium">Philippine Stock Exchange Inc</Card.Title>
		</Card.Header>
		<Card.Content>
			<div id="portfolio-perf"></div>
		</Card.Content>
	</Card.Root>
</div>
