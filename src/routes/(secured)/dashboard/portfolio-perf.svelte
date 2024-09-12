<script>
// @ts-nocheck

	import { onMount } from 'svelte';
	import * as Card from '$lib/components/ui/card/index.js';

	function generatePortfolioData() {
		const end = new Date();
		const start = new Date(end.getTime() - 30 * 24 * 60 * 60 * 1000); // 30 days ago
		const data = [];
		let prevValue = 130000; // Starting value
		const volatility = 0.015; // 1.5% daily volatility

		for (let date = new Date(start); date <= end; date.setDate(date.getDate() + 1)) {
			// Skip weekends
			if (date.getDay() === 0 || date.getDay() === 6) continue;

			let value;
			if (date.toDateString() === end.toDateString()) {
				value = 145231.89; // Today's value
			} else if (
				date.toDateString() === new Date(end.getTime() - 24 * 60 * 60 * 1000).toDateString()
			) {
				value = 132997.47; // Yesterday's value
			} else {
				const change = (Math.random() - 0.5) * volatility;
				value = prevValue * (1 + change);
			}

			data.push({
				x: date.getTime(),
				y: parseFloat(value.toFixed(2))
			});

			prevValue = value;
		}

		return data;
	}

	let chart;

	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;

		const options = {
			series: [
				{
					name: 'Portfolio Value',
					data: generatePortfolioData()
				}
			],
			chart: {
				type: 'line',
				height: 350,
				animations: {
					enabled: false // Disable animations for SSR
				},
				toolbar: {
					show: false
				}
			},
			stroke: {
				curve: 'smooth',
				width: 2,
				colors: ['#FFA500']
			},
			xaxis: {
				type: 'datetime'
			},
			yaxis: {
				labels: {
					formatter: function (value) {
						return '$' + value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
					}
				}
			},
			tooltip: {
				x: {
					format: 'dd MMM yyyy'
				},
				y: {
					formatter: function (value) {
						return '$' + value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
					}
				}
			}
		};

		chart = new ApexCharts(document.querySelector('#portfolio-chart'), options);
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
			<Card.Title class="text-sm font-medium">Portfolio Performance</Card.Title>
		</Card.Header>
		<Card.Content>
			<div id="portfolio-chart"></div>
		</Card.Content>
	</Card.Root>
</div>
