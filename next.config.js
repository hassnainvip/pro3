const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io']
  },
  compiler: {
    removeConsole: true,
  },
  async headers() {
    return [
      {
        source: '/_next/static/(.*)\\.js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000', // 1 month in seconds
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
