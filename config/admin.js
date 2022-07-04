module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'QSslc2d5fjR4ZmosMG4uMnVGbC57SlZqVm5JODFTQ050IztfYjlvQzh8d1Yrcy80Kn1HSHo2YysvdVNFeE00YQ'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'UVNzbGMyZDVmalI0Wm1vc01HNHVNblZHYkM1N1NsWnFWbTVKT0'),
  },
});
