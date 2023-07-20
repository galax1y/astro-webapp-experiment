import { useState } from 'react'

export function InteractiveComponent() {
  const [state, setState] = useState<number>(0)

  function handleButtonPress() {
    setState(state => state + 1)
  }

  return (
    <div className='flex gap-4 p-2 items-center justify-center w-full h-32 border-2 rounded-xl border-zinc-400'>
      <button
        className='flex-1 font-bold text-zinc-300 bg-zinc-800 p-4 rounded-lg flex items-center justify-center hover:text-emerald-500 hover:bg-zinc-900'
        onClick={handleButtonPress}
      >
        Press me please.
      </button>
      <span className='text-lg font-normal'>
        I have been pressed <strong className='underline font-bold'>{state}</strong> times
      </span>
    </div>
  )
}