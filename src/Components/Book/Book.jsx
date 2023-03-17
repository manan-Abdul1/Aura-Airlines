import React , {useEffect,useRef} from "react";
import "./Book.css";
import Footer from "../Footer/Footer";
import emailjs from 'emailjs-com';


function Book() {
    const topContainer = useRef();
    useEffect(() => {
      topContainer.current.scrollIntoView({ block: "end", behavior: 'smooth' });
      }, []);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ytqgg7y', 'template_rj54jw8', e.target, 'T5MbXT3uasqd-OA3z')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };
    return (
        <>
      <div ref={topContainer}/>

            <div>
                <div className="video-edit" >

                {/* <video width="100%" height="460" controls>
                    <source src="https://www.youtube.com/watch?v=ZbIzZD_YNsA" type="video/mp4"/>
                    <source src="https://www.youtube.com/watch?v=ZbIzZD_YNsA" type="video/ogg"/>
                        Your browser does not support the video tag.
                </video> */}
                <iframe width="100%" height="460" src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>
                </div>
                <div className="container-fluid flight">
                <form onSubmit={sendEmail}>
                <h3 className="sm-heading">Tells Us Your Travel Plans</h3>
                <div className="row">
                    <div className="flightInfo1 col-md-5">
                    <h5>Personal Information</h5><br />
                        <div className="row ">
                            <div className="col-md-12 d-flex flex-column">
                                <label>First Name</label>
                                <input type="text" name="first_name" className="b-Input w-75 mt-1" placeholder="First Name " />
                            </div>
                            
                            <div className="col-md-12 d-flex flex-column mt-3">
                                <label>Last Name</label>
                                <input type="text" name="last_name" className="b-Input w-75 mt-1" placeholder="Last Name " />
                            </div>
                        </div>

                        <div className="edit-margin">
                            <label>Phone Number</label><br />
                            <input type="tel" className="b-Input w-75" placeholder="+923+++++++++" />
                        </div>

                        <div className="edit-margin">
                            <label>Email Address</label><br />
                            <input type="text" email='email' name="email" className="b-Input w-75" placeholder="John@gmail.com" />
                        </div>
                    </div>
                    <div className="col-md-7 flightInfo2">
                    {/* <div className='flightInfo'> */}
                    <h5>Flight Information</h5><br />
                        <label className=""><input type="radio" className="mx-1" />One Way</label>
                        <label className="mx-2"><input type="radio" className="mx-1" />Round Trip</label>

                        <div className="edit-margin">
                            <label>Date of Departure</label><br />
                            <input name="date" type="date" className="b-Input w-75" />
                        </div>

                        <div className="edit-margin">
                            <label>Departure City</label><br />
                            <select name="departure_city" className="b-Input w-75">
                                <option>Galle</option>
                                <option>Tangalle</option>
                                <option>Koggala</option>
                                <option>Yala</option>
                                <option>Wilpattu</option>
                                <option>Udawalawe</option>
                                <option>Trincomalee</option>
                                <option>Batticaloa</option>
                                <option> Arugam Bay</option>
                                <option>Jaffna</option>
                                <option>Vavuniya</option>
                                <option>NuwraEliya</option>
                                <option>Kandy</option>
                                <option> Norwood</option>
                                <option>Sigiriya</option>
                                <option>Anuradhapura</option>
                                <option>Kataragama</option>
                            </select>
                        </div>

                        <div className="edit-margin">
                            <label>Destination City</label><br />
                            <select name="destination_city" className="b-Input w-75">
                                <option>Galle</option>
                                <option>Tangalle</option>
                                <option>Koggala</option>
                                <option>Yala</option>
                                <option>Wilpattu</option>
                                <option>Udawalawe</option>
                                <option>Trincomalee</option>
                                <option>Batticaloa</option>
                                <option>Arugam Bay</option>
                                <option>Jaffna</option>
                                <option>Vavuniya</option>
                                <option>NuwraEliya</option>
                                <option>Kandy</option>
                                <option>Norwood</option>
                                <option>Sigiriya</option>
                                <option>Anuradhapura</option>
                                <option>Kataragama</option>
                                <option>Koggala</option>
                                <option>Mattala</option>
                                <option>Mattala/Weerawila</option>
                                <option>Anuradhapura/Palavi</option>
                                <option>Mattala/Ratnapura</option>
                                <option>Minneriya</option>
                                <option>Ampara/Minneriya</option>
                                <option>Ampara</option>
                                <option>Palali</option>
                                <option>Diyatalawa</option>
                                <option>Kegalle/Digana</option>
                                <option>Ginigatthena</option>
                                <option>Minneriya/Dambulla</option>
                                <option>Vavuniya/Sigiriya</option>
                                <option>Mattala/Weerawila</option>
                            </select>
                        </div>

                        <div className="edit-margin">
                            <label>No of Passengers</label><br />
                            <input  name='passengers' type="number" className="b-Input w-75" placeholder="0" />
                        </div>
                        <div className='btnSend'>
                        <button className='buttonInputSend' type="submit" >Submit</button>
                        </div> 
                        {/* </div> */}
                    </div>
                </div>  
                </form>
                </div>

                <div className="row round-edit">
                    <div className="col-md-3"><img className="round-img " src="https://media.gettyimages.com/id/1215188245/photo/woman-walking-the-aisle-on-plane.jpg?s=612x612&w=0&k=20&c=gJXxlDgznGxYH3APvaHBwUcgEuuTWGsHZSuqqt-nu5E=" alt="" /></div>
                    <div className="col-md-3"><img className="round-img " src="https://images.squarespace-cdn.com/content/v1/5a05c910017db256055decc2/1d112a62-9ee1-4c19-a86a-ef7b517e1cd1/Private%2BJet%2BMembership.jpeg?format=500w" alt="" /></div>
                    <div className="col-md-3"><img className="round-img " src="https://images.squarespace-cdn.com/content/v1/5a05c910017db256055decc2/10fd4be2-4307-4a3a-88be-a33bbf3d35d4/%2314HOWTHE1%25.jpg?format=750w" alt="" /></div>
                    <div className="col-md-3"><img className="round-img " src="https://images.squarespace-cdn.com/content/v1/5a05c910017db256055decc2/6edd37aa-a363-4cb9-a721-3f4f532788dc/Bigstock_+103020331+-+Jet+Set+Power+Lunch.jpg?format=750w" alt="" /></div>
                </div>
                
            </div>
            <Footer />
        </>
    );
}

export default Book;