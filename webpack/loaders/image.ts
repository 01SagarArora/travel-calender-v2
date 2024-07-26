import { RuleSetRule } from 'webpack';

import { STATIC_CONTENT_PATH } from '../constants';
import { TLoader } from '../types';

const imageRegex: RegExp = /\.(png|jpg|jpeg|gif)$/;

const universalLoader: RuleSetRule = {
  test: imageRegex,
  type: 'asset/resource',
  generator: {
    filename: `${STATIC_CONTENT_PATH}images/[name]-[hash][ext]}`,
  },
};

export const imageLoader: TLoader = {
  client: universalLoader,
  server: universalLoader,
};
