<script>
	import { Icons } from '$lib/components/ui/icons';
	import Button from '$lib/components/ui/button/button.svelte';
	export let isLoading = false;
</script>

<Button
	variant="outline"
	type="submit"
	disabled={isLoading}
	formaction="?/loginWithProvider&provider=github"
	class="font-bold text-white bg-gray-900 rounded hover:bg-black hover:text-gray-200"
>
	<Icons.gitHub class="w-5 h-5" />
	<span class="ml-3">Github</span>
</Button>
