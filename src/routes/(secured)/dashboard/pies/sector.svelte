<script>
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { options } from './config';

	const data = [
		{ name: 'Technology', value: 15782143.27 },
		{ name: 'Retail', value: 9324586.11 },
		{ name: 'Healthcare', value: 18456890.35 },
		{ name: 'Construction', value: 8436880.27 },
		{ name: 'Others', value: 2000000.0 }
	];

	let chart;
    
	onMount(async () => {
		if (browser) {
			const ApexCharts = (await import('apexcharts')).default;
			const series = data.map((item) => item.value);

			chart = new ApexCharts(document.querySelector('#sector-chart'), {
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
	<div id="sector-chart"></div>
{:else}
	<p>Chart loading...</p>
{/if}
