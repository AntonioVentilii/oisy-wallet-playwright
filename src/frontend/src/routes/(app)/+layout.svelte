<script lang="ts">
	import { isNullish } from '@dfinity/utils';
	import type { Snippet } from 'svelte';
	import { onNavigate } from '$app/navigation';
	import LandingPage from '$lib/components/auth/LandingPage.svelte';
	import Footer from '$lib/components/core/Footer.svelte';
	import Header from '$lib/components/hero/Header.svelte';
	import { authNotSignedIn, authSignedIn } from '$lib/derived/auth.derived';

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

<div class:h-dvh={$authNotSignedIn}>
	<div
		class="relative min-h-[640px] pb-5 md:pb-0 lg:flex lg:h-full lg:flex-col"
		class:flex={$authSignedIn}
		class:flex-col={$authSignedIn}
		class:h-full={$authSignedIn}
		class:md:flex={$authNotSignedIn}
		class:md:flex-col={$authNotSignedIn}
		class:md:h-full={$authNotSignedIn}
		class:overflow-hidden={$authNotSignedIn}
	>
		<Header />

		<LandingPage />

		{@render children()}

		<Footer />
	</div>
</div>
