import { useState, useCallback } from "react";

export default function useToggle(value: boolean): [boolean, any] {
    const [toggle, setToggle] = useState<boolean>(value)
    const handleToggle = useCallback(() => setToggle(value => !value), []);
    return [toggle, handleToggle];
}