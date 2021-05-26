const path = require('path');

const config = {
    entry: ['react-hot-loader/patch', './src/server.tsx'],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js|jsx|tsx|ts/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.scss/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.svg/,
                use: 'file-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    devServer: {
        contentBase: './dist',
    },
};

module.exports = config;
