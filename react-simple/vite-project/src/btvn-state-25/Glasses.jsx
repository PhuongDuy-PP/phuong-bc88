import React, { useState } from 'react'
// dataGlasses là tên alias
import dataGlasses from './dataGlasses.json'

const Glasses = () => {

    const [glass, setGlass] = useState(null)
  return (
    <div>
        {/* header với title glasses component */}
        <div className='bg-gray-500 flex justify-center p-4'>
            <h2 className='text-white text-2xl font-bold'>Glasses state</h2>
        </div>
        <div className='bg-[url("/glassesImage/background.jpg")] min-h-screen bg-cover'>
            {/* background image */}
            {/* 2 model */}
            <div className='flex justify-between px-36'>
                <img className='w-80' src="/glassesImage/model.jpg" alt="" />
                <div className='relative'>
                    <img className='w-80' src="/glassesImage/model.jpg" alt="" />
                    <img
                        className='absolute top-0 left-0 w-32'
                        src={glass ? glass.url : ""}
                        alt=""
                    />
                    <div className='absolute bottom-0 bg-amber-200'>
                        <h3 className='mb-3'>{glass ? glass.name : ""}</h3>
                        <p>{glass ? glass.desc : ""}</p>
                    </div>
                </div>
                
            </div>

            {/* render list kính => map */}
            <div className='bg-white w-max flex justify-center p-6 gap-2 mx-auto mt-4 border border-2 rounded'>
                {
                    dataGlasses.map((glass) => {
                        return(
                            <img
                                key={glass.id}
                                onClick={() => setGlass(glass)}
                                className='w-16 cursor-pointer'
                                src={glass.url}
                                alt={glass.name}
                            />
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Glasses