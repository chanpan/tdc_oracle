const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    watch: true,
    target: 'electron',
    entry: './app/src/entry.js',
    output: {
        path: __dirname + '/build',
        publicPath: 'build/',
        filename: 'bundle.js'
    },
    externals: {
        "electron": "require('electron')",
        "fs": "require('fs')",
        "homedir": "require('homedir')",
        "user-home": "require('user-home')",
        "knex": "require('knex')",
        "sqlite3": "require('sqlite3')",
        "oracledb": "require('oracledb')",
        "reactstrap":"require('reactstrap')",
        "react-maskedinput":"require('react-maskedinput')",
        "font-awesome":"require('font-awesome')"
      },    
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: ['react']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    loader: 'css-loader'
                })
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/',    // where the fonts will go
                    publicPath: './'       // override the default path
                  }
                }]
            },
        ]
    },

    plugins: [
        new ExtractTextPlugin({
            filename: 'bundle.css',
            disable: false,
            allChunks: true
        }
    )
]

}
