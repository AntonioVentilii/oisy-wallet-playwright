<script lang="ts">
	import { IconUser, Popover } from '@dfinity/gix-components';
	import AboutWhyOisy from '$lib/components/about/AboutWhyOisy.svelte';
	import ButtonAuthenticateWithHelp from '$lib/components/auth/ButtonAuthenticateWithHelp.svelte';
	import MenuLanguageSelector from '$lib/components/core/MenuLanguageSelector.svelte';
	import DocumentationLink from '$lib/components/navigation/DocumentationLink.svelte';
	import SupportLink from '$lib/components/navigation/SupportLink.svelte';
	import ButtonIcon from '$lib/components/ui/ButtonIcon.svelte';
	import Hr from '$lib/components/ui/Hr.svelte';
	import { USER_MENU_ROUTE } from '$lib/constants/analytics.contants';
	import {
		NAVIGATION_MENU_BUTTON,
		NAVIGATION_MENU,
		NAVIGATION_MENU_SUPPORT_BUTTON,
		NAVIGATION_MENU_DOC_BUTTON
	} from '$lib/constants/test-ids.constants';
	import { authNotSignedIn } from '$lib/derived/auth.derived';
	import { i18n } from '$lib/stores/i18n.store';

	interface Props {
		visible?: boolean;
	}

	let { visible = $bindable(false) }: Props = $props();

	let button = $state<HTMLButtonElement | undefined>();

	const hidePopover = () => (visible = false);
</script>

<ButtonIcon
	ariaLabel={$i18n.navigation.alt.menu}
	colorStyle="tertiary-alt"
	link={false}
	onclick={() => (visible = true)}
	testId={NAVIGATION_MENU_BUTTON}
	bind:button
>
	{#snippet icon()}
		<IconUser size="24" />
	{/snippet}
	{$i18n.navigation.alt.menu}
</ButtonIcon>

<Popover anchor={button} direction="rtl" bind:visible>
	<div
		class="mb-1 flex max-w-80 flex-col gap-1"
		data-tid={NAVIGATION_MENU}
		onclick={hidePopover}
		role="none"
	>
		{#if $authNotSignedIn}
			<span class="mb-2 text-center">
				<ButtonAuthenticateWithHelp fullWidth needHelpLink={false} />
			</span>
			<Hr />

			<AboutWhyOisy
				asMenuItem
				asMenuItemCondensed
				onIcOpenAboutModal={hidePopover}
				trackEventSource={USER_MENU_ROUTE}
			/>

			<DocumentationLink
				asMenuItem
				asMenuItemCondensed
				testId={NAVIGATION_MENU_DOC_BUTTON}
				trackEventSource={USER_MENU_ROUTE}
			/>

			<SupportLink asMenuItem asMenuItemCondensed testId={NAVIGATION_MENU_SUPPORT_BUTTON} />
		{/if}
	</div>

	<div class="flex max-w-80 flex-col gap-5 py-5">
		<MenuLanguageSelector />
	</div>
</Popover>
