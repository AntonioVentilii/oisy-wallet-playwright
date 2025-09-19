export enum AppPath {
	Tokens = '/',
	WalletConnect = '/wc/'
}

// SvelteKit uses the group defined in src/routes/(app)/ as part of the routeId. It also prefixes it with /.
export const ROUTE_ID_GROUP_APP = '/(app)';
