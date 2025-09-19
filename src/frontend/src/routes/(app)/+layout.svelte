<script lang="ts">
	import { isNullish } from '@dfinity/utils';
	import type { Snippet } from 'svelte';
	import { onNavigate } from '$app/navigation';
	import LandingPage from '$lib/components/auth/LandingPage.svelte';
	import Footer from '$lib/components/core/Footer.svelte';
	import Header from '$lib/components/hero/Header.svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();

	// Source: https://svelte.dev/blog/view-transitions
	onNavigate((navigation) => {
		if (isNullish(document.startViewTransition)) {
			return;
		}

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<div class="h-dvh">
	<div
		class="relative md:flex md:flex-col overflow-hidden md:h-full min-h-[640px] pb-5 md:pb-0 lg:flex lg:h-full lg:flex-col"
	>
		<Header />

		<LandingPage />

		{@render children()}

		<Footer />
	</div>
</div>
