/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            throwIfNamespace: false,
            svgoConfig: {
              plugins: [
                {
                  mergePaths: false,
                },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
  reactStrictMode: true,
};
