<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import * as Card from '$lib/components/ui/card/index.js';

	function generatePortfolioData() {
		const end = new Date();
		const start = new Date(end.getTime() - 30 * 24 * 60 * 60 * 1000); // 30 days ago
		const activeInvestmentData = [];
		const interestEarnedData = [];
		const startValue = 5000500.0;
		const endValue = 54000500.0;
		const totalDays = Math.ceil((end - start) / (24 * 60 * 60 * 1000));
		const growthRate = Math.pow(endValue / startValue, 1 / totalDays) - 1;
		const volatility = 0.015; // 1.5% daily volatility

		let prevValue = startValue;
		let totalInterest = 0;

		for (let date = new Date(start); date <= end; date.setDate(date.getDate() + 1)) {
			// Skip weekends
			if (date.getDay() === 0 || date.getDay() === 6) continue;

			let value;
			if (date.toDateString() === end.toDateString()) {
				value = endValue; // Today's value
			} else {
				const expectedGrowth = prevValue * (1 + growthRate);
				const randomFactor = 1 + (Math.random() - 0.5) * volatility;
				value = expectedGrowth * randomFactor;
			}

			activeInvestmentData.push({
				x: date.getTime(),
				y: parseFloat(value.toFixed(2))
			});

			// Calculate interest earned (random between 1% and 3.5% annually, applied daily)
			const dailyInterestRate = (Math.random() * 0.025 + 0.01) / 365;
			const dailyInterest = value * dailyInterestRate;
			totalInterest += dailyInterest;

			interestEarnedData.push({
				x: date.getTime(),
				y: parseFloat(totalInterest.toFixed(2))
			});

			prevValue = value;
		}

		return [activeInvestmentData, interestEarnedData];
	}

	let chart;

	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;

		const [activeInvestmentData, interestEarnedData] = generatePortfolioData();

		const options = {
			series: [
				{
					name: 'Active Investment',
					data: activeInvestmentData
				},
				{
					name: 'Interest Earned',
					data: interestEarnedData
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
				width: 2
			},
			colors: ['#FFA500', '#40E0D0'], // Orange for Active Investment, Turquoise for Interest Earned
			xaxis: {
				type: 'datetime'
			},
			yaxis: [
				{
					title: {
						text: 'Active Investment'
					},
					labels: {
						formatter: function (value) {
							return '₱' + value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
						}
					}
				},
				{
					opposite: true,
					title: {
						text: 'Interest Earned'
					},
					labels: {
						formatter: function (value) {
							return '₱' + value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
						}
					}
				}
			],
			tooltip: {
				x: {
					format: 'dd MMM yyyy'
				},
				y: {
					formatter: function (value) {
						return '₱' + value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
					}
				}
			},
			legend: {
				position: 'bottom',
				horizontalAlign: 'center',
				offsetY: 10
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