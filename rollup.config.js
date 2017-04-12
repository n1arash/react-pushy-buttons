// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import jsx from 'rollup-plugin-jsx'
export default {
  entry: 'src/Button.js',
  format: 'cjs',
  plugins: [
    resolve(),
    jsx( {factory: 'React.createElement'} ),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ],
  dest: './main.js'
};
