import React, { useRef, useEffect } from 'react'

export default function FileDisplay(props) {
    const { handleAudioReset, file, audioStream, handleFormSubmission } = props
    const audioRef = useRef()

    useEffect(() => {
        if (!file && !audioStream) { return }
        if (file) {
            console.log('HERE FILE', file)
            audioRef.current.src = URL.createObjectURL(file)
        } else {
            console.log('EHER AUDIO', audioStream)
            audioRef.current.src = URL.createObjectURL(audioStream)
        }
    }, [audioStream, file])


    return (
        <main className='flex-1  p-4 flex flex-col gap-3 text-center sm:gap-4 justify-center pb-20 w-full max-w-prose mx-auto'>
            <h1 className='font-semibold text-teal-500 text-4xl sm:text-5xl md:text-5xl'>Your File</h1>
            <div className=' flex flex-col text-left my-4'>
                <p className='font-semibold text-neutral-200'>File Name:</p>
                <p className='truncate text-neutral-400'>{file ? file?.name : 'Custom audio'}</p>
            </div>
            <div className='flex flex-col mb-2 text-neutral-200'>
                <audio ref={audioRef} className='w-full' controls>
                    Your browser does not support the audio element.
                </audio>
            </div>
            <div className='flex items-center justify-between gap-4'>
                <button onClick={handleAudioReset} className='text-teal-400 hover:text-teal-600 duration-200'>Reset</button>
                <button onClick={handleFormSubmission} className='specialBtn  px-3 p-2 rounded-lg text-teal-600 flex items-center gap-2 font-medium '>
                    <p>Transcribe</p>
                    <i className="fa-solid fa-pen-nib"></i>
                </button>
            </div>
        </main>
    )
}
