import Image from "next/image"
import Link from "next/link"

const HeroSection = () => {
  return (
    <main className="container mx-auto px-4 py-12 md:py-24">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-5xl font-bold leading-tight text-blue-700">
            Governor Sindh </h1>
          <p className="text-3xl font-bold leading-tight text-blue-700">Kamran Khan Tessori</p>
          <p className="text-2xl font-bold text-blue-700">Certified Cloud Applied <br />Generative AI Engineer (GenEng)</p>
          <p className="text-2xl md:text-3xl text-blue-700">
            Earn up to $5,000 / month
          </p>
          <p className="text-xl text-blue-600">
            Now admissions are open in Hyderabad
          </p>
          <Link 
            href="/apply" 
            className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Apply Now
          </Link>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src="/image/cover.png"
            alt="AI Engineer Training Program"
            width={800}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </main>
  )
}

export default HeroSection

