exports.default = {
    development: {
        client: 'postgresql',
        connection: {
            host: 'localhost',
            database: 'tekne',
            user: 'postgres',
            password: 'postgres',
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        },
    },
    production: {
        client: 'postgresql',
        connection: {
            host: process.env.DB_ADDRESS,
            database: `tekne`,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        },
    },
};
