const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/components/PulseText/PulseText.jsx',
    output: {
        path: path.resolve('lib'),
        filename: 'PulseText.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
};
