const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        hot: true
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /\.(scss|css)$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.(js|jsx)$/, exclude: /node_module/, use: ['babel-loader']
        }]
    },
    resolve: {
        alias: {
            utils: path.resolve(__dirname, 'src/utils'),
            assets: path.resolve(__dirname, 'src/assets'),
            components: path.resolve(__dirname, 'src/components/')
        }
    }
}