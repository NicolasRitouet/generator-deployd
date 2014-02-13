module.exports = {
    dev: {
        options: {
            port: 2403,
            db: {
                host: 'localhost',
                port: 27017,
                name: 'development'
            },
            env: 'development'
        }
    },
    prod: {
        options: {
            port: 2403,
            db: {
                port: 27017,
                name: 'production',
                host: 'localhost',
                credentials: {
                    username: 'prod_user',
                    password: 'prod_pass'
                }
            },
            env: 'production'
        }
    }
};