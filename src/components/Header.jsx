import React from 'react'

export default function Header() {
    return (
        <header className='flex items-center justify-end gap-4 mx-80 mt-8 text-neutral-400'>
            <div className='gap-4 flex items-center '>
                <a href="/" className='flex items-center gap-2 specialBtn px-3 py-2 rounded-lg text-teal-500'>
                    <p>New</p>
                    <i className="fa-solid fa-plus"></i>
                </a>
            </div>
        </header>
    )
}
