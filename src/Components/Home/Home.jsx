import React, {useEffect, useRef} from "react";
import "./Home.css";
import Footer from "../Footer/Footer";

function Home() {
    const topContainer = useRef();
    const aboutUsContainer = useRef();
    const comeFlyUsContainer = useRef();

        useEffect(() => {
          topContainer.current.scrollIntoView({ block: "end", behavior: 'smooth' });
          setTimeout(() => {
              aboutUsContainer.current.style.opacity = 1;
          }, 800);
          setTimeout(() => {
            comeFlyUsContainer.current.style.opacity = 1;
          }, 4000);
          }, []);

    return (
        <div>
        <div ref={topContainer} />
            {/* <div className="main-heading">
                <h1 className="main-heading">Welcome</h1>
            </div> */}
            <div
                id="carouselExampleControls"
                className="carousel slide  carsouel1-edit"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item ">
                        <img
                            src="https://i.ytimg.com/vi/maufDGFgCZo/maxresdefault.jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item ">
                        <img
                            src="https://i.pinimg.com/originals/23/ed/d8/23edd8ffb4cea75191489e1dc9c598f2.jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item active">
                        <img
                            src="https://wallpaperaccess.com/full/254381.jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


         {/* About US Container */}
            
            <h3 className="sm-heading mx-auto font-weight-bold display-6">About Us</h3>
            <div className="container aboutUS m-5" ref={aboutUsContainer}>
                <div className="row">
                    <div className="col-md-6">
                   
                    <div className="row">
                        <div className="col-md-6">
                        <img
                            className="w-100"
                            src="https://wallpaper.dog/large/10792457.jpg"
                            height='400px'
                        />
                        </div>
                        <div className="col-md-6 d-flex flex-column">
                        <img className="w-100"
                            src="https://wallpaper.dog/large/10792479.jpg"  
                            height='195px'
                            />
                            <img
                            className="mt-1 w-100"
                            src="https://wallpaper.dog/large/10792493.jpg"
                            alt=""
                            height='200px'
                        />
                        </div>
                    </div>

                    </div>
                    <div className="col-md-6 my-auto">
                        <p className="text-part1">
                        Aura Airlines is a concept conglomerate in the Airline Industry in Sri Lanka which was founded in 2018 and dedicates its approach mainly 
                        to uplift Airline services solely for the benefit of the entire community. Private & Business Airline, as an exclusive platform which customers 
                        can benefit from in the fields of Leisure, Corporate and VIP transport solutions, and service for both domestic and international market.

                    </p>
                    <div className="row button-text" >
                        <div className="col-md-4 ">
                            <button className="buttonInput1 bg-gradient" type="submit" value="Subscribe">
                                Inquire Now
                            </button>
                        </div>
                        <div className="col-md-4">
                            <button className="buttonInput2 bg-gradient" type="submit" value="Subscribe">
                                Book Now
                            </button>
                        </div>
                    </div>
                    </div>
                </div>
             </div>


            {/* <div className="text-part container">
                <p className="text-center container text-part1">
                    Aura Airlines is a concept conglomerate in the Airline Industry in Sri Lanka which was founded in 2018 and dedicates its approach mainly 
                    to uplift Airline services solely for the benefit of the entire community. Private & Business Airline, as an exclusive platform which customers 
                    can benefit from in the fields of Leisure, Corporate and VIP transport solutions, and service for both domestic and international market.

                </p>
                <div className="row button-text text-center" >
                    <div className="col-md-2 my-auto">
                        <button className="buttonInput bg-gradient" type="submit" value="Subscribe">
                            Inquire Now
                        </button>
                    </div>
                    <div className="col-md-2 my-3">
                        <button className="buttonInput bg-gradient" type="submit" value="Subscribe">
                            Book Now
                        </button>
                    </div>
                </div>
            </div> */}
            {/* AboutUS container End */}

{/* Come Fly With us Container Start */}
            {/* 1 */}
            <div className="come-fly-container" ref={comeFlyUsContainer}>
            <h3 className="sm-heading mx-auto font-weight-bold display-6">Come fly with us!</h3>
            <div className="row row-edit">
                <div className="col-md-5 mx-3">
                    <img
                        className="d-block "
                        src="https://media.istockphoto.com/id/1332501286/photo/aerial-flying-airplane-and-sky-landscape-close-up.jpg?b=1&s=170667a&w=0&k=20&c=F3PSMzB2x-pI-ctwUEGTY4jvnRYIi3PgCheBiCu8Y7Q="
                        alt=""
                        height='330px'
                    />
                </div>
                <div className="col-md-5 mx-3 my-auto">
                    <p>
                        <h5>Our Services</h5>
                        <ul>
                            <li><i class="arrow right"></i> Corporate VIP/VVIP Client</li>
                            <li><i class="arrow right"></i> Passenger Charter</li>
                            <li><i class="arrow right"></i> Leisure</li>
                            <li><i class="arrow right"></i> Aerial Work</li>
                            <li><i class="arrow right"></i> Branding and Advertising</li>
                            <li><i class="arrow right"></i> Medical Evacuation</li>
                            <li><i class="arrow right"></i> Special Events-Product Launches</li>
                            <li><i class="arrow right"></i> Flower Drops</li>
                            <li><i class="arrow right"></i> Banner Towing/ Flag Displays</li>
                            <li><i class="arrow right"></i> Wedding Photography</li>
                            <li><i class="arrow right"></i> Celebrations</li>
                            {/* <li>Anniversary Celebrations</li>
                            <li>Birthday Celebrations</li>
                            <li>Any other as required</li> */}
                        </ul>
                    </p>
                </div>
            </div>

            {/* 2 */}
            <div className="row row-edit">
                <div className="col-md-5 mx-3">
                    <p>
                        <h5>Why Aura Airlines Charter?</h5>
                        <ul>
                        <i class="arrow right"></i> Island wide Coverage <br />
                        <i class="arrow right"></i> Anytime, Anywhere <br />
                        <i class="arrow right"></i>  Available 24/7/365 <br />
                        <i class="arrow right"></i>  Best value for money <br />
                        <i class="arrow right"></i>  Ensure Safety, Security and Privacy <br />
                        <i class="arrow right"></i>  Full of Comfort, Luxury and Convenience <br />
                        <i class="arrow right"></i>   To fly happily <br />
                        <i class="arrow right"></i>   Guaranteed customer satisfaction <br />
                        <i class="arrow right"></i>   Preeminent and Personalized Service <br />
                        </ul>
                    </p>
                </div>
                <div className="col-md-5 mx-3">
                    <img
                        className="d-block w-100 "
                        src="https://images.unsplash.com/photo-1566822777822-0b43388beaba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                        alt=""
                        height='330px'
                    />
                </div>
            </div>

            {/* 3 */}
            <div className="row row-edit">
                <div className="col-md-5 mx-3">
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1539201299177-2af0fae3d77f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                        alt=""
                        height='330px'

                    />
                </div>
                <div className="col-md-5 mx-3 my-auto">
                    <h5>Safety</h5>
                    <p>
                    Aura Airlines considers safety as its prime consideration and therefore has implemented safety management systems (SMS) throughout our operation both horizontally and vertically.Highly experienced crew will provide extra support with safety ensuring health and personal welfare of our valuable clients.

                    </p>
                </div>
            </div>

            {/* 4 */}
            <div className="row row-edit ">
                <div className="col-md-5 mx-3 my-auto">
                    <h5>Dedication</h5>
                    <p>
                    Our product reflects and improves the quality of life with the mission 
                    of the airline to make air travel an integral part of the tourism industry
                    and Aura Airlines to be the most flexible, reliable, and safest mode of
                    transport for domestic air travel among tourists, corporate clients, and locals.
                    </p>
                </div>
                <div className="col-md-5 mx-3">
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1529074963764-98f45c47344b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nzl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                        alt=""
                        height='330px'
                    />
                </div>
            </div>
           </div>


{/* Article start */}






<h3 className="sm-heading mx-auto pt-5 font-weight-bold display-6">Articles</h3>
<div className="pb-5">

<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
        <div className="carousel-item active">
            <img src="https://wallpaper.dog/large/20522603.jpg" className="d-block mx-auto img-fluid" style={{height: "500px", width:'100%', objectFit: "cover"}} alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="https://wallpaper.dog/large/20522590.jpg" 
            className="d-block mx-auto img-fluid" style={{height: "500px", width:'100%', objectFit: "cover"}} alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="https://wallpaper.dog/large/20522582.jpg"
             className="d-block mx-auto img-fluid" style={{height: "500px", width:'100%', objectFit: "cover"}} alt="..."/>
            </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>


{/* Articles end */}




            {/* <h3 className="sm-heading mx-auto">Articles</h3>
            <div className="row row-edit">
                <div className="col-md-3 ">
                    <img
                        className="d-block w-100 h-50 "
                        src="https://wallpaper.dog/large/10792407.jpg"
                        alt=""
                    />
                </div>

                <div className="col-md-3">
                    <img
                        className="d-block w-100 h-50"
                        src="https://images.unsplash.com/photo-1499063078284-f78f7d89616a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                        alt=""
                    />
                </div>

                <div className="col-md-3">
                    <img
                        className="d-block w-100 h-50"
                        src="https://images.unsplash.com/photo-1583150647472-d239652a12f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                        alt=""
                    />
                </div>
            </div> */}
            <Footer />
        </div>
    );
}
export default Home;
