import './Header.scss'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';

function Header() {
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
                            <li className="search"><Link to="#"><i className="fa fa-search"></i></Link></li>
                            <li className="side-menu">
                                <Link to="#">
                                    <i className="fa fa-shopping-bag"></i>
                                    <span className="badge">3</span>
                                    <p>My Cart</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="side">
                    <Link to="#" className="close-side"><i className="fa fa-times"></i></Link>
                    <li className="cart-box">
                        <ul className="cart-list">
                            <li>
                                <Link to="#" className="photo"><img src="images/img-pro-01.jpg" className="cart-thumb"
                                        alt="" /></Link>
                                <h6><Link to="#">Delica omtantur </Link></h6>
                                <p>1x - <span className="price">$80.00</span></p>
                            </li>
                            <li>
                                <Link to="#" className="photo"><img src="images/img-pro-02.jpg" className="cart-thumb"
                                        alt="" /></Link>
                                <h6><Link to="#">Omnes ocurreret</Link></h6>
                                <p>1x - <span className="price">$60.00</span></p>
                            </li>
                            <li>
                                <Link to="#" className="photo"><img src="images/img-pro-03.jpg" className="cart-thumb"
                                        alt="" /></Link>
                                <h6><Link to="#">Agam facilisis</Link></h6>
                                <p>1x - <span className="price">$40.00</span></p>
                            </li>
                            <li className="total">
                                <Link to="#" className="btn btn-default hvr-hover btn-cart">VIEW CART</Link>
                                <span className="float-right"><strong>Total</strong>: $180.00</span>
                            </li>
                        </ul>
                    </li>
                </div>
            </nav>
        </header>
        <div className="top-search">
            <div className="container">
                <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-search"></i></span>
                    <input type="text" className="form-control" placeholder="Search" />
                    <span className="input-group-addon close-search"><i className="fa fa-times"></i></span>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header;
