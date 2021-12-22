import { useEffect, useState } from "react";
import url from "../assets/url";

function useProducts() {
    const [ products, setProducts ] = useState([])

    useEffect(() => {
        fetch(`${url}/products`)
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return products
}

export default useProducts;
