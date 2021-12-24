import useProducts from '../../hooks/useProducts'
import img from '../../images/img-pro-01.jpg'

function Products() {
    const products = useProducts()
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
                <div className="row">
                    <div className="col-lg-12">
                        <div className="special-menu text-center">
                            <div className="button-group filter-button-group">
                                <button className="active" data-filter="*">All</button>
                                <button data-filter=".top-featured">Top featured</button>
                                <button data-filter=".best-seller">Best seller</button>
                            </div>
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
                                                <ul>
                                                    <li><a href="#" data-toggle="tooltip" data-placement="right"
                                                            title="View"><i className="fas fa-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="tooltip" data-placement="right"
                                                            title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                                                    <li><a href="#" data-toggle="tooltip" data-placement="right"
                                                            title="Add to Wishlist"><i className="far fa-heart"></i></a>
                                                    </li>
                                                </ul>
                                                <a className="cart" href="#">Add to Cart</a>
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
