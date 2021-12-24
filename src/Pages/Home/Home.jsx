import Adds from '../../Components/Adds/Adds';
import Categories from '../../Components/Categories/Categories';
import Products from '../../Components/Products/Products';
import $ from 'jquery';
import './Home.scss'

function Home() {
    $(window).on('load', function () {
        $('.preloader').fadeOut();
        $('#preloader').delay(550).fadeOut('slow');
        $('body').delay(450).css({
            'overflow': 'visible'
        });
    });
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('.main-header').addClass('fixed-menu');
        } else {
            $('.main-header').removeClass('fixed-menu');
        }
    });
    return (
        <>
            <Categories />
            <Adds />
            <Products />
        </>
    )
}

export default Home;
