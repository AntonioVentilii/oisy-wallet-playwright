<script lang="ts">
	import type { Snippet } from 'svelte';
	import { i18n } from '$lib/stores/i18n.store';
	import { replaceOisyPlaceholders } from '$lib/utils/i18n.utils';

	interface Props {
		noUnderline?: boolean;
		testId?: string;
		icon?: Snippet;
	}

	let { noUnderline = false, testId, icon }: Props = $props();

	const handleClick = () => {};
</script>

<a
	class="flex items-center gap-1"
	class:no-underline={noUnderline}
	aria-label={replaceOisyPlaceholders($i18n.license_agreement.alt.license_agreement)}
	data-tid={testId}
	href="/license-agreement"
	onclick={handleClick}
	target="_blank"
>
	{$i18n.license_agreement.text.license_agreement}

	{@render icon?.()}
</a>
