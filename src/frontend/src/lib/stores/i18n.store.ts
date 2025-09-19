import { Languages } from '$lib/enums/languages';
import en from '$lib/i18n/en.json';
import { getDefaultLang } from '$lib/utils/i18n.utils';
import { get, set } from '$lib/utils/storage.utils';
import { writable, type Readable } from 'svelte/store';

export const enI18n = (): I18n => ({
	...en,
	lang: Languages.ENGLISH
});

const loadLang = (lang: Languages): I18n => {
	switch (lang) {
		default:
			return enI18n();
	}
};

const saveLang = (lang: Languages) => set({ key: 'lang', value: lang });

export interface I18nStore extends Readable<I18n> {
	init: () => void;
	switchLang: (lang: Languages) => void;
}

const initI18n = (): I18nStore => {
	const { subscribe, set } = writable<I18n>(loadLang(getDefaultLang()));

	const switchLang = ({ lang }: { lang: Languages }) => {
		set(loadLang(lang));

		saveLang(lang);
	};

	return {
		subscribe,

		init: () => {
			const lang = get<Languages>({ key: 'lang' }) ?? getDefaultLang();

			if (lang === getDefaultLang()) {
				saveLang(lang);
				// No need to reload the store, store is already initialised with the default
				return;
			}

			switchLang({ lang });
		},

		switchLang: (lang: Languages) => switchLang({ lang })
	};
};

export const i18n = initI18n();
