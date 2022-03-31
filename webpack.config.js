const webpack = reqiure(webpack);
const path = reqiure('path');

module.exports = (env, options) => {
    const isProduction = options.mode === 'production';

    const config = {
entry: './src/index.js',
        output: {


        }
    }
    return config;
}