import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import AspectRatioSelector from '../components/AspectRatioSelector';

const Generate = () => {

  const {id} = useParams();
  const [title, setTitle] = useState('');
  const [additionalDetails, setAdditionalDetails] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <div className='pt-24 min-h-screen' >
        <main className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-28 lg:pb-8'>
          <div className='grid lg:grid-cols-[400px_1fr] gap-8'>
            {/* LEFT PANNEL */}
            <div className={`space-y-6 ${id && 'pointer-events-none'}`}>
                  <div className='p-6 rounded-2xl bg-white/8 border border-white/12 shadow-xl space-y-6'>
                  <div>
                    <h2 className='text-xl font-bold text-zinc-100 mb-1' >Create Your Thumbnail</h2>
                    <p className='text-sm text-zinc-400' >Describe your vision and let AI bring to life</p>
                  </div>
                  <div className='space-y-5'>
                      {/* TITLE INPUT */}
                      <div>
                        <label htmlFor="" className='block text-sm font-medium' >Title or Topic</label>
                        <input className='w-full px-4 py-3 rounded-lg border border-white/12  bg-black/20  text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500' type="text" value={title} onChange={(e) => setTitle(e.target.value)} maxLength={100} placeholder='e.g., 10 Tips for Better Sleep' />

                        <div className='flex justify-end' >
                          <span className='text-xs text-zinc-400'>{title.length}/100</span>
                        </div>
                      </div>

                      {/* AspectRationSelector */}
                      <AspectRatioSelector/>
                      {/* StyleSelector */}
                      {/* ColorSchemeSelector */}

                      {/* DETAILS */}
                      <div className='space-y-3 dark'>
                            <label htmlFor="" className='block text-sm font-mediu'>Additional Prompts <span className='text-zinc-400 text-xs'>(optional)</span></label>
                            <textarea value={additionalDetails} onChange={(e)=> setAdditionalDetails(e.target.value)} rows={3} placeholder='preferences...' className='w-full px-4 py-3 rounded-lg border border-white/10 g-white/6 text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none'/>
                      </div>
                  </div>

                  {/* BUTTON */}
                  {!id && (
                    <button className='text-[15px] w-full py-3.5 rounded-xl font-medium bg-indigo-600 hover:bg-indigo-500 disabled:cursor-not-allowed
                    transition-colors' >
                      {loading ? "Generating..." : "Generating Thumbnail"}
                    </button>
                  )
                  }
                  </div>
            </div>

            {/* RIGHT PANNEL */}
            <div></div>
          </div>
        </main>
      </div>

      {/* Soft Backdrop */}
      <div className='fixed inset-0 -z-1 pointer-events-none'>
        <div className='absolute left-1/2 top-20 -translate-x-1/2 w-245 h-115 bg-linear-to-tr from-indigo-800/35 to-transparent rounded-full blur-3xl' />
        <div className='absolute right-12 bottom-10 w-105 h-55 bg-linear-to-bl from-indigo-700/35 to-transparent rounded-full blur-2xl' />
      </div>
    </div>
  )
}

export default Generate