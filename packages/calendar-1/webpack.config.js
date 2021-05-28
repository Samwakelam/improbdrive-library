const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

// The `template` property defines the source
// of a template file that this plugin will use.
// We will create it later.
const htmlPlugin = new HtmlWebPackPlugin({
    template: './src/server.tsx',
});

const config = {
    entry: {
        index: './src/index.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
        ],
    },

    // Telling webpack which extensions
    // we are interested in.
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
    },

    // What file name should be used for the result file,
    // and where it should be palced.
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },

    // Use the html plugin.
    plugins: [htmlPlugin],

    // Set up the directory
    // from which webpack will take the static content.
    // The port field defines which port on localhost
    // this application will take.
    devServer: {
        contentBase: './dist',
        compress: true,
        port: 9000,
    },
};

module.exports = config;
