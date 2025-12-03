import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './Navigation';
import Bento from './Bento.jsx';
import Features from './Features.jsx';
import sofaImage from './assets/sofa.png';
function App() {

  return (
    <div className='bg-black w-screen min-h-screen flex flex-col text-white items-center justify-center'>
      <Navigation />
      <div className='relative flex-1 flex items-center min-h-screen justify-center'>
          <img src={sofaImage} className='absolute w-auto h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 blur-sm max-w-full max-h-full object-contain' alt="Sofa" />
        <div className='flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg max-w-4xl mx-auto'>
          <span className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-instrument-serif font-light tracking-tighter text-center px-4">
            Transform Your Space with Timeless Design
          </span>
          <p className='relative z-10 mt-4 w-full max-w-2xl text-base sm:text-lg md:text-xl font-inter text-center text-neutral-300 px-4'>Premium interior design services tailored to your style. From concept to completion, we bring your vision to life.</p>
          <div className='relative z-10 gap-2 sm:gap-4 p-4 sm:p-6 lg:p-8 flex flex-col sm:flex-row justify-center items-center'>
            <button
              className="relative inline-flex h-10 sm:h-12 w-full sm:w-auto overflow-hidden rounded-full p-px focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span
                className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#dbdbdb_0%,#575757_50%,#dbdbdb_100%)]" />
              <span
                className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 sm:px-5 py-2 sm:py-3 text-sm sm:text-base text-white backdrop-blur-3xl">
                Sign in
              </span>
            </button>

            <button
              className="relative inline-flex h-10 sm:h-12 w-full sm:w-auto overflow-hidden rounded-full p-px focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span
                className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span
                className="font-instrument-serif text-lg sm:text-xl inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 sm:px-5 py-2 sm:py-3 font-medium text-white backdrop-blur-3xl">
                Explore
              </span>
            </button>
          </div>
        </div>
      </div>
      <Features />
      <div className='flex flex-col items-center'>
        <div className="relative text-3xl font-instrument-serif font-bold cursor-pointer
                after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px]
                after:w-0 after:bg-violet-400 after:transition-all after:duration-300
                hover:after:w-full">
  Our Products
</div>

      <Bento />
      </div>
      <div className='flex-1 flex flex-col gap-6 sm:gap-8 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8'>
        

      <p className='w-full max-w-4xl flex items-center justify-center mx-auto text-center text-sm sm:text-base lg:text-lg leading-relaxed'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed vero rem excepturi nostrum assumenda numquam laudantium, et deleniti consequatur quo, fugiat cupiditate, earum libero consequuntur minus dolorum tempore exercitationem sequi!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur totam reprehenderit quidem aliquam quas laborum, similique fugiat debitis veniam molestiae quod aliquid distinctio, neque exercitationem suscipit ab optio commodi inventore excepturi quaerat alias illo ex. Modi rerum tempora quibusdam dolores culpa nemo labore officia facere. Veniam excepturi vero esse maxime nihil voluptas, aliquam in commodi laudantium, necessitatibus nam iste dolore expedita soluta architecto repellat quis, consequuntur culpa maiores. Rerum vitae cumque quis sed suscipit aliquam iusto voluptatum eos rem voluptate? Accusamus magnam tempora voluptas? Eveniet neque, perferendis commodi doloribus soluta ducimus quis error voluptatem. Odio, expedita. Blanditiis quis aspernatur minus!

      </p>
      <div className='w-12 h-[200px] border-2 border-white'>
      <img className='w-full h-auto' src="https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg" alt="img" />
      </div>
      </div>
    </div>
  )
}

export default App
