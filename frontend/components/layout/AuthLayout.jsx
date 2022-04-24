import Image from "next/image"

export default function AuthLayout({ children }) {
  return (
      <div className="relative min-h-screen">
        <Image 
        src="/images/horse-full.jpg" 
        layout="fill"
        objectFit="cover"
        className="absolute bottom-0 left-0 z-0 right-0 top-0"
        />
        <div className="bg-gradient-to-r to-green-500 from-green-700 content-[''] absolute bottom-0 left-0 right-0 top-0 opacity-60"></div>

        <div className="relative">
          <div className="flex flex-col items-stretch justify-center min-h-screen">
            <div className="px-4">{ children }</div>
          </div>
        </div>
      </div>
  )
}