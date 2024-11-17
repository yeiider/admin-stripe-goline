export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS',['48pDqw1PlMzH7k8xsNndD8vPmvbybNrO','8lsZXIOaqNCjC3mU7gpvT2J3HK6DHTon']),
  },
});
