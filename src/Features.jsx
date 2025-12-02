import React from 'react'

export const Features = () => {
  return (
    <div className='w-full h-auto flex flex-col justify-center items-center'>
    <div className='font-instrument-serif text-white text-4xl font-bold mt-8 mb-4'>
        Features
    </div>

    <div className='w-full max-w-4xl flex md:flex-row flex-col gap-4 items-center justify-center mx-8 py-4 sm:py-8 lg:py-12 px-0 sm:px-2 lg:px-4'>
        
        {/* TEXT COLUMN: width 75% (w-3/4) */}
        <div className='flex flex-col border-2 border-black w-3/4 p-4 bg-[url("https://images.squarespace-cdn.com/content/v1/5ee52f7d9edc8a7ee635591a/8df50655-6b68-460e-ad6c-5230001b9d5a/240404+-+063944+-+001.jpg")] md:bg-none'>
            <div className='text-white font-instrument-serif text-3xl font-semibold mb-4 md:bg-transparent text-center md:text-left bg-[rgba(255,255,255,0.5)] p-2'>
                Feature One
            </div>
            <div className='text-center md:text-left font-inter'>
                Description of feature one goes here. This is some garbage text. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, esse eligendi iusto corrupti reprehenderit odio odit quos ipsam inventore, non debitis, fugit expedita at possimus. Ad eveniet obcaecati blanditiis aperiam.
            </div>
        </div>

        {/* IMAGE COLUMN: width 25% (w-1/4) */}
        {/* 1. This wrapper is flexed to match the text height automatically */}
        <div className='w-1/4 border-2 rounded-3xl overflow-hidden border-black relative min-h-[150px] hidden md:block'>
            {/* 2. The image fills the wrapper completely while maintaining aspect ratio */}
            <img 
                className='object-cover w-full h-full' 
                src="https://images.squarespace-cdn.com/content/v1/5ee52f7d9edc8a7ee635591a/8df50655-6b68-460e-ad6c-5230001b9d5a/240404+-+063944+-+001.jpg" 
                alt="Feature representation" 
            />
        </div>
        
    </div>

    <div className='w-full max-w-4xl flex md:flex-row-reverse flex-col gap-4 items-center justify-center mx-8 py-4 sm:py-8 lg:py-12 px-0 sm:px-2 lg:px-4'>
        
        {/* TEXT COLUMN: width 75% (w-3/4) */}
        <div className='flex flex-col border-2 border-black w-3/4 p-4 bg-[url("https://images.squarespace-cdn.com/content/v1/5ee52f7d9edc8a7ee635591a/8df50655-6b68-460e-ad6c-5230001b9d5a/240404+-+063944+-+001.jpg")] md:bg-none'>
            <div className='text-white font-instrument-serif text-3xl font-semibold mb-4 md:bg-transparent text-center md:text-left bg-[rgba(255,255,255,0.5)] p-2'>
                Feature Two
            </div>
            <div className='text-center md:text-left font-inter'>
                Description of feature two goes here. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam nam maxime labore harum quia corporis eaque dicta, commodi adipisci deserunt sequi atque dolorem. Dignissimos atque possimus iste, quos ipsam nam.
            </div>
        </div>

        {/* IMAGE COLUMN: width 25% (w-1/4) */}
        {/* 1. This wrapper is flexed to match the text height automatically */}
        <div className='w-1/4 border-2 rounded-3xl overflow-hidden border-black relative min-h-[150px] hidden md:block'>
            {/* 2. The image fills the wrapper completely while maintaining aspect ratio */}
            <img 
                className='object-cover w-full h-full' 
                src="https://images.squarespace-cdn.com/content/v1/5ee52f7d9edc8a7ee635591a/8df50655-6b68-460e-ad6c-5230001b9d5a/240404+-+063944+-+001.jpg" 
                alt="Feature representation" 
            />
        </div>
        
    </div>

    <div className='w-full max-w-4xl flex md:flex-row flex-col gap-4 items-center justify-center mx-8 py-4 sm:py-8 lg:py-12 px-0 sm:px-2 lg:px-4'>
        
        {/* TEXT COLUMN: width 75% (w-3/4) */}
        <div className='flex flex-col border-2 border-black w-3/4 p-4 bg-[url("https://images.squarespace-cdn.com/content/v1/5ee52f7d9edc8a7ee635591a/8df50655-6b68-460e-ad6c-5230001b9d5a/240404+-+063944+-+001.jpg")] md:bg-none'>
            <div className='text-white font-instrument-serif text-3xl font-semibold mb-4 md:bg-transparent text-center md:text-left bg-[rgba(255,255,255,0.5)] p-2'>
                Feature Three
            </div>
            <div className='text-center md:text-left font-inter'>
                Description of feature three goes here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam pariatur accusantium officiis impedit eligendi laborum, repudiandae facere minus, maxime tempora velit dolorum? Dolores sapiente a praesentium esse repellat inventore veniam?
            </div>
        </div>

        {/* IMAGE COLUMN: width 25% (w-1/4) */}
        {/* 1. This wrapper is flexed to match the text height automatically */}
        <div className='w-1/4 border-2 rounded-3xl overflow-hidden border-black relative min-h-[150px] hidden md:block'>
            {/* 2. The image fills the wrapper completely while maintaining aspect ratio */}
            <img 
                className='object-cover w-full h-full' 
                src="https://images.squarespace-cdn.com/content/v1/5ee52f7d9edc8a7ee635591a/8df50655-6b68-460e-ad6c-5230001b9d5a/240404+-+063944+-+001.jpg" 
                alt="Feature representation" 
            />
        </div>
        
    </div>
</div>
  )
}

export default Features;