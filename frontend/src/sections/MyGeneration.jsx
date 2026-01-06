import React, { useEffect, useState } from 'react'
import { dummyThumbnails } from '../assets/assets.js'

const MyGeneration = () => {
  const [thumbnails, setThumbnails] = useState([])
  const [loading, setLoading] = useState(true)
  
  const fetchThumbnails = () => {
    setLoading(true)
    setThumbnails(dummyThumbnails)
    setLoading(false)
  }

  const handleDownload = (image_url) => {
    window.open(image_url, '_blank')
  }

  useEffect(() => {
    fetchThumbnails()
  },[])
  
  return (
    <div>
      <div className='mt-28 min-h-screen px-6 md:px-16 lg:px-24 xl:px-24'>
          <div className='mb-8'>
            <h1 className='text-2xl font-hold text-zinc-200'>My Generations</h1>
            <p className='text-sm text-zinc-400 mt-1'>View and manage all your AI-generated thumbnails</p>
          </div>

          {loading && (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white/6 border border-white/10 animate-pulse h-[250px]"
                />
              ))}
            </div>
          )}

          {!loading && thumbnails.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {thumbnails.map((item) => (
                <div
                  key={item._id}
                  className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-lg"
                >
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-full h-[250px] object-cover"
                  />

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end justify-between p-4">
                    <div>
                      <h3 className="text-sm font-semibold text-white line-clamp-2">
                        {item.title}
                      </h3>
                    </div>

                    <button
                      onClick={() => handleDownload(item.image_url)}
                      className="px-3 py-1 text-xs bg-indigo-600 rounded-md hover:bg-indigo-500"
                    >
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* EMPTY STATE */}
          {!loading && thumbnails.length === 0 && (
              <div className='text-center py-24'>
                <h3 className='text-lg font-semibold text-zinc-200'>No thumbnails yet</h3>
                <p className='text-sm text-zinc-400 mt-2'>Generate your first thumbnail to see it here</p>
              </div>
          )}
      </div>

       {/* Soft Backdrop */}
      <div className='fixed inset-0 -z-10 pointer-events-none'>
        <div className='absolute left-1/2 top-20 -translate-x-1/2 w-245 h-115 bg-gradient-to-tr from-indigo-800/35 to-transparent rounded-full blur-3xl' />
        <div className='absolute right-12 bottom-10 w-105 h-55 bg-gradient-to-bl from-indigo-700/35 to-transparent rounded-full blur-2xl' />
      </div>
    </div>
  )
}

export default MyGeneration