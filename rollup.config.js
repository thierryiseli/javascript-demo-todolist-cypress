import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import css from 'rollup-plugin-import-css';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/app.js',
    output: {
        file: 'public/bundle.js',
        format: 'iife',
        sourcemap: true
    },
    plugins: [
        css(),
        resolve(),
        commonjs(),
        terser()
    ]
}