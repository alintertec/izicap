import { useState, useCallback } from "react";

export default function useComponent(value: string): [string, any] {
    const [component, setComponent] = useState<string>(value)
    const handleComponent = useCallback((value: string) => setComponent(value), []);
    return [component, handleComponent];
}