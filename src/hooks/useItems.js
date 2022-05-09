import { useEffect, useState } from 'react';

const useItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://young-eyrie-17132.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);
    return [items, setItems];
}


export default useItems;