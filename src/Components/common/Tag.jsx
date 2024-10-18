import React from 'react'

const Tag = ({ value, emoji }) => {
    return (
        <div className='tag p-[.3rem] px-4 bg-slate-200 font-medium rounded-full inline-block' >
            <div className="flex items-center justify-center gap-1">
                <p className=''>{emoji}</p>
                <p className='text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text'>{value}</p>
            </div>
        </div >
    )
}

export default Tag