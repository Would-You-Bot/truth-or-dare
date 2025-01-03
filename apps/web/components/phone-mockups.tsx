import Image from 'next/image'

export function PhoneMockups() {
  return (
    <div className="relative h-[400px] w-full sm:h-[500px] md:h-[600px]">
      <div className="absolute top-0 right-0 h-[380px] w-48 translate-x-4 rotate-6 transform transition-transform duration-300 hover:translate-x-2 hover:rotate-0 sm:h-[440px] sm:w-56 sm:translate-x-8 sm:hover:translate-x-4 md:h-[500px] md:w-64">
        <div className="h-full rounded-[2rem] bg-black p-2 shadow-xl sm:rounded-[2.5rem] sm:p-3 md:rounded-[3rem]">
          <div className="h-full overflow-hidden rounded-[1.8rem] bg-gray-950 sm:rounded-[2.3rem] md:rounded-[2.7rem]">
            <Image
              src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Friends playing Truth or Dare"
              width={400}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="-translate-x-4 sm:-translate-x-8 -rotate-6 hover:-translate-x-2 sm:hover:-translate-x-4 absolute top-10 left-0 h-[380px] w-48 transform transition-transform duration-300 hover:rotate-0 sm:top-20 sm:h-[440px] sm:w-56 md:h-[500px] md:w-64">
        <div className="h-full rounded-[2rem] bg-black p-2 shadow-xl sm:rounded-[2.5rem] sm:p-3 md:rounded-[3rem]">
          <div className="h-full overflow-hidden rounded-[1.8rem] bg-gray-950 sm:rounded-[2.3rem] md:rounded-[2.7rem]">
            <Image
              src="https://images.unsplash.com/photo-1543807535-eceef0bc6599?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
              alt="Group enjoying Truth or Dare game"
              width={400}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
