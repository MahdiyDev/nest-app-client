import Adds from '../../Components/Adds/Adds';
import Categories from '../../Components/Categories/Categories';
import Products from '../../Components/Products/Products';
import './Home.scss'

function Home() {
    return (
        <>
            <Categories />
            <Adds />
            <Products />
        </>
    )
}

export default Home;
