import useProducts from '../../hooks/useProducts';
import './Home.scss'

function Home() {
    const products = useProducts()

    return (
        <>
            <div className="homeContainer">
                {products.length ?
                    <ul>
                        {products.map(p => {
                            return (
                                <li key={p.product_uid}>
                                    <h3>
                                        Product Name: {p.product_name}
                                    </h3>
                                    <small>
                                        Product Price: {p.product_price}
                                    </small>
                                </li>
                            )
                        })}
                    </ul>
                : []}
            </div>
        </>
    )
}

export default Home;
