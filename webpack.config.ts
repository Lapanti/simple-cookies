import * as path from 'path';
import * as webpack from 'webpack';

module.exports = {
    context: __dirname,
    output: {
        filename: 'main.js',
        path: path.resolve('lib'),
        library: 'simple-cookies',
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['babel-loader', 'awesome-typescript-loader'],
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
};
