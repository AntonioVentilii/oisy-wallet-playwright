import metadata from '$env/oisy.metadata.json';
import { OisyMetadataSchema } from '$env/schema/env-oisy-metadata.schema';
import { safeParse } from '$lib/validation/utils.validation';

export const {
	OISY_SHORT,
	OISY_NAME,
	OISY_ONELINER,
	OISY_DESCRIPTION,
	OISY_REPO_URL,
	OISY_TWITTER_URL,
	OISY_DOCS_URL
} = safeParse({
	schema: OisyMetadataSchema,
	value: metadata,
	fallback: {
		OISY_SHORT: '',
		OISY_NAME: '',
		OISY_ONELINER: '',
		OISY_DESCRIPTION: '',
		OISY_REPO_URL: '',
		OISY_TWITTER_URL: '',
		OISY_DOCS_URL: ''
	}
});

export const OISY_URL = VITE_OISY_DOMAIN;
