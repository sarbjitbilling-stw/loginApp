const ENV = process.env.npm_lifecycle_event;
const isProduction = ENV === 'build';

const sourceMap = true;
process.env.BABEL_ENV = isProduction ? 'production' : 'development';
console.log(`Running in ${isProduction ? 'production' : 'development'} mode`);

const config = {};

config.mode = isProduction ? 'production' : 'development';

config.entry = {
    sbapp: './src/app/main.js'
};

config.output = {
    filename: '[name].bundle.js'
};

config.module = {
    rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules|somefolder)/,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }
            ]
        },
        {
            test: /\.html$/,
            use: [
                {
                    loader: 'html-loader'
                }
            ]
        }
    ]
};

config.devtool = 'source-map';

config.resolve = {
    modules: ['src', 'node_modules'],
    extensions: ['.js']
};

config.devServer = {
    port: '8085',

    open: {
        app: {
            name: 'chrome',
            arguments: ['--new-tab']
        }
    },

    static: {
        directory: 'src/public'
    },

    historyApiFallback: true,

    client: {
        progress: true,
        logging: 'info',

        overlay: {
            errors: true,
            warnings: false
        }
    },

    https: false,

    devMiddleware: {
        writeToDisk: false
    },

    proxy: {
        '/localcallback': {
            target: {
                protocol: 'http:',
                host: 'localhost',
                port: '3000',
            },
            secure: false,
        }
    },
};

config.infrastructureLogging = {
    level: 'verbose'
};

config.stats = 'errors-only';

config.plugins = [];

module.exports = config;
