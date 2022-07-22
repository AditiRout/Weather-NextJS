/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports={
  images:{
    domains:[
      'images.unsplash.com','openweathermap.org'
    ]
  },nextConfig,
  env:{
    NEXT_PUBLIC_WEATHER_KEY: process.env.NEXT_PUBLIC_WEATHER_KEY
  }
}

