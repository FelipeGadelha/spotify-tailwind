import { Laptop2, LayoutList, Maximize2, Play, Volume } from "lucide-react"
import { Repeat } from "lucide-react"
import { Mic2 } from "lucide-react"
import { SkipForward } from "lucide-react"
import { Shuffle, SkipBack } from "lucide-react"
import Image from "next/image"

export function Footer() {
    return (
        <footer className='bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Image src='/green-day.jpg' width={64} height={64} alt='album do Green day'/>    
          <div className='flex flex-col'>
            <strong className='font-normal'>American Idiot</strong>
            <span className='text-xs text-zinc-400'>Green Day</span>
          </div>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <div className='flex items-center gap-6'>
            <Shuffle size={20} className='text-zinc-200'/>
            <SkipBack size={20} className='text-zinc-200'/>
            <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white shadow-md shadow-black text-black'>
              <Play size={20}/>
            </button>
            <SkipForward size={20} className='text-zinc-200'/>
            <Repeat size={20} className='text-zinc-200'/>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-400'>0:31</span>
            <div className='h-1 rounded-full w-96 bg-zinc-600'>
              <div className='bg-zinc-200 rounded-full w-40 h-1'></div>
            </div>
            <span className='text-xs text-zinc-400'>2:14</span>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <Mic2 size={20}/>
          <LayoutList size={20}/>
          <Laptop2 size={20}/>
          <div className='flex items-center'>
            <Volume size={20}/>
            <div className='h-1 rounded-full w-24 bg-zinc-600'>
              <div className='bg-zinc-200 rounded-full w-10 h-1'></div>
            </div>
          </div>
          <Maximize2 size={20}/>

        </div>
      </footer>
    )
}

export default Footer