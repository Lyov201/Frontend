import type { CounterType } from "../type";
import { Counter } from "./counter";

type CounterListProps = {
    counters: CounterType[]
    onDelete: (counterId: number) => void
}


export function CounterList({counters, onDelete}: CounterListProps) {

    return (
        <>
            {counters.map(counter => (
                <Counter
                    
                    key={counter.counterId}
                    counter={counter}
                    onDelete={onDelete}
                />
            ))}
        </>
    );
}