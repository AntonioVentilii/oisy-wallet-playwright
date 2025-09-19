<script lang="ts">
	import LandingPage from '$lib/components/auth/LandingPage.svelte';
</script>

<!--{#if $authNotSignedIn}-->
<!--	<LandingPage />-->
<!--{:else}-->
<!--	<div class="md:block md:overflow-y-auto" in:fade>-->
<!--		{@render children?.()}-->
<!--	</div>-->
<!--{/if}-->

<LandingPage />
