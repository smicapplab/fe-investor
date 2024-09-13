<script>
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { options } from './config';

	const data = [
		{ name: 'Invoice Financial', value: 38500000.0 },
		{ name: 'Working Capital', value: 12750500.0 },
		{ name: 'Purchase Order', value: 2750000.0 }
	];

	let chart;

	onMount(async () => {
		if (browser) {
			const ApexCharts = (await import('apexcharts')).default;
			const series = data.map((item) => item.value);
			chart = new ApexCharts(document.querySelector('#types-chart'), {
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
	<div id="types-chart"></div>
{:else}
	<p>Chart loading...</p>
{/if}
