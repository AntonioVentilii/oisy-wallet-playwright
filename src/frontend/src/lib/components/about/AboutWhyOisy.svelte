<script lang="ts">
	import AboutItem from '$lib/components/about/AboutItem.svelte';
	import IconInfo from '$lib/components/icons/lucide/IconInfo.svelte';
	import { ABOUT_WHY_OISY_BUTTON } from '$lib/constants/test-ids.constants';
	import { i18n } from '$lib/stores/i18n.store';
	import { replaceOisyPlaceholders } from '$lib/utils/i18n.utils';

	interface Props {
		onIcOpenAboutModal?: () => void;
		asMenuItem?: boolean;
		asMenuItemCondensed?: boolean;
	}

	let { onIcOpenAboutModal, asMenuItem = false, asMenuItemCondensed = false }: Props = $props();

	const openModal = () => {
		onIcOpenAboutModal?.();
	};
</script>

<AboutItem {asMenuItem} {asMenuItemCondensed} onClick={openModal} testId={ABOUT_WHY_OISY_BUTTON}>
	{#snippet icon()}
		<IconInfo />
	{/snippet}
	{#snippet label()}
		<span>{replaceOisyPlaceholders($i18n.about.why_oisy.text.label)}</span>
	{/snippet}
</AboutItem>
