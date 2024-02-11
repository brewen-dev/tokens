import {
  getMetaThemeDecls,
  getMetaTokenGroupDecls,
  getKeyframes,
} from '../scripts/toStyleSheet';
import { describe, expect, it } from 'bun:test';

const mockTokenGroup = {
  'token-name-1': {
    value: 'valueA',
  },
  'token-name-2': {
    value: 'valueB',
  },
};

const mockMotionTokenGroup = {
  'motion-token-1': {
    value: 'valueA',
  },
  'motion-token-2': {
    value: 'valueB',
  },
  'motion-keyframes-token-1': {
    value: 'valueC',
  },
  'motion-keyframes-token-2': {
    value: 'valueD',
  },
};
const mockTheme = {
  tokenGroupName: mockTokenGroup,
  motion: mockMotionTokenGroup,
};

const expectedTokenGroupDecls =
  '--b-token-name-1:valueA;--b-token-name-2:valueB;';

const expectedMotionTokenGroupDecls =
  '--b-motion-token-1:valueA;--b-motion-token-2:valueB;--b-motion-keyframes-token-1:b-motion-keyframes-token-1;--b-motion-keyframes-token-2:b-motion-keyframes-token-2;';

const expectedThemeDecls = `${expectedTokenGroupDecls}${expectedMotionTokenGroupDecls}`;

const expectedMotionKeyframes =
  '@keyframes b-motion-keyframes-token-1valueC@keyframes b-motion-keyframes-token-2valueD';

describe('getMetaTokenGroupDecls', () => {
  it('creates a string of CSS declarations', () => {
    const tokenGroupDecls = getMetaTokenGroupDecls(mockTokenGroup);

    expect(tokenGroupDecls).toBe(expectedTokenGroupDecls);
  });

  it('creates a string of CSS declarations and keyframes at-rules from motion tokens', () => {
    const tokenGroupDecls = getMetaTokenGroupDecls(mockMotionTokenGroup);

    expect(tokenGroupDecls).toBe(expectedMotionTokenGroupDecls);
  });
});

describe('getKeyframes', () => {
  it('creates a string of keyframes at-rules', () => {
    const keyframes = getKeyframes(mockMotionTokenGroup);

    expect(keyframes).toBe(expectedMotionKeyframes);
  });
});

describe('getMetaThemeDecls', () => {
  it('creates a string of CSS declarations', () => {
    const themeDecls = getMetaThemeDecls(mockTheme);

    expect(themeDecls).toBe(expectedThemeDecls);
  });
});
