import { useEffect, useState } from "react"
import React from 'react';
const useItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('items.json').then(res => res.json()).then(data => setItems(data))
    }, [])
    return [items, setItems]
};
export default useItems;