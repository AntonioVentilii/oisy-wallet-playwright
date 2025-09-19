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
	aria-label={replaceOisyPlaceholders($i18n.terms_of_use.alt.terms_of_use)}
	data-tid={testId}
	href="/terms-of-use"
	onclick={handleClick}
	target="_blank"
>
	{$i18n.terms_of_use.text.terms_of_use}

	{@render icon?.()}
</a>
