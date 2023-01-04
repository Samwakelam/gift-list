const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['@sam/library'], {
  resolveSymlinks: true,
});
// const withCloudinary = require('webpack-cloudinary-plugin');

const nextConfig = {
  // distDir: 'build',
  env: {},
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'postcss-loader'],
      },
      {
        test: /\.jsx?$/,
        use: ['babel-loader', 'astroturf/loader'],
      },
    ],
  },
  webpack: (config, { isServer }) => {
    return config;
  },
  experimental: {
    transpilePackages: ['@sam/library', '@sam/types', '@sam/icons'],
  },
};

const plugins = [
  withTM,
  // [
  //     withCloudinary,
  //     {
  //         credentials: {
  //             cloud_name: process.env.CLOUD_NAME,
  //             api_key: process.env.CLD_API_KEY,
  //             api_secret: process.env.CLD_API_SECRET,
  //         },
  //         remote: 'assets',
  //         resource_type: 'image',
  //     },
  // ],
];

module.exports = withPlugins([withTM], nextConfig);
