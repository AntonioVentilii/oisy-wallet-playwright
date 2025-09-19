import { derived, type Readable } from 'svelte/store';

export const authSignedIn: Readable<boolean> = derived([], () => false);

export const authNotSignedIn: Readable<boolean> = derived(
	authSignedIn,
	($authSignedIn) => !$authSignedIn
);
