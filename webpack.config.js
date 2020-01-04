const WebpackNotifierPlugin = require('webpack-notifier');
const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: 'postcss-loader',
                options: {
                    ident: 'postcss',
                    plugins: () => [
                        require('postcss-short')(),
                    ]
                }
            }
        ]
    },
    plugins: [
        new WebpackNotifierPlugin({
            alwaysNotify: true,
            title: 'StackExchange',
            contentImage: path.join(__dirname, 'src/assets/images/header/logo.png')
        }),
    ]
};
