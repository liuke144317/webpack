var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {//多页面应用写法
        'main':'./src/script/main.js',
        'other1':'./src/script/other1.js',
        'other2':'./src/script/other2.js',
        'other3':'./src/script/other3.js'
    },
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: 'js/[name]-[hash].js',
        publicPath:'www.like.com'
    },
    plugins:[
        new htmlWebpackPlugin({
            filename:'other1-[hash].html',
            template:'index.html',
            inject:'body',
            chunks:['other1']
        }),
        new htmlWebpackPlugin({
            filename:'other2-[hash].html',
            template:'index.html',
            inject:'body',
            chunks:['other2']
        }),
        new htmlWebpackPlugin({
            filename:'other3-[hash].html',
            template:'index.html',
            inject:'body',
            chunks:['other3']
        })
    ]
}
