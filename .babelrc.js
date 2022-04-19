module.exports = {
    comments: false,
    presets: [
        ['@babel/preset-env', {useBuiltIns: 'entry', modules: false, corejs: 3, debug: false}],
        '@babel/preset-react'
    ],
    plugins: [
        ['@babel/plugin-transform-runtime']
    ],
    env: {
    }
};
