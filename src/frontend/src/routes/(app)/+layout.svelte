<script lang="ts">
	import { isNullish, nonNullish } from '@dfinity/utils';
	import type { Snippet } from 'svelte';
	import { onNavigate } from '$app/navigation';
    import LandingPage from '$lib/components/auth/LandingPage.svelte';
	import { page } from '$app/state';
	import LockPage from '$lib/components/auth/LockPage.svelte';
	import Footer from '$lib/components/core/Footer.svelte';
	import Header from '$lib/components/hero/Header.svelte';
	import { authNotSignedIn, authSignedIn } from '$lib/derived/auth.derived';
	import { isAuthLocked } from '$lib/derived/locked.derived';
	import { routeCollection } from '$lib/derived/nav.derived';
	import { pageNonFungibleToken, pageToken } from '$lib/derived/page-token.derived';
	import { token } from '$lib/stores/token.store';
	import { isRouteNfts, isRouteTokens, isRouteTransactions } from '$lib/utils/nav.utils';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();

	let tokensRoute = $derived(isRouteTokens(page));

	let nftsRoute = $derived(isRouteNfts(page));
	let nftsCollectionRoute = $derived(isRouteNfts(page) && nonNullish($routeCollection));

	let transactionsRoute = $derived(isRouteTransactions(page));

	let showHero = $derived((tokensRoute || nftsRoute || transactionsRoute) && !nftsCollectionRoute);

	$effect(() => {
		token.set(nftsCollectionRoute ? ($pageNonFungibleToken ?? $pageToken) : $pageToken); // we could be on the nfts page without a pageNonFungibleToken set
	});

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

{#if $isAuthLocked}
	<LockPage />
{:else}
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
{/if}
