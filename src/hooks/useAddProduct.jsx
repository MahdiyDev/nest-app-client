import { useState } from "react";

function useAddProduct() {
    const [ product, setProduct ] = useState([])
    if (product.length) {
        window.localStorage.setItem('product', JSON.stringify(product))
    } else {
        window.localStorage.removeItem('product')
    }
    return { product, setProduct }
}

export default useAddProduct;
