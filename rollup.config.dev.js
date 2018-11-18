import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import {terser} from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';

export default {
	input: 'csf.js',
	output: {
        file: 'build/bundle.mjs',
		format: 'esm',
        //sourcemap: 'inline',
	},
	onwarn(warning) {
		console.error(`(!) ${warning.message}`);
	},
	plugins: [
		resolve({
		  jsnext: true,
		  main: true,
		}),
        //commonjs(),
		babel({
            presets: [
                ['@babel/preset-react', {}],
                /*['@babel/preset-env', {
                    useBuiltIns: 'usage',
                    targets: '> 10%',
                    modules: false,
                }],*/
            ],
            plugins: [
                "@babel/plugin-proposal-object-rest-spread",
                "@babel/plugin-proposal-class-properties",
            ],
			exclude: [/\/core-js\//],
		}),
        /*
		terser({
			warnings: true,
			mangle: {
				module: true,
			},
		}),
        */
	]
}
