import { RuleSetRule } from 'webpack';

import { STATIC_CONTENT_PATH } from '../constants';
import { TLoader } from '../types';

const svgRegex: RegExp = /\.svg$/;

const universalLoader: RuleSetRule = {
  test: svgRegex,
  oneOf: [
    {
      type: 'asset/resource',
      resourceQuery: /url/,
    },
    {
      type: 'asset/inline',
      resourceQuery: /base64/,
    },
    {
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    },
  ],
  generator: {
    filename: `${STATIC_CONTENT_PATH}images/[name]-[hash][ext]}`,
  },
};

export const svgLoader: TLoader = {
  client: universalLoader,
  server: universalLoader,
};
