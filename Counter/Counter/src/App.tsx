import { useState } from 'react'
import { Counter } from './Components/counter'
import type { CounterType } from './type'

const initialCounters: CounterType[] = [
    {
        counterId: 1,
        startTime: 600,
        endTime: 0,
        completed: false
    },
    {
        counterId: 2,
        startTime: 500,
        endTime: 0,
        completed: false
    },
    {
        counterId: 3,
        startTime: 400,
        endTime: 0,
        completed: false
    },
    {
        counterId: 4,
        startTime: 300,
        endTime: 0,
        completed: false
    },
    {
        counterId: 5,
        startTime: 200,
        endTime: 0,
        completed: false
    }
];

function App() {
  const [counters, setCounters] = useState<CounterType[]>(
    initialCounters
  )

  const deleteCounter = (counterID: number) => {
    setCounters(prev =>
      prev.filter(counter => counter.counterId !== counterID)
    );
  }

  return (
    <div className="min-h-screen bg-slate-100/90 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">
              Overview
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Timer Dashboard
            </h1>
          </div>

          <div className="hidden rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-sm font-medium text-slate-600 shadow-sm backdrop-blur-sm sm:block">
            {counters.length} active
          </div>
        </header>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {counters.map(counter => (
            <Counter
              key={counter.counterId}
              counter={counter}
              onDelete={deleteCounter}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App

