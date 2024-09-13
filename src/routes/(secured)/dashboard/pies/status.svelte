<script>
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { options } from './config';

	const data = [
		{ name: 'Current', value: 38880360.0 }, // 72% of total
        { name: 'For Collection', value: 6885063.75 },
		{ name: 'Paid', value: 6885063.75 },
        { name: 'Late (1-30 days)', value: 1080010.0 }, // 2% of total
		{ name: 'Late (30+ days)', value: 270002.5 }, // 0.5% of total
	];

	let chart;

	onMount(async () => {
		if (browser) {
			const ApexCharts = (await import('apexcharts')).default;

			const series = data.map((item) => item.value);

			chart = new ApexCharts(document.querySelector('#status-chart'), {
				...options,
				labels: data.map((item) => item.name),
				series
			});
			chart.render();
		}

		return () => {
			if (chart) {
				chart.destroy();
			}
		};
	});
</script>

{#if browser}
	<div id="status-chart"></div>
{:else}
	<p>Chart loading...</p>
{/if}
