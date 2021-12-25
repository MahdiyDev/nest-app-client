import { Link } from 'react-router-dom'
import useAddProduct from '../../hooks/useAddProduct'
import useProducts from '../../hooks/useProducts'
import img from '../../images/img-pro-01.jpg'
import './Products.scss'

function Products() {
    const products = useProducts()
    const { product, setProduct } = useAddProduct()
    return (
        <>
        <div className="products-box">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-all text-center">
                            <h1>Fruits & Vegetables</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
                        </div>
                    </div>
                </div>
                <div className="row special-list">
                    {products.length ?
                        products.map(p => {
                            return (
                                    <div className="col-lg-3 col-md-6 special-grid best-seller" key={p.product_uid}>
                                        <div className="products-single fix">
                                            <div className="box-img-hover">
                                                <div className="type-lb">
                                                    <p className="sale">Sale</p>
                                                </div>
                                                <img src={img} className="img-fluid" alt="Image" />
                                                <div className="mask-icon">
                                                    <Link className="cart" to="" onClick={() => setProduct([p, ...product])} >Add to Cart</Link>
                                                </div>
                                            </div>
                                            <div className="why-text">
                                                <h4>{p.product_name}</h4>
                                                <h5> ${p.product_price}</h5>
                                            </div>
                                        </div>
                                    </div>
                            )
                        })
                        : []}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products;
