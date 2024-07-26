import { useState } from "react";

export function useDebounce(callback: (value: any, _arg?: any) => Promise<any> | any, delay: number) {
    const [timerId, setTimerId] = useState<NodeJS.Timeout>();

    return (value: any, _arg?: any) => {
        clearTimeout(timerId);
        const id = setTimeout(async () => {
            await callback(value, _arg);
        }, delay);
        setTimerId(id);
    };
}
