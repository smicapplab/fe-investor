<script lang="ts">
	import Menu from 'lucide-svelte/icons/menu';
	import Package2 from 'lucide-svelte/icons/package-2';
	import Search from 'lucide-svelte/icons/search';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import { assets } from '$app/paths';
	import Koredor from '$lib/components/ui/icons/koredor.svelte';
	import KLogo from '$lib/components/ui/icons/k-logo.svelte';
	import Footer from '$lib/components/ui/layout/footer.svelte';
</script>

<div class="flex flex-col w-full min-h-screen">
	<header class="sticky top-0 flex items-center h-16 gap-4 px-4 border-b bg-background md:px-6">
		<nav
			class="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"
		>
			<a href="##" class="items-center hidden gap-2 md:flex">
				<KLogo />
			</a>
			<a href="##" class="transition-colors text-foreground hover:text-foreground"> Dashboard </a>
			<a href="##" class="transition-colors text-muted-foreground hover:text-foreground"> Trade </a>
			<a href="##" class="transition-colors text-muted-foreground hover:text-foreground">
				Research/Analytics
			</a>
		</nav>
		<Sheet.Root>
			<Sheet.Trigger asChild let:builder>
				<Button variant="outline" size="icon" class="shrink-0 md:hidden" builders={[builder]}>
					<Menu class="w-5 h-5" />
					<span class="sr-only">Toggle navigation menu</span>
				</Button>
			</Sheet.Trigger>
			<Sheet.Content side="left">
				<nav class="grid gap-6 text-lg font-medium">
					<a href="##" class="flex items-center gap-2 text-lg font-semibold">
						<img src="{assets}/images/koredor.png" alt="Koredor Logo" class="w-auto h-10" />
					</a>
					<a href="##" class="hover:text-foreground"> Dashboard </a>
					<a href="##" class="text-muted-foreground hover:text-foreground"> Trade </a>
					<a href="##" class="text-muted-foreground hover:text-foreground"> Products </a>
					<a href="##" class="text-muted-foreground hover:text-foreground"> Customers </a>
					<a href="##" class="text-muted-foreground hover:text-foreground"> Analytics </a>
				</nav>
			</Sheet.Content>
		</Sheet.Root>
		<div class="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
			<form class="flex-1 ml-auto sm:flex-initial">
				<div class="relative">
					<Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
					<Input
						type="search"
						placeholder="Search stocks..."
						class="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
					/>
				</div>
			</form>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger asChild let:builder>
					<Button builders={[builder]} variant="secondary" size="icon" class="rounded-full">
						<Avatar.Root class="flex h-9 w-9">
							<Avatar.Image src="{assets}/images/placeholder-profile.png" alt="Avatar" />
							<Avatar.Fallback>OM</Avatar.Fallback>
						</Avatar.Root>
						<span class="sr-only">Toggle user menu</span>
					</Button>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content align="end">
					<DropdownMenu.Label>My Account</DropdownMenu.Label>
					<DropdownMenu.Separator />
					<DropdownMenu.Item>Settings</DropdownMenu.Item>
					<DropdownMenu.Item>Support</DropdownMenu.Item>
					<DropdownMenu.Separator />
					<DropdownMenu.Item>Logout</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	</header>
	<slot></slot>
	<Footer />
</div>
