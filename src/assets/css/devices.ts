export const sizes = {
  mobile: '375px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1365px',
  smallTablet: '600px',
};

export default {
  sizes,
  mobile: `(max-width: ${sizes.mobile})`,
  smallTablet: `(max-width: ${sizes.smallTablet})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptop: `(max-width: ${sizes.laptop})`,
  desktop: `(max-width: ${sizes.desktop})`,
};
