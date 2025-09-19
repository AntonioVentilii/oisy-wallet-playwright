import { parseBoolEnvVar } from '$lib/utils/env.utils';

export const MODE = VITE_DFX_NETWORK;
export const LOCAL = MODE === 'local';
export const TEST_FE = MODE.startsWith('test_fe_');
export const AUDIT = MODE === 'audit';
export const E2E = MODE === 'e2e';
export const STAGING = MODE === 'staging' || TEST_FE || AUDIT || E2E;
export const BETA = MODE === 'beta';

export const TEST = parseBoolEnvVar(import.meta.env.TEST);

export const REPLICA_HOST = LOCAL ? 'http://localhost:4943/' : 'https://icp-api.io';

export const INTERNET_IDENTITY_CANISTER_ID = LOCAL
	? import.meta.env.VITE_LOCAL_INTERNET_IDENTITY_CANISTER_ID
	: undefined;

// How long the delegation identity should remain valid?
// e.g. BigInt(60 * 60 * 1000 * 1000 * 1000) = 1 hour in nanoseconds
export const AUTH_MAX_TIME_TO_LIVE = BigInt(60 * 60 * 1000 * 1000 * 1000);

export const AUTH_ALTERNATIVE_ORIGINS = import.meta.env.VITE_AUTH_ALTERNATIVE_ORIGINS;
export const AUTH_DERIVATION_ORIGIN = BETA
	? 'https://oisy.com'
	: STAGING
		? 'https://tewsx-xaaaa-aaaad-aadia-cai.icp0.io'
		: undefined;

export const AUTH_POPUP_WIDTH = 576;
export const AUTH_POPUP_HEIGHT = 625;

export const ZERO = 0n;
