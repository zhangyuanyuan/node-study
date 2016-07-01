module.exports = {
    "entry": index.js,
    "module": {
        "loaders": [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    }
}