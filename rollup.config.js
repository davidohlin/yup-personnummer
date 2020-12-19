import resolve from '@rollup/plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { babel } from '@rollup/plugin-babel'
import compiler from '@ampproject/rollup-plugin-closure-compiler'
import filesize from 'rollup-plugin-filesize'
import { main, module } from './package.json'

const extensions = ['.ts']

export default {
  input: 'index.ts',
  external: ['yup'],
  output: [
    { file: main, format: 'cjs', sourcemap: true },
    { file: module, format: 'es', sourcemap: 'inline' },
  ],
  plugins: [
    resolve({ extensions }),
    commonjs({ include: 'node_modules/**' }),
    babel({ extensions, babelHelpers: 'bundled' }),
    compiler(),
    filesize(),
  ],
}
