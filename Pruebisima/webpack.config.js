//Esta linea la usamos para obtener la ruta del proyecto con la que se está trabajando.
const path = require('path');
const HTMLWebpackPlugin = require("html-webpack-plugin");



module.exports = {
    //Especificamos el archivo con el que se va a trabajar
    entry:{
        index:'./src/js/index.js'
    },
    //Está es la salida creará los archivos especificados, en la ruta especificada
    output:{
        //Nombre del archivo
        filename:'[name].bundle.js',
        //La ruta donde se va a crear el bundle y el nombre de la carpeta donde se está creando
        path: path.join(__dirname,'/dist')
    },
    module : {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use : {
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/env']
                    }
                }
            },
            {
                test: /\.css$/,
                use:[
                    {loader:'style-loader'},
                    {loader:'css-loader'},
                ]

            },
            {
                test: /\.scss$/,
                use:[
                    {loader:'style-loader'},
                    {loader:'css-loader'},
                    {loader:'sass-loader'}
                ]

            }
        ]
    },
    optimization: {
        splitChunks:{
            cacheGroups:{
                commons:{
                    test: /[\\/]node_modules[\\/]/,
                    name: 'common',
                    chunks:'all'
                }
            }
        }
    },
    devServer:{
        //Es la carpeta donde se van a servir los archivos
        contentBase: path.join(__dirname,'dist'),
        compress:true,
        port:9000
    },
    plugins:[
            new HTMLWebpackPlugin(
                {
                    filename: 'index.html',
                    template: 'src/index.html',
                    title: 'Nuevo'
                }
            )
    ]
}