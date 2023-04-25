
import "./publik.css"
import Boku from "../assets/imgs/boku.jpg"
import Boku2 from "../assets/imgs/boku2.jpg"
import Boku3 from "../assets/imgs/boku3.jpg"
import Boku4 from "../assets/imgs/boku4.jpg"
import Boku5 from "../assets/imgs/boku5.jpg"
import Boku6 from "../assets/imgs/boku6.jpg"
import Boku7 from "../assets/imgs/boku7.jpg"
import telegram from "../assets/imgs/telegram-svgrepo-com.svg"
import inistagram from "../assets/imgs/inis.jpg"


const Publik = () => {

    return (
        <>

            <div className="containers">

                <div className="header pt-5 ps-5 d-flex aligen-items-center text-center">

                    <h1 className="headr_title text-light ps-3 ">
                        Boku <strong className="text-light">Investing</strong>
                    </h1>
                    <nav className=" pt-4 ms-auto">

                        <button className="text-center log shadow-lg" >  Log in</button>
                        <button className=" ms-3 sing"> Sing up</button>
                    </nav>

                </div>

                <div className="mane text-light text-center">

                    <h1>Welcome  Boku Investing <br />Campani</h1>
                    <p className="maine_text fs-4 ">Yuqori sifatli zamon talablariga javob bera oladigan.<br />
                        Sizga komfort hayotni tag'tim eta oladigan.<br />Qurilish kampaniasi  </p>
                </div>

            </div>


            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                </ol>
                <div class="carousel-inner text-center bg-info pt-3 pb-3">

                    <div class="carousel-item">
                        <img src={Boku5} alt="" width={'1000px'} height={'600px'} />
                    </div>
                    <div class="carousel-item">
                        <img src={Boku3} alt="" width={'1000px'} height={'600px'} />
                    </div>
                    <div class="carousel-item active">
                        <img src={Boku4} alt="" width={'1000px'} height={'600px'} />
                    </div>
                    <div class="carousel-item">
                        <img src={Boku2} alt="" width={'1000px'} height={'600px'} />
                    </div>
                    <div class="carousel-item">
                        <img src={Boku7} alt="" width={'1000px'} height={'600px'} />
                    </div>
                    <div class="carousel-item">
                        <img src={Boku6} alt="" width={'1000px'} height={'600px'} />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

            <footer className="bg-dark">

                <div className="header pt-5 ps-5 d-flex aligen-items-center text-center bg-dark pb-5">

                    <h1 className="headr_title text-light ps-3 ">
                        Boku <strong className="text-ligh">Investing</strong>
                    </h1>
                    <nav className=" pt-4 ms-auto">
                        <strong className="text-info me-2">Aloqa</strong>
                        <a href="tel:+5626868"> tel:+998975626868</a>
                    </nav>

                </div>
                <div className="tarmoqlar d-flex me-5 pe-5 pb-5">
                    <h2 className="text-light footer_title">
                        Ijtimoiy Tarmoqlar
                    </h2>
                    <a href="https://t.me/Inomjon0330" className="d-inline-blosk ms-auto me-3">
                        <img src={telegram} alt="" width="50" height="50" />
                    </a>
                    <a href="https://t.me/Zafar3858">
                        <img className="bg-transfarent ms-avto" src={inistagram} alt="" width="50" height="50" />
                    </a>

                </div>

                
            </footer>





        </>
    )
}
export default Publik