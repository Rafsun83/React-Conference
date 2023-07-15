/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   cssModules: true,
// }

// module.exports = nextConfig

module.exports = {
  nextConfig:{
    reactStrictMode: true,
    cssModules: true,
  },
  images: {
    domains: ['api.react-finland.fi'],
  },
};



// module.exports = {
//   nextConfigL: {
//     reactStrictMode: true,
//     cssModules: true,
//   },
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'ahttps://api.react-finland.fi/graphql',
//         port: '',
//         pathname: '/admin/*',
//       },
//     ],
//   },
// }
