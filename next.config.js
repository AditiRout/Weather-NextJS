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
       PUBLIC_WEATHER_KEY: process.env.PUBLIC_WEATHER_KEY

       
  }
}

