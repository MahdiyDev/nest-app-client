import { Link } from "react-router-dom";
import img from '../../images/categories_img_01.jpg'
import img1 from '../../images/categories_img_02.jpg'
import img2 from '../../images/categories_img_03.jpg'

function Categories() {
    return (
        <div className="categories-shop">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div className="shop-cat-box">
                            <img className="img-fluid" src={img} alt="" />
                            <Link className="btn hvr-hover" to="#">Lorem ipsum dolor</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div className="shop-cat-box">
                            <img className="img-fluid" src={img1} alt="" />
                            <Link className="btn hvr-hover" to="#">Lorem ipsum dolor</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div className="shop-cat-box">
                            <img className="img-fluid" src={img2} alt="" />
                            <Link className="btn hvr-hover" to="#">Lorem ipsum dolor</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories;
