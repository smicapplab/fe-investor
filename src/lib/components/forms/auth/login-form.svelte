<script>
	import { cn } from '$lib/utils';
	import { superForm } from 'sveltekit-superforms';
	import { AuthSocial } from '$lib/components/ui/auth-social';
	import { Divider } from '$lib/components/ui/divider';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { loginFormSchema } from '$lib/schemas/profile';
	import * as Form from '$lib/components/ui/form';
	import Label from '$lib/components/ui/label/label.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { goto } from '$app/navigation';
	import { Input } from '$lib/components/ui/input';
	import { Icons } from '$lib/components/ui/icons';

	let className = "";
	export { className as class };
	export let isLoading = false;
	export let showPassword = false;

	let data = $$props;
	const form = superForm(data, {
		validators: zodClient(loginFormSchema),
		onSubmit: () => {
			isLoading = true;
		},
		onResult: (result) => {
			isLoading = false;
			const { result: formResult } = result;
			console.log(formResult);
		}
	});

	const { form: formData, enhance } = form;

	const togglePasswordVisibility = () => {
		showPassword = !showPassword;
	};
</script>

<div class={cn('grid gap-6', className)} {...$$restProps}>
	<form method="POST" class="grid gap-2" use:enhance action="?/signInWithEmail">
		<Form.Field {form} name="email">
			<Form.Control let:attrs>
				<Label>Email</Label>
				<Input {...attrs} bind:value={$formData.email} />
			</Form.Control>
			<Form.Description>Email address you used to sign up.</Form.Description>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Field {form} name="password">
			<Form.Control let:attrs>
				<Label>Password</Label>
				<div class="flex items-center w-full max-w-sm space-x-2">
					<Input
						{...attrs}
						bind:value={$formData.password}
						type={showPassword ? 'text' : 'password'}
					/>
					<Button
						type="button"
						class={cn(
							'disabled:pointer-events-none disabled:opacity-50',
							'bg-secondary text-secondary-foreground hover:bg-secondary/80',
							 
						)}
						on:click={togglePasswordVisibility}
					>
						{#if showPassword}
							<Icons.eyeOff />
						{:else}
							<Icons.eye />
						{/if}
					</Button>
				</div>
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Button disabled={isLoading} class="text-white bg-orange-700">
			{#if isLoading}
				<Icons.loaderPinwheel class="animate-spin"/>
			{:else}
				Sign In with Email
			{/if}
		</Form.Button>
		<p class="text-center text-gray-600">
			<button
				on:click={() => goto('/login/forgot-password')}
				class="text-blue-500 underline bg-transparent border-none hover:text-blue-700 focus:outline-none"
			>
				Forgot your password?
			</button>
		</p>
	</form>

	<Divider dividerLabel="Or sign in with" />
	<AuthSocial {isLoading} />
</div>
