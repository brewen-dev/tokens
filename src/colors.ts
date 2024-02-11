type ColorScale =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '13'
  | '14'
  | '15'
  | '16';

type Color = {
  [Scale in ColorScale]: `rgba(${number}, ${number}, ${number}, 1)`;
};

type ColorAlpha = {
  [Scale in ColorScale]: `rgba(${number}, ${number}, ${number}, ${number})`;
};

export const gray: Color = {
  1: 'rgba(255, 255, 255, 1)',
  2: 'rgba(253, 253, 253, 1)',
  3: 'rgba(250, 250, 250, 1)',
  4: 'rgba(247, 247, 247, 1)',
  5: 'rgba(243, 243, 243, 1)',
  6: 'rgba(241, 241, 241, 1)',
  7: 'rgba(235, 235, 235, 1)',
  8: 'rgba(227, 227, 227, 1)',
  9: 'rgba(212, 212, 212, 1)',
  10: 'rgba(204, 204, 204, 1)',
  11: 'rgba(181, 181, 181, 1)',
  12: 'rgba(138, 138, 138, 1)',
  13: 'rgba(97, 97, 97, 1)',
  14: 'rgba(74, 74, 74, 1)',
  15: 'rgba(48, 48, 48, 1)',
  16: 'rgba(26, 26, 26, 1)',
};

export const azure: Color = {
  1: 'rgba(251, 253, 255, 1)',
  2: 'rgba(242, 249, 255, 1)',
  3: 'rgba(234, 244, 255, 1)',
  4: 'rgba(224, 240, 255, 1)',
  5: 'rgba(213, 235, 255, 1)',
  6: 'rgba(202, 230, 255, 1)',
  7: 'rgba(192, 225, 255, 1)',
  8: 'rgba(168, 216, 255, 1)',
  9: 'rgba(145, 208, 255, 1)',
  10: 'rgba(81, 192, 255, 1)',
  11: 'rgba(0, 148, 213, 1)',
  12: 'rgba(0, 124, 180, 1)',
  13: 'rgba(0, 103, 155, 1)',
  14: 'rgba(0, 82, 124, 1)',
  15: 'rgba(0, 58, 90, 1)',
  16: 'rgba(0, 33, 51, 1)',
};

export const blue: Color = {
  1: 'rgba(252, 253, 255, 1)',
  2: 'rgba(246, 248, 255, 1)',
  3: 'rgba(240, 242, 255, 1)',
  4: 'rgba(234, 237, 255, 1)',
  5: 'rgba(226, 231, 255, 1)',
  6: 'rgba(219, 225, 255, 1)',
  7: 'rgba(213, 220, 255, 1)',
  8: 'rgba(197, 208, 255, 1)',
  9: 'rgba(186, 199, 255, 1)',
  10: 'rgba(151, 173, 255, 1)',
  11: 'rgba(65, 136, 255, 1)',
  12: 'rgba(0, 113, 233, 1)',
  13: 'rgba(0, 91, 211, 1)',
  14: 'rgba(0, 66, 153, 1)',
  15: 'rgba(0, 46, 106, 1)',
  16: 'rgba(0, 22, 51, 1)',
};

export const cyan: Color = {
  1: 'rgba(250, 255, 254, 1)',
  2: 'rgba(231, 252, 248, 1)',
  3: 'rgba(215, 251, 243, 1)',
  4: 'rgba(192, 249, 239, 1)',
  5: 'rgba(165, 247, 233, 1)',
  6: 'rgba(144, 244, 227, 1)',
  7: 'rgba(146, 237, 222, 1)',
  8: 'rgba(130, 227, 209, 1)',
  9: 'rgba(116, 219, 200, 1)',
  10: 'rgba(23, 199, 167, 1)',
  11: 'rgba(19, 163, 137, 1)',
  12: 'rgba(14, 132, 112, 1)',
  13: 'rgba(8, 107, 90, 1)',
  14: 'rgba(9, 83, 70, 1)',
  15: 'rgba(6, 56, 47, 1)',
  16: 'rgba(5, 36, 30, 1)',
};

export const green: Color = {
  1: 'rgba(248, 255, 251, 1)',
  2: 'rgba(227, 255, 237, 1)',
  3: 'rgba(205, 254, 225, 1)',
  4: 'rgba(180, 254, 210, 1)',
  5: 'rgba(146, 254, 194, 1)',
  6: 'rgba(99, 253, 176, 1)',
  7: 'rgba(56, 250, 163, 1)',
  8: 'rgba(53, 238, 155, 1)',
  9: 'rgba(50, 225, 147, 1)',
  10: 'rgba(46, 211, 137, 1)',
  11: 'rgba(50, 160, 110, 1)',
  12: 'rgba(41, 132, 90, 1)',
  13: 'rgba(19, 111, 69, 1)',
  14: 'rgba(12, 81, 50, 1)',
  15: 'rgba(8, 61, 37, 1)',
  16: 'rgba(9, 42, 27, 1)',
};

export const lime: Color = {
  1: 'rgba(250, 255, 250, 1)',
  2: 'rgba(228, 255, 229, 1)',
  3: 'rgba(208, 255, 209, 1)',
  4: 'rgba(187, 254, 190, 1)',
  5: 'rgba(157, 254, 160, 1)',
  6: 'rgba(119, 254, 122, 1)',
  7: 'rgba(56, 254, 62, 1)',
  8: 'rgba(40, 242, 47, 1)',
  9: 'rgba(37, 232, 43, 1)',
  10: 'rgba(32, 207, 39, 1)',
  11: 'rgba(24, 168, 29, 1)',
  12: 'rgba(17, 135, 21, 1)',
  13: 'rgba(12, 113, 15, 1)',
  14: 'rgba(11, 85, 13, 1)',
  15: 'rgba(3, 61, 5, 1)',
  16: 'rgba(3, 33, 4, 1)',
};

export const magenta: Color = {
  1: 'rgba(255, 253, 255, 1)',
  2: 'rgba(255, 245, 255, 1)',
  3: 'rgba(253, 239, 253, 1)',
  4: 'rgba(254, 231, 254, 1)',
  5: 'rgba(252, 223, 252, 1)',
  6: 'rgba(251, 215, 251, 1)',
  7: 'rgba(251, 207, 251, 1)',
  8: 'rgba(249, 190, 249, 1)',
  9: 'rgba(248, 177, 248, 1)',
  10: 'rgba(246, 141, 246, 1)',
  11: 'rgba(225, 86, 225, 1)',
  12: 'rgba(197, 48, 197, 1)',
  13: 'rgba(159, 38, 159, 1)',
  14: 'rgba(121, 26, 121, 1)',
  15: 'rgba(86, 16, 86, 1)',
  16: 'rgba(52, 6, 52, 1)',
};

export const orange: Color = {
  1: 'rgba(255, 253, 250, 1)',
  2: 'rgba(255, 247, 238, 1)',
  3: 'rgba(255, 241, 227, 1)',
  4: 'rgba(255, 235, 213, 1)',
  5: 'rgba(255, 228, 198, 1)',
  6: 'rgba(255, 221, 182, 1)',
  7: 'rgba(255, 214, 164, 1)',
  8: 'rgba(255, 200, 121, 1)',
  9: 'rgba(255, 184, 0, 1)',
  10: 'rgba(229, 165, 0, 1)',
  11: 'rgba(178, 132, 0, 1)',
  12: 'rgba(149, 111, 0, 1)',
  13: 'rgba(124, 88, 0, 1)',
  14: 'rgba(94, 66, 0, 1)',
  15: 'rgba(65, 45, 0, 1)',
  16: 'rgba(37, 26, 0, 1)',
};

export const purple: Color = {
  1: 'rgba(253, 253, 255, 1)',
  2: 'rgba(248, 247, 255, 1)',
  3: 'rgba(243, 241, 255, 1)',
  4: 'rgba(239, 236, 255, 1)',
  5: 'rgba(233, 229, 255, 1)',
  6: 'rgba(228, 222, 255, 1)',
  7: 'rgba(223, 217, 255, 1)',
  8: 'rgba(212, 204, 255, 1)',
  9: 'rgba(199, 188, 255, 1)',
  10: 'rgba(170, 149, 255, 1)',
  11: 'rgba(148, 116, 255, 1)',
  12: 'rgba(128, 81, 255, 1)',
  13: 'rgba(113, 38, 255, 1)',
  14: 'rgba(87, 0, 209, 1)',
  15: 'rgba(59, 0, 147, 1)',
  16: 'rgba(28, 0, 79, 1)',
};

export const red: Color = {
  1: 'rgba(255, 251, 251, 1)',
  2: 'rgba(255, 246, 246, 1)',
  3: 'rgba(255, 237, 236, 1)',
  4: 'rgba(254, 233, 232, 1)',
  5: 'rgba(254, 226, 225, 1)',
  6: 'rgba(254, 218, 217, 1)',
  7: 'rgba(254, 211, 209, 1)',
  8: 'rgba(254, 195, 193, 1)',
  9: 'rgba(253, 176, 172, 1)',
  10: 'rgba(253, 129, 122, 1)',
  11: 'rgba(239, 77, 47, 1)',
  12: 'rgba(229, 28, 0, 1)',
  13: 'rgba(181, 38, 11, 1)',
  14: 'rgba(142, 31, 11, 1)',
  15: 'rgba(95, 21, 7, 1)',
  16: 'rgba(47, 10, 4, 1)',
};

export const rose: Color = {
  1: 'rgba(255, 253, 253, 1)',
  2: 'rgba(255, 246, 248, 1)',
  3: 'rgba(255, 239, 243, 1)',
  4: 'rgba(255, 232, 238, 1)',
  5: 'rgba(255, 225, 232, 1)',
  6: 'rgba(255, 217, 227, 1)',
  7: 'rgba(254, 209, 221, 1)',
  8: 'rgba(254, 193, 210, 1)',
  9: 'rgba(254, 181, 202, 1)',
  10: 'rgba(254, 142, 177, 1)',
  11: 'rgba(253, 75, 146, 1)',
  12: 'rgba(227, 12, 118, 1)',
  13: 'rgba(185, 7, 95, 1)',
  14: 'rgba(141, 4, 72, 1)',
  15: 'rgba(100, 2, 49, 1)',
  16: 'rgba(62, 1, 28, 1)',
};

export const vivid: Color = {
  1: 'rgba(255, 198, 226, 1)',
  2: 'rgba(251, 177, 213, 1)',
  3: 'rgba(247, 155, 199, 1)',
  4: 'rgba(243, 133, 186, 1)',
  5: 'rgba(238, 112, 173, 1)',
  6: 'rgba(234, 90, 159, 1)',
  7: 'rgba(230, 68, 146, 1)',
  8: 'rgba(226, 47, 133, 1)',
  9: 'rgba(221, 25, 119, 1)',
  10: 'rgba(217, 3, 106, 1)',
  11: 'rgba(209, 0, 96, 1)',
  12: 'rgba(218, 12, 129, 1)', // Brand
  13: 'rgba(184, 0, 106, 1)',
  14: 'rgba(150, 0, 83, 1)',
  15: 'rgba(115, 0, 60, 1)',
  16: 'rgba(81, 0, 37, 1)',
}

export const teal: Color = {
  1: 'rgba(248, 255, 254, 1)',
  2: 'rgba(232, 252, 250, 1)',
  3: 'rgba(215, 250, 247, 1)',
  4: 'rgba(195, 247, 242, 1)',
  5: 'rgba(170, 246, 239, 1)',
  6: 'rgba(137, 245, 236, 1)',
  7: 'rgba(112, 240, 229, 1)',
  8: 'rgba(90, 230, 219, 1)',
  9: 'rgba(44, 224, 212, 1)',
  10: 'rgba(30, 199, 188, 1)',
  11: 'rgba(0, 161, 152, 1)',
  12: 'rgba(18, 131, 124, 1)',
  13: 'rgba(12, 106, 100, 1)',
  14: 'rgba(12, 83, 79, 1)',
  15: 'rgba(3, 60, 57, 1)',
  16: 'rgba(6, 44, 41, 1)',
};

export const yellow: Color = {
  1: 'rgba(255, 253, 246, 1)',
  2: 'rgba(255, 248, 219, 1)',
  3: 'rgba(255, 244, 191, 1)',
  4: 'rgba(255, 239, 157, 1)',
  5: 'rgba(255, 235, 120, 1)',
  6: 'rgba(255, 230, 0, 1)',
  7: 'rgba(247, 223, 0, 1)',
  8: 'rgba(234, 211, 0, 1)',
  9: 'rgba(225, 203, 0, 1)',
  10: 'rgba(197, 178, 0, 1)',
  11: 'rgba(153, 138, 0, 1)',
  12: 'rgba(130, 117, 0, 1)',
  13: 'rgba(105, 95, 0, 1)',
  14: 'rgba(79, 71, 0, 1)',
  15: 'rgba(51, 46, 0, 1)',
  16: 'rgba(31, 28, 0, 1)',
};

export const blackAlpha: ColorAlpha = {
  1: 'rgba(0, 0, 0, 0)',
  2: 'rgba(0, 0, 0, 0.01)',
  3: 'rgba(0, 0, 0, 0.02)',
  4: 'rgba(0, 0, 0, 0.03)',
  5: 'rgba(0, 0, 0, 0.05)',
  6: 'rgba(0, 0, 0, 0.06)',
  7: 'rgba(0, 0, 0, 0.08)',
  8: 'rgba(0, 0, 0, 0.11)',
  9: 'rgba(0, 0, 0, 0.17)',
  10: 'rgba(0, 0, 0, 0.20)',
  11: 'rgba(0, 0, 0, 0.29)',
  12: 'rgba(0, 0, 0, 0.46)',
  13: 'rgba(0, 0, 0, 0.62)',
  14: 'rgba(0, 0, 0, 0.71)',
  15: 'rgba(0, 0, 0, 0.81)',
  16: 'rgba(0, 0, 0, 0.90)',
};

export const whiteAlpha: ColorAlpha = {
  1: 'rgba(255, 255, 255, 0)',
  2: 'rgba(255, 255, 255, 0.01)',
  3: 'rgba(255, 255, 255, 0.02)',
  4: 'rgba(255, 255, 255, 0.03)',
  5: 'rgba(255, 255, 255, 0.05)',
  6: 'rgba(255, 255, 255, 0.06)',
  7: 'rgba(255, 255, 255, 0.08)',
  8: 'rgba(255, 255, 255, 0.11)',
  9: 'rgba(255, 255, 255, 0.17)',
  10: 'rgba(255, 255, 255, 0.20)',
  11: 'rgba(255, 255, 255, 0.29)',
  12: 'rgba(255, 255, 255, 0.46)',
  13: 'rgba(255, 255, 255, 0.62)',
  14: 'rgba(255, 255, 255, 0.71)',
  15: 'rgba(255, 255, 255, 0.81)',
  16: 'rgba(255, 255, 255, 0.90)',
};

export const vividAlpha: ColorAlpha = {
  1: 'rgba(218, 12, 129, 0)',
  2: 'rgba(218, 12, 129, 0.01)',
  3: 'rgba(218, 12, 129, 0.02)',
  4: 'rgba(218, 12, 129, 0.03)',
  5: 'rgba(218, 12, 129, 0.05)',
  6: 'rgba(218, 12, 129, 0.06)',
  7: 'rgba(218, 12, 129, 0.08)',
  8: 'rgba(218, 12, 129, 0.11)',
  9: 'rgba(218, 12, 129, 0.17)',
  10: 'rgba(218, 12, 129, 0.20)',
  11: 'rgba(218, 12, 129, 0.29)',
  12: 'rgba(218, 12, 129, 0.46)',
  13: 'rgba(218, 12, 129, 0.62)',
  14: 'rgba(218, 12, 129, 0.71)',
  15: 'rgba(218, 12, 129, 0.81)',
  16: 'rgba(218, 12, 129, 0.90)',
};
