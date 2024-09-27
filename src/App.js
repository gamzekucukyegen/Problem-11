"use client"
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/24/outline'
import { useEffect ,useState} from 'react'

function BoxButton({ children }) {
  return <button>{children}</button>
}

export default function App() {
  const [isClient,setIsClient]=useState(false)


  useEffect(()=>{
    setIsClient(true)
  },[])
  if(!isClient){
return null
  }
  return (
    <div className='space-y-4 p-8 max-w-sm mx-auto'>
      <button
        type='button'
        className='relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
      >
        <BoxButton>
        <CameraIcon className='mx-auto h-12 w-12 text-gray-400' />
        <span className='mt-2 block text-sm font-semibold text-gray-900'>
          Yeni bir resim ekleyin
        </span>
        </BoxButton>
      </button>
      <button
        type='button'
        className='relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
      >
        <BoxButton>
        <VideoCameraIcon className='mx-auto h-12 w-12 text-gray-400' />
        <span className='mt-2 block text-sm font-semibold text-gray-900'>
          Yeni bir video oluşturun
        </span>
        </BoxButton>
      </button>
    </div>
  )
}
/*
Error: Hydration failed because the initial UI does not match what was rendered on the server.

Warning: Expected server HTML to contain a matching <button> in <button>.

See more info here: https://nextjs.org/docs/messages/react-hydration-error

Sunucu ve istemci tarafındaki renderlar aynı olmadığında bu hatayı verir. Sunucu ve istemci tarafı aynı olmalı ondan. ısclient bunun için kullanıldı. aynı değilse null döndürür.
*/