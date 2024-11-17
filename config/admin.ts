export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET','4b9191a735ed9b7a31289fca85ac48b688089b4896dfa72654cd7802b3f64a01'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT','9wutl0MqlVDMHGeMhk3GKA=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
