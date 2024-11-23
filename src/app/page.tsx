import Image from "next/image"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/navbar"
import Card from "./components/card"

const cardData = [
  { 
    imageUrl: "/image/image1.jpg",
    alt: "Image 1",
    title: "Cloud Computing",
    description: "Learn about cloud infrastructure and services."
  },
  { 
    imageUrl: "/image/image2.jpg",
    alt: "Image 2",
    title: "AI Engineering",
    description: "Explore the latest in artificial intelligence and machine learning."
  },
  { 
    imageUrl: "/image/image3.jpg",
    alt: "Image 3",
    title: "Solopreneur Skills",
    description: "Develop skills to build and run your own tech business."
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <HeroSection />
      <main className="max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 text-center mb-6">
          Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 text-center mb-4">
          Developing Billion-Dollar Valued Developers and Solopreneurs
        </h2>
        <div className="prose prose-lg mx-auto mb-12">
          <p className="text-gray-600 text-center">
            The pace of technological change is accelerating. Big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses.
          </p>
          <p className="text-gray-600 text-center mt-4">
            This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently, without the need to hire employees or other team members.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((card, index) => (
            <Card 
              key={index}
              imageUrl={card.imageUrl}
              alt={card.alt}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </main>
      <footer className="mt-16 bg-blue-950 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image src="/image/logo.png" alt="Logo" width={80} height={80} />
            </div>
            <div className="text-center md:text-right">
              <p>&copy; 2024 All rights reserved.</p>
              <p className="mt-2">Empowering the next generation of tech entrepreneurs</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

