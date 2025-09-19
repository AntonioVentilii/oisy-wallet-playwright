import type { PostMessage, PostMessageDataRequest } from '$lib/types/post-message';
import { onAuthMessage } from '$lib/workers/auth.worker';
import { onExchangeMessage } from '$lib/workers/exchange.worker';

onmessage = async (msg: MessageEvent<PostMessage<PostMessageDataRequest>>) => {
	await Promise.allSettled([onAuthMessage(msg), onExchangeMessage(msg)]);
};
