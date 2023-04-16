import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
        <Sidebar />
        <main className='flex-1 p-6 overflow-y-hidden scrollbar'>
          <div className='flex items-center gap-4'>
            <button className='rounded-full w-8 h-8 bg-black/40 pl-0.5'>
              <ChevronLeft/>
            </button>
            <button className='rounded-full w-8 h-8 bg-black/40 pl-1.5'>
              <ChevronRight/>
            </button>
          </div>
          <h1 className='font-semibold text-4xl mt-10'>Good Night</h1>
          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href='' className='bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src='/green-day.jpg' className='rounded' width={104} height={104} alt='album do Green day'/>
              <strong>Playlist</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 shadow-md shadow-black text-black ml-auto mr-4 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='' className='bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src='/green-day.jpg' className='rounded' width={104} height={104} alt='album do Green day'/>
              <strong>Playlist</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 shadow-md shadow-black text-black ml-auto mr-4 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='' className='bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src='/green-day.jpg' className='rounded' width={104} height={104} alt='album do Green day'/>
              <strong>Playlist</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 shadow-md shadow-black text-black ml-auto mr-4 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
           
          </div>
          <h2 className='font-semibold text-2xl mt-10'>Happy New Year</h2>
          <div className='grid grid-cols-5 gap-4 mt-4'>
            <a href='' className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
              <Image src='/green-day.jpg' className='w-full rounded' width={120} height={120} alt='album do Green day'/>              
              <strong className='font-semibold'>Daily mix 1</strong>
              <span className='text-xs text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>
            <a href='' className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
              <Image src='/green-day.jpg' className='w-full rounded' width={120} height={120} alt='album do Green day'/>              
              <strong className='font-semibold'>Daily mix 1</strong>
              <span className='text-xs text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>
            <a href='' className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
              <Image src='/green-day.jpg' className='w-full rounded' width={120} height={120} alt='album do Green day'/>              
              <strong className='font-semibold'>Daily mix 1</strong>
              <span className='text-xs text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>
            <a href='' className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
              <Image src='/green-day.jpg' className='w-full rounded' width={120} height={120} alt='album do Green day'/>              
              <strong className='font-semibold'>Daily mix 1</strong>
              <span className='text-xs text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>
            <a href='' className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
              <Image src='/green-day.jpg' className='w-full rounded' width={120} height={120} alt='album do Green day'/>              
              <strong className='font-semibold'>Daily mix 1</strong>
              <span className='text-xs text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
