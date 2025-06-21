const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    // config.cache = false;

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
        "source": "/api/:path*",
        "destination": "https://Writtenworld-env.eba-5nua9ut5.us-east-1.elasticbeanstalk.com/api/:path*"
      }
    ];
  },
};

module.exports = nextConfig;
