/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Adicione esta linha para habilitar a exportação estática
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Necessário para exportação estática se estiver usando next/image
  },
}

export default nextConfig