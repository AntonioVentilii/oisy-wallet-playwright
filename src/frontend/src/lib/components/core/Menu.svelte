<script lang="ts">
	import { IconUser } from '@dfinity/gix-components';
	import ButtonIcon from '$lib/components/ui/ButtonIcon.svelte';
	import { NAVIGATION_MENU_BUTTON } from '$lib/constants/test-ids.constants';
	import { i18n } from '$lib/stores/i18n.store';

	interface Props {
		visible?: boolean;
	}

	let { visible = $bindable(false) }: Props = $props();

	let button = $state<HTMLButtonElement | undefined>();
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
