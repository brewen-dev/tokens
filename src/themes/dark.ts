import * as colors from '../colors';
import { createMetaTheme, createMetaThemePartial } from './utils';

export const metaThemeDarkPartial = createMetaThemePartial({
  color: {
    'color-bg': {
      value: colors.gray[12],
    },
    'color-bg-inverse': {
      value: colors.gray[6],
    },
    'color-bg-surface': {
      value: colors.gray[16],
    },
    'color-bg-surface-hover': {
      value: colors.gray[14],
    },
    'color-bg-surface-active': {
      value: colors.gray[13],
    },
    'color-bg-surface-selected': {
      value: colors.gray[12],
    },
    'color-bg-surface-disabled': {
      value: colors.whiteAlpha[5],
    },
    'color-bg-surface-secondary': {
      value: colors.gray[14],
    },
    'color-bg-surface-secondary-hover': {
      value: colors.gray[12],
    },
    'color-bg-surface-secondary-active': {
      value: colors.gray[11],
    },
    'color-bg-surface-secondary-selected': {
      value: colors.gray[11],
    },
    'color-bg-surface-tertiary': {
      value: colors.gray[13],
    },
    'color-bg-surface-tertiary-hover': {
      value: colors.gray[11],
    },
    'color-bg-surface-tertiary-active': {
      value: colors.gray[10],
    },
    'color-bg-surface-brand': {
      value: colors.vivid[8],
    },
    'color-bg-surface-brand-hover': {
      value: colors.vivid[9],
    },
    'color-bg-surface-brand-active': {
      value: colors.vivid[10],
    },
    'color-bg-surface-brand-selected': {
      value: colors.vivid[10],
    },
    'color-bg-surface-info': {
      value: colors.azure[12],
    },
    'color-bg-surface-info-hover': {
      value: colors.azure[11],
    },
    'color-bg-surface-info-active': {
      value: colors.azure[10],
    },
    'color-bg-surface-success': {
      value: colors.green[13],
    },
    'color-bg-surface-success-hover': {
      value: colors.green[11],
    },
    'color-bg-surface-success-active': {
      value: colors.green[10],
    },
    'color-bg-surface-caution': {
      value: colors.yellow[13],
    },
    'color-bg-surface-caution-hover': {
      value: colors.yellow[11],
    },
    'color-bg-surface-caution-active': {
      value: colors.yellow[10],
    },
    'color-bg-surface-warning': {
      value: colors.orange[13],
    },
    'color-bg-surface-warning-hover': {
      value: colors.orange[11],
    },
    'color-bg-surface-warning-active': {
      value: colors.orange[10],
    },
    'color-bg-surface-critical': {
      value: colors.red[13],
    },
    'color-bg-surface-critical-hover': {
      value: colors.red[11],
    },
    'color-bg-surface-critical-active': {
      value: colors.red[10],
    },
    'color-bg-surface-emphasis': {
      value: colors.blue[13],
    },
    'color-bg-surface-emphasis-hover': {
      value: colors.blue[11],
    },
    'color-bg-surface-emphasis-active': {
      value: colors.blue[10],
    },
    'color-bg-surface-inverse': {
      value: colors.gray[1],
    },
    'color-bg-surface-transparent': {
      value: colors.whiteAlpha[1],
    },
    'color-bg-fill': {
      value: colors.gray[16],
    },
    'color-bg-fill-hover': {
      value: colors.gray[14],
    },
    'color-bg-fill-active': {
      value: colors.gray[13],
    },
    'color-bg-fill-selected': {
      value: colors.gray[7],
    },
    'color-bg-fill-disabled': {
      value: colors.whiteAlpha[5],
    },
    'color-bg-fill-secondary': {
      value: colors.gray[12],
    },
    'color-bg-fill-secondary-hover': {
      value: colors.gray[11],
    },
    'color-bg-fill-secondary-active': {
      value: colors.gray[10],
    },
    'color-bg-fill-tertiary': {
      value: colors.gray[10],
    },
    'color-bg-fill-tertiary-hover': {
      value: colors.gray[9],
    },
    'color-bg-fill-tertiary-active': {
      value: colors.gray[8],
    },
    'color-bg-fill-brand': {
      value: colors.vivid[7],
    },
    'color-bg-fill-brand-hover': {
      value: colors.vivid[6],
    },
    'color-bg-fill-brand-active': {
      value: colors.vivid[6],
    },
    'color-bg-fill-brand-selected': {
      value: colors.vivid[6],
    },
    'color-bg-fill-brand-disabled': {
      value: colors.vividAlpha[5],
    },
    'color-bg-fill-info': {
      value: colors.azure[7],
    },
    'color-bg-fill-info-hover': {
      value: colors.azure[6],
    },
    'color-bg-fill-info-active': {
      value: colors.azure[5],
    },
    'color-bg-fill-info-secondary': {
      value: colors.azure[12],
    },
    'color-bg-fill-success': {
      value: colors.green[7],
    },
    'color-bg-fill-success-hover': {
      value: colors.green[6],
    },
    'color-bg-fill-success-active': {
      value: colors.green[5],
    },
    'color-bg-fill-success-secondary': {
      value: colors.green[13],
    },
    'color-bg-fill-warning': {
      value: colors.orange[11],
    },
    'color-bg-fill-warning-hover': {
      value: colors.orange[10],
    },
    'color-bg-fill-warning-active': {
      value: colors.orange[9],
    },
    'color-bg-fill-warning-secondary': {
      value: colors.orange[13],
    },
    'color-bg-fill-caution': {
      value: colors.yellow[10],
    },
    'color-bg-fill-caution-hover': {
      value: colors.yellow[9],
    },
    'color-bg-fill-caution-active': {
      value: colors.yellow[8],
    },
    'color-bg-fill-caution-secondary': {
      value: colors.yellow[13],
    },
    'color-bg-fill-critical': {
      value: colors.red[7],
    },
    'color-bg-fill-critical-hover': {
      value: colors.red[6],
    },
    'color-bg-fill-critical-active': {
      value: colors.red[5],
    },
    'color-bg-fill-critical-selected': {
      value: colors.red[5],
    },

    //TODO: Add the rest of the colors
  },
});

export const metaThemeDark = createMetaTheme(metaThemeDarkPartial);
