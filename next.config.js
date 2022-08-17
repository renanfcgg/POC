module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "i.ibb.co"
    ]
  },
  module: {
    rules: [
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
    ],
  }
}
