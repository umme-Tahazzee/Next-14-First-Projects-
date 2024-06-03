/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com"
      },
      {
        protocol: "https",
        hostname: "mir-s3-cdn-cf.behance.net"
      },
      {
        protocol: "https",
        hostname : "kfg6bckb.media.zestyio.com"
      }
      
    ],
  },
};

export default nextConfig;
