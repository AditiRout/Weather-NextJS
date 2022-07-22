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
    NEXT_PUBLIC_WEATHER_KEY: '622117cd98d4d2ab775f66e5fb7336ea'
  }
}

