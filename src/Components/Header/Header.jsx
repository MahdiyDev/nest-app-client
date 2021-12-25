import './Header.scss'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {
    const [ searchModal, setSerachModal ] = useState({
        display: "none"
    })
    const [ products, setProducts ] = useState([])
    const [ cart, setCart ] = useState('')
    
    const searchClick = () => {
        if (searchModal.display === 'none') {
            setSerachModal({
                display: "block"
            })
        } else {
            setSerachModal({
                display: "none"
            })
        }        
    }
    
    const cartClick = () => {
        const product = window.localStorage.getItem('product')
        if (product) {
            setProducts(JSON.parse(product))
        }
        if (!cart) {
            setCart('on')            
        } else {
            setCart('')
        }
    }

    return (
        <>
        <header className="main-header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
                <div className="container">
                    <div className="navbar-header">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu"
                            aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa fa-bars"></i>
                        </button>
                        <Link className="navbar-brand" to="index.html"><img src={logo} className="logo" alt="" /></Link>
                    </div>
                    <div className="collapse navbar-collapse" id="navbar-menu">
                        <ul className="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp">
                            <li className="nav-item active"><Link className="nav-link" to="index.html">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="about.html">About Us</Link></li>
                            <li className="dropdown">
                                <Link to="#" className="nav-link dropdown-toggle arrow" data-toggle="dropdown">SHOP</Link>
                                <ul className="dropdown-menu">
                                    <li><Link to="shop.html">Sidebar Shop</Link></li>
                                    <li><Link to="shop-detail.html">Shop Detail</Link></li>
                                    <li><Link to="cart.html">Cart</Link></li>
                                    <li><Link to="checkout.html">Checkout</Link></li>
                                    <li><Link to="my-account.html">My Account</Link></li>
                                    <li><Link to="wishlist.html">Wishlist</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item"><Link className="nav-link" to="gallery.html">Gallery</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="contact-us.html">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="attr-nav">
                        <ul>
                            <li className="search"><Link to="#" onClick={searchClick}><i className="fa fa-search"></i></Link></li>
                            <li className="side-menu">
                                <Link to="#" onClick={cartClick}>
                                    <i className="fa fa-shopping-bag"></i>
                                    <span className="badge">{products ? products.length : 0}</span>
                                    <p>My Cart</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={`side ${cart}`}>
                    <Link to="#" className="close-side" onClick={() => setCart('')} ><i className="fa fa-times"></i></Link>
                    <li className="cart-box">
                        {products.length ? 
                            <ul className="cart-list">
                                {products.map(p => {
                                    return (
                                        <li key={p.product_name}>
                                            <Link to="#" className="photo"><img src="images/img-pro-01.jpg" className="cart-thumb"
                                                    alt="" /></Link>
                                            <h6><Link to="#">{p.product_name}</Link></h6>
                                            <p><span className="price">{p.product_price}</span></p>
                                        </li>
                                    )
                                })}
                            </ul>
                        : []}
                    </li>
                </div>
            </nav>
        </header>
        <div className="top-search" style={searchModal} >
            <div className="container">
                <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-search"></i></span>
                    <input type="text" className="form-control" placeholder="Search" />
                    <span className="input-group-addon close-search" onClick={() => setSerachModal({ display: 'none' })}><i className="fa fa-times"></i></span>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header;
