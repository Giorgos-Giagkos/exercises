module.exports = {
    entry: './index.ts',
    output: {
        filename: 'app.js',
        path: __dirname + './dist'
    },
    resolve: {
        extensions: ['.ts','.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'awesome-typescript-loader'
            }
        ]
    }
}