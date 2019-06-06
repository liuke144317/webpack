var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'production',
    entry:'./src/app.js',
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'js/[name].bundle.js',
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.styl$/,
                use:['style-loader','css-loader','stylus-loader']
            },
            {
                test:/\.html$/,
                use:'html-loader'
            },
            {
                test:/\.(png|jpg)$/i,
                use:[
                    {
                        loader:'file-loader',
                        query:{
                            name:'assets/[name]-[hash:5].[ext]'
                        }
                    }
                ]
            }
        ],
    },
    plugins:[
        new htmlWebpackPlugin({
            filename: 'index.html',
            template:'index.html',
            inject:'body'
        })
    ],

}
