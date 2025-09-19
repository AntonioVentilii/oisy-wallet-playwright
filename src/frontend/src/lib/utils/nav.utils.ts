import { AppPath, ROUTE_ID_GROUP_APP } from '$lib/constants/routes.constants';
import { nonNullish } from '@dfinity/utils';
import type { Page } from '@sveltejs/kit';

const normalizePath = (s: string | null) =>
	nonNullish(s) ? (s.endsWith('/') ? s : `${s}/`) : null;

export const isTokensPath = (path: string | null) =>
	normalizePath(path) === `${ROUTE_ID_GROUP_APP}${AppPath.Tokens}`;

// The page of the link for WalletConnect is the same as the page where we show the Tokens list
export const isRouteTokens = ({ route: { id } }: Page): boolean => isTokensPath(id);

export interface RouteParams {}

export const loadRouteParams = (): RouteParams => ({});
