module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
       client: 'postgres',
        host: env('DATABASE_HOST', 'ec2-3-208-50-226.compute-1.amazonaws.com'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'd836v9bnok7v3o'),
        username: env('DATABASE_USERNAME', 'ojpnaeofirmyyk'),
        password: env('DATABASE_PASSWORD', '792d96846cf1b11da3fb8150d5ef4775e83eddbefb577de7a6de28544a29abac'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {
       
      },
    },
  },
});
