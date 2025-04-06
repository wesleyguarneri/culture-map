const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
console.log('Using webpack version:', require('webpack').version);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    config.cache = false;

    config.snapshot = {
      ...config.snapshot,
      managedPaths: [/^(.pnpm|node_modules)/],
    };

    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'node_modules/leaflet/dist/images'),
            to: path.resolve(__dirname, 'public/leaflet/images'),
            noErrorOnMissing: true, // prevent build crash if folder is missing
          },
        ],
      }),
    );

    config.module.rules.push({
      test: /\.geojson$/,
      type: 'json',
    });

    return config;
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'http://localhost:5000/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
