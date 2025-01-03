import Image from 'next/image'

export function PhoneMockups() {
  return (
    <div className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full">
      <div className="absolute top-0 right-0 w-48 sm:w-56 md:w-64 h-[380px] sm:h-[440px] md:h-[500px] transform translate-x-4 sm:translate-x-8 rotate-6 transition-transform duration-300 hover:rotate-0 hover:translate-x-2 sm:hover:translate-x-4">
        <div className="bg-black rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] p-2 sm:p-3 h-full shadow-xl">
          <div className="bg-gray-950 rounded-[1.8rem] sm:rounded-[2.3rem] md:rounded-[2.7rem] h-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Friends playing Truth or Dare"
              width={400}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-10 sm:top-20 left-0 w-48 sm:w-56 md:w-64 h-[380px] sm:h-[440px] md:h-[500px] transform -translate-x-4 sm:-translate-x-8 -rotate-6 transition-transform duration-300 hover:rotate-0 hover:-translate-x-2 sm:hover:-translate-x-4">
        <div className="bg-black rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] p-2 sm:p-3 h-full shadow-xl">
          <div className="bg-gray-950 rounded-[1.8rem] sm:rounded-[2.3rem] md:rounded-[2.7rem] h-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1543807535-eceef0bc6599?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
              alt="Group enjoying Truth or Dare game"
              width={400}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

