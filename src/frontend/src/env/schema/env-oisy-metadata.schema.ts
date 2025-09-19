import * as z from 'zod/v4';

export const OisyMetadataSchema = z.object({
	OISY_SHORT: z.string(),
	OISY_NAME: z.string(),
	OISY_ONELINER: z.string(),
	OISY_DESCRIPTION: z.string(),
	OISY_REPO_URL: z.url(),
	OISY_TWITTER_URL: z.url(),
	OISY_DOCS_URL: z.url()
});
