const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
    entry: './src/js/app.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    rules: [
        {
            test: /\.js$/,
            use: {
                loader: "babel-loader",
                options: { presets: ["es2015"] }
            }
        },
        {
            test: /\.scss$/,
            use: [
                {
                    loader: "style-loader" // creates style nodes from JS strings
                },
                {
                    loader: "css-loader" // translates CSS into CommonJS
                },
                {
                    loader: "sass-loader" // compiles Sass to CSS
                }
            ]
        }
    ],
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Project Demo',
            minify: {
                collapseWhitespace: true // 문서의 텍스트 노드에서 공백을 제거합니다.
            },
            hash: true, //  CSS 혹은 JS 파일에 고유한 웹팩 컴파일 해시를 추가합니다
            template: './src/index.html'
        })
    ],
};

module.exports = (env, argv) => {

    if (argv.mode === 'development') {
        config.devtool = 'source-map';
        config.devServer =  {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 9000
        };
    }

    if (argv.mode === 'production') {
        //...
        config.plugins = [
            new CleanWebpackPlugin(),
        ];
    }

    return config;
};