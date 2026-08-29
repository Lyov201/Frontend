import { useEffect, useState } from "react"
import type { CounterType } from "../type"

type CounterProps = {
    counter: CounterType
    onDelete: (counterId: number) => void
}

export function Counter({ counter, onDelete }: CounterProps) {
    const [count, setCount] = useState<number>(counter.startTime);
    const [isPaused, setIsPaused] = useState<boolean>(false);

    const minutes = Math.floor(count / 60);
    const seconds = count % 60;

    const showmin = `${minutes}`.padStart(2, "0");
    const showsec = `${seconds}`.padStart(2, "0");

    const togglePause = () => {
        setIsPaused(prev => !prev);
    };

    const pressStop = () => {
        setCount(counter.startTime);
        setIsPaused(false);
    }

    useEffect(() => {
        if (isPaused) {
            return;
        }

        const interval = setInterval(() => {
            setCount(prev => {
                if (prev <= counter.endTime) {
                    clearInterval(interval);
                    return counter.endTime;
                }

                return prev - 1;
            });
        }, 1000);

        return () => {
            clearInterval(interval);
        }

    }, [isPaused, counter.endTime]);

    return (
        <div className="group flex min-h-[240px] flex-col justify-between rounded-3xl border border-slate-200/80 bg-white/90 p-4 shadow-[0_16px_36px_rgba(15,23,42,0.08)] ring-1 ring-slate-100 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_40px_rgba(15,23,42,0.12)] sm:p-5">
            <div className="mb-5 flex items-center justify-between gap-3">
                <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Timer
                </span>
                <span className="text-xs font-medium text-slate-400">
                    {isPaused ? 'Paused' : 'Running'}
                </span>
            </div>

            <div className="mb-6 flex flex-1 items-center justify-center">
                <div className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-5 shadow-inner shadow-slate-200/60">
                    <div className="font-mono text-4xl font-bold tracking-[0.2em] text-slate-900 sm:text-5xl">
                        {`${showmin}:${showsec}`}
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
                <button
                    className="inline-flex h-11 min-w-[90px] flex-1 items-center justify-center rounded-xl border border-sky-200 bg-sky-500 px-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-sky-600 hover:shadow-md active:translate-y-0.5 active:bg-sky-700"
                    onClick={togglePause}
                >
                    {isPaused ? "Play" : "Pause"}
                </button>

                <button
                    className="inline-flex h-11 min-w-[90px] flex-1 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 px-3 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:bg-slate-200 hover:shadow-sm active:translate-y-0.5 active:bg-slate-300"
                    onClick={pressStop}
                >
                    Stop
                </button>

                <button
                    className="inline-flex h-11 min-w-[90px] flex-1 items-center justify-center rounded-xl border border-rose-200 bg-rose-50 px-3 text-sm font-semibold text-rose-600 shadow-sm transition-all duration-200 hover:bg-rose-100 hover:shadow-sm active:translate-y-0.5 active:bg-rose-200"
                    onClick={() => onDelete(counter.counterId)}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

