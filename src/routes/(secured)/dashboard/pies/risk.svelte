<script>
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { options } from './config';

	const data = [
		{ name: 'AAA', value: 15400000.0 },
		{ name: 'AA', value: 11550000.0 },
		{ name: 'BBB', value: 24300500.0 },
		{ name: 'BB', value: 2750000.0 }
	];
	let chart;

	onMount(async () => {
		if (browser) {
			const ApexCharts = (await import('apexcharts')).default;

			const series = data.map((item) => item.value);

			chart = new ApexCharts(document.querySelector('#issuers-chart'), {
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
	<div id="issuers-chart"></div>
{:else}
	<p>Chart loading...</p>
{/if}
