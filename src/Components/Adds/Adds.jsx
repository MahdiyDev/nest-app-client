import img from '../../images/add-img-01.jpg'
import img1 from '../../images/add-img-02.jpg'

function Adds() {
    return (
        <div className="box-add-products">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="offer-box-products">
                            <img className="img-fluid" src={img} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="offer-box-products">
                            <img className="img-fluid" src={img1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Adds;
