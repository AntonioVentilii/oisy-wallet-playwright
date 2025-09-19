<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import { i18n } from '$lib/stores/i18n.store';

	export let styleClass = '';
	export let testId: string | undefined = undefined;

	const onClick = () => {};
</script>

<span class={`${styleClass} flex flex-row justify-center gap-1 md:justify-start`} data-tid={testId}>
	{$i18n.auth.help.text.need_help}
	<Button inlineLink link onclick={onClick}>{$i18n.auth.help.text.sign_in}</Button>
</span>
