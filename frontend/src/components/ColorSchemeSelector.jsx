import React from 'react'
import { colorSchemes } from '../assets/assets.js'

const ColorSchemeSelector = ({value, onChange}) => {
  return (
    <div className='space-y-3'>
        <label className='block text-sm font-medium'>Color Scheme</label>

        <div className='max-w-xs'>
          <div className='grid grid-cols-4 gap-3'>
            {colorSchemes.map((scheme)=>(
                <button key={scheme.id} onClick={()=>onChange(scheme.id)}
                className={`relative rounded-lg transition-all ${value === scheme.id && 'ring-2 ring-indigo-500'}`}
                title={scheme.name}>
                    <div className='flex h-8 rounded-md overflow-hidden'>
                        {scheme.colors.map((color, i)=> (
                            <div key={i} className='flex-1' style={{backgroundColor: color}}/>
                        ))}
                    </div>
                </button>
            ))}
          </div>
        </div>
        <p className='text-xs text-zinc-400'>Selected: {colorSchemes.find((s)=> s.id === value)?.name}</p>
    </div>
  )
}

export default ColorSchemeSelector