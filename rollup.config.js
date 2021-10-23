import copy from 'rollup-plugin-copy';
import cssdiscard from 'postcss-discard-comments';
import cssimport from 'postcss-import';
import cssprefixer from 'autoprefixer';
import cssurl from 'postcss-url';
import path from 'path';
import postcss from 'rollup-plugin-postcss';

const NODE_M = path.normalize(path.join(
  __dirname, 'node_modules'
));
const SOURCE = path.normalize(path.join(
  __dirname, '_source'
));
const STATIC = path.normalize(path.join(
  __dirname, 'static'
));


const view = {
  input: path.join(SOURCE, 'style.scss'),
  output: {
    file: path.join(STATIC, 'style.min.css'),
    format: 'system',
  },
  plugins: [
    postcss({
      plugins: [
        cssimport(),
        cssurl({
          url: (asset) => path.relative(STATIC, path.join(NODE_M, asset.url)),
        }),
        cssprefixer(),
        cssdiscard({
          removeAll: true,
        }),
      ],
      extract: true,
      minimize: true,
      sourceMap: false,
    }),
    copy({
      targets: [{
        src: path.join(
          NODE_M, '@fortawesome', 'fontawesome-free', 'js', 'all.min.js',
        ),
        dest: STATIC,
        rename: 'fa.min.js',
      }],
      copyOnce: true,
      verbose: true,
    }),
  ],
};

export default [view];
