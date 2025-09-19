import { loadRouteParams, type RouteParams } from '$lib/utils/nav.utils';
import type { PageLoad } from './$types';

export const load: PageLoad = (): RouteParams => loadRouteParams();
