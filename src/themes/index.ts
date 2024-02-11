import type { MetaThemePartials, MetaThemes } from './types';
import { createMetaTheme } from './utils';
import { themeNameDefault } from './constants';

import { metaThemeLight, metaThemeLightPartial } from './light';
//import { metaThemeDark, metaThemeDarkPartial } from './dark';

export { createMetaTheme } from './utils';

export const metaThemes: MetaThemes = {
  light: metaThemeLight,
  //dark: metaThemeDark,
};

export const metaThemePartials: MetaThemePartials = {
  light: metaThemeLightPartial,
  //dark: metaThemeDarkPartial,
};

export const metaThemeDefaultPartial = metaThemePartials[themeNameDefault];

export const metaThemeDefault = createMetaTheme(metaThemeDefaultPartial);
