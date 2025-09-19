<script lang="ts">
	import { IconGitHub } from '@dfinity/gix-components';
	import { page } from '$app/state';
	import IconTwitter from '$lib/components/icons/IconTwitter.svelte';
	import LicenseLink from '$lib/components/license-agreement/LicenseLink.svelte';
	import PrivacyPolicyLink from '$lib/components/privacy-policy/PrivacyPolicyLink.svelte';
	import TermsOfUseLink from '$lib/components/terms-of-use/TermsOfUseLink.svelte';
	import ExternalLinkIcon from '$lib/components/ui/ExternalLinkIcon.svelte';
	import { OISY_REPO_URL, OISY_TWITTER_URL } from '$lib/constants/oisy.constants';
	import { authNotSignedIn, authSignedIn } from '$lib/derived/auth.derived';
	import { i18n } from '$lib/stores/i18n.store';
	import { replaceOisyPlaceholders } from '$lib/utils/i18n.utils';
	import { isRouteTokens } from '$lib/utils/nav.utils';

	let isHomePage = $derived(isRouteTokens(page));
</script>

<footer
	class="pointer-events-none mx-auto flex w-full max-w-screen-2.5xl flex-1 flex-col items-center justify-end px-4 pt-5 sm:flex-1 sm:grow sm:flex-row sm:items-end sm:justify-between sm:px-8 md:pb-5 md:pt-12 lg:fixed lg:inset-x-0 lg:bottom-0"
	class:md:bottom-0={$authSignedIn}
	class:md:fixed={$authSignedIn}
	class:md:h-md:grid={$authNotSignedIn}
	class:md:h-md:grid-cols-2={$authNotSignedIn}
	class:md:h-md:pr-0={$authNotSignedIn}
	class:md:inset-x-0={$authSignedIn}
	class:pb-24={$authSignedIn}
	class:sm:sticky={$authNotSignedIn}
>
	<div
		class="pointer-events-none flex w-full flex-col items-center justify-between sm:items-end md:flex-row md:gap-4"
		class:sm:flex-row={$authNotSignedIn}
		class:sm:gap-4={$authNotSignedIn}
	>
		<div
			class={`pointer-events-auto flex flex-col items-center gap-4 sm:items-start ${isHomePage ? '' : 'hidden md:flex'}`}
		>
			<div class="flex items-center gap-4">
				<ExternalLinkIcon
					ariaLabel={replaceOisyPlaceholders($i18n.navigation.alt.open_twitter)}
					href={OISY_TWITTER_URL}
				>
					<IconTwitter />
				</ExternalLinkIcon>

				<ExternalLinkIcon
					ariaLabel={$i18n.navigation.text.source_code_on_github}
					href={OISY_REPO_URL}
				>
					<IconGitHub />
				</ExternalLinkIcon>
			</div>
			{#if $authNotSignedIn}
				<div class="mb-2 flex gap-2 text-nowrap text-xs text-tertiary">
					<TermsOfUseLink />
					<PrivacyPolicyLink />
					<LicenseLink />
				</div>
			{/if}
		</div>
	</div>
</footer>
