const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: 'node_modules/leaflet/dist/images',
            to: path.resolve(__dirname, 'public', 'leaflet', 'images')
          },
        ],
      }),
    );
    config.module.rules.push({
      test: /\.geojson$/,
      use: ["json-loader"]
    });
    return config
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'http://localhost:5000/:path*'
      }
    ]
  }
}

module.exports = nextConfig;