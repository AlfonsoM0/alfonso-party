// https://ducanh-next-pwa.vercel.app/docs/next-pwa/configuring
import * as pwa from '@ducanh2912/next-pwa';

const withPWA = pwa.default({
  disable: process.env.NODE_ENV === 'development',
  register: true,

  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  dest: 'public',
  fallbacks: {
    // image: "/static/images/fallback.png",
    // document: "/offline", // if you want to fallback to a custom page rather than /_offline
    // font: '/static/font/fallback.woff2',
    // audio: ...,
    // video: ...,
  },

  workboxOptions: {
    disableDevLogs: true,
  },
  // ... other options you like
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... other options you like
};

export default withPWA(nextConfig);
