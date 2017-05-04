import rollup      from 'rollup';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify';
//paths are relative to the execution path
export default {
    entry: 'aot/main.js',
    dest: 'aot/dist/build.js', // output a single application bundle
    sourceMap: true,
    sourceMapFile: 'aot/dist/build.js.map',
    format: 'iife',
    plugins: [
        nodeResolve({jsnext: true, module: true, main: true, skip: [ 'firebase' ]}),
        commonjs({
            include: ['node_modules/rxjs/**',
            'node_modules/angular-in-memory-web-api/**']
        }),
        uglify()
    ]
}