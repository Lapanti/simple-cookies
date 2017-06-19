import * as path from 'path';
import * as webpack from 'webpack';

module.exports = {
    context: __dirname,
    entry: path.resolve('src', 'cookies.ts'),
    output: {
        filename: 'main.js',
        path: path.resolve('lib'),
        library: 'simple-cookies',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['awesome-typescript-loader'],
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
};
