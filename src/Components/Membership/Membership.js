import React , {useEffect,useRef} from "react";
import "../../App.css";
import Footer from "../Footer/Footer"
import './Membership.css'
import emailjs from 'emailjs-com';


function Membership() {
  const topContainer = useRef();
    useEffect(() => {
      topContainer.current.scrollIntoView({ block: "end", behavior: 'smooth' });
      }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ytqgg7y', 'template_l8zfg1m', e.target, 'T5MbXT3uasqd-OA3z')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  const sendMembership = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_la587t8', 'template_rwsodtf', e.target, 'LsjBjVjMkntTZqi78')
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
      <div className="Membership">
          <div className="members position-relative">
                  <img
                    src="https://wallpaper.dog/large/20522648.jpg"
                    alt=""
                    width="100%"
                    height="600"
                  />
                  <h1 className="img-tittle">For an Extraordinary Fly</h1>

           </div>

          <div className="memberCard">
          <div className="container">
            <h3 className='sm-heading' >Membership has it's Privileges & Last for an Eternity.</h3>
            <div className="row">
              <div className="col-md-6 memberCardLeft">
                <img 
                 src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" 
                 alt="" width="100%" height="398" />    
              </div>
              <div className="col-md-6 memberCardRight">
                    <h5>Benefits</h5>
                    <ul>
                        <li><i class="arrow right"></i> 24/7 dedicated personal advisor</li>
                        <li><i class="arrow right"></i> Add rates per every travel </li>
                        <li><i class="arrow right"></i> Free travel for the added rates</li>
                        <li><i class="arrow right"></i> Get exclusive offers for  travels</li>
                        <li><i class="arrow right"></i> Livestyle management</li>
                        <li><i class="arrow right"></i> Handling hotel arrangements</li>
                        <li><i class="arrow right"></i> Handling ticket reservations for events </li>
                    </ul>
              </div>
            </div>
          </div>
          </div>


{/* 
           <div className="container mt-5">
            <div className="card border-secondary">
              <div class="card-body text-secondary">
                    <ul>
                        <li>&rarr; 24/7 dedicated personal advisor</li>
                        <li>&rarr; Add rates per every travel </li>
                        <li>&rarr; Free travel for the added rates</li>
                        <li>&rarr; Get exclusive offers for  travels</li>
                        <li>&rarr; Livestyle management</li>
                        <li>&rarr; Handling hotel arrangements</li>
                        <li>&rarr; Handling ticket reservations for events </li>
                    </ul>
              </div>
              </div>
          </div>
        
      <div className="member">       
   
        <div className='row descirition mb-5'>
    <div className='col-md-6 desciritionTextb-Membership'>
        <p className='desciritionText-Membership' >Membership has it's  Privileges & Last for an Eternity.</p>
    </div>
    <div className='col-md-6'>
    <img  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" alt="" width="100%" height="500" />    
    </div>
    </div>
    </div> */}

    <div className="container-fluid flight">
                <form onSubmit={sendMembership}>
                <h3 className="sm-heading">Tells Us Your Travel Plans</h3>
                <div className="row">
                    <div className="flightInfo1 col-md-5">
                    <h5>Personal Information</h5><br />
                        <div className="row ">
                            <div className="col-md-12 d-flex flex-column">
                                <label>First Name*</label>
                                <input type="text" name="first_name" className="b-Input w-75 mt-1" placeholder="First Name " />
                            </div>
                            
                            <div className="col-md-12 d-flex flex-column mt-3">
                                <label>Last Name*</label>
                                <input type="text" name="last_name" className="b-Input w-75 mt-1" placeholder="Last Name " />
                            </div>
                        </div>

                        <div className="edit-margi">
                            <label>Contact*</label><br />
                            <input type="tel" className="b-Input w-75" placeholder="+923+++++++++" />
                        </div>

                        <div className="edit-margi">
                            <label>Email Address*</label><br />
                            <input type="text" email='email' name="email" className="b-Input w-75" placeholder="John@gmail.com" />
                        </div>
                    </div>
                    <div className="col-md-7 flightInfo2">
                    {/* <div className='flightInfo'> */}
                    <h5>Membersip Information</h5><br />
                     <div className="edit-margi">
                      <label>How Do You Wish To Be Reached? *</label>
                      <div className="" 
                      style={{textAlign: 'right',paddingRight:'50px'}}
                      >
                      <select className="reachedInquire" name="reached" id="">
                        <option value="call us">Call us </option>
                        <option value="email">Email</option>
                      </select>
                      </div>
                    </div>

                  <div className="edit-margin">
                  <label>Hometown</label>
                  <div 
                  style={{paddingLeft:"28px"}}
                  >
                  <select className="" name="" id="">
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                  </select>
                    <input className="countryInput" type="text" placeholder="" />
                  </div>
                  </div>
                  <div className="edit-margin">
                    <label>How often do you travel?</label>
                    <input className="emptyInput" type="text" placeholder="" />
                  </div>
                  <div className="mt-1">
                    <label style={{paddingRight:'70px'}}>What benefits of Membership are you most interested in?</label>
                    <input className="emptyInput" type="text" placeholder="" />
                  </div>

                  <div className="btnSend1">
                  <button className="buttonInputSend1 w-25" >Send</button>
                  </div>
                    </div>
                </div>  
                </form>
                </div>


    {/* NewLetter */}
    
              <div className="container-fluid newsletter">
                    <div className="row">
                        <div className="col-md-6 my-auto newsletterLeft">
                            <h3 className='sm-heading text-white'>Sign Up to Our Newsletter</h3>
                            <p className="p text-center text-white">
                                <b>We Respect Your Privacy and  it's  Our Priority.</b>
                            </p>
                        </div>
                        <div className="col-md-6 newsletterRight">
                        <form onSubmit={sendEmail}>

                            <div className='edit-margin'>
                                <label>Name*</label><br />
                                <input  className="b-Input w-100" name='to_name' type="text" required />
                            </div>

                            <div className='edit-margin'>
                                <label >Email Address*</label><br />
                                <input className="b-Input w-100" name='email' type="email" required />
                            </div>

                            <div className='butt-on'>
                                <button className='buttonInput' type="submit">Subscribe</button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>

    {/* <div className="firstForm-inquire ">
        <h2 className="headinng-Inquire p-1 m-5">We're with You Always</h2>
        <div className="inputs-Inquire">
        <div className="inputInquiry">
          <form onSubmit={sendMembership} >
          <h5 className="name-Inquire mt-3 ">Name *</h5>
         
          <input
            className="firstInput-Inquire my-3 "
            type="text"
            name="first_name"
            placeholder="First Name"
          />
          <input
            className="lastInput-Inquire"
            type="text"
            name="last_name"
            placeholder="Last Name"
          />
          <br />
          <h5 className="name-Inquire">Email Address *</h5>
          <input className="emailInput-Inquire" name='email' type="text" placeholder="" />
          <br />
          <h5 className="name-Inquire pt-5">Contact Number *</h5>
          <input className="emailInput-Inquire" type="text" name='contact_number' placeholder="" required />
          <br />
          <br />
       

          <p className="reached-inquire p-1">How Do You Wish To Be Reached? *</p>
          <select className="reached-inquire mx-5 p-1" name="reached" id="">
            <option value="call us">call us </option>
            <option value="email">email</option>
          </select>

          <br />
          <h6 className="hometown">Hometown</h6>
          <div className="row">
            <div className="col">

            </div>
            <div className="col">

            </div>
          </div>
          <div 
          style={{paddingLeft:"40px"}}
          >
          <select className="" name="" id="">
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
            <input className="countryInput" type="text" placeholder="" />
          </div>
            <p className="reached-inquire pt-5 p-1">How often do you travel?</p>
            <input className="emptyInput" type="text" placeholder="" />
            <p className="reached-inquire p-1">What benefits of Membership are you most interested in?</p>
            <input className="emptyInput" type="text" placeholder="" />

          <div className=" button-inquire">
          <button className="buttonin-inquire" >Send</button>
          </div>
          </form>
        </div>
        </div>
      </div>
     */}

        {/* <h2 className="headinng-Inquire p-5 mt-5">Sign Up to Our  Newsletter</h2>
        <div className="inputs-Inquire mt-5">
        <h3 className="headinng0-Inquire p-5">We Respect Your Privacy and  it's  Our Priority</h3>
        <form onSubmit={sendEmail}>

        <h5 className="name-Inquire">Name *</h5>
          <input className="emailInput-Inquire" name='to_name' type="text" placeholder="" />
          <br />
          <h5 className="name-Inquire pt-3">Email Address *</h5>
          <input className="emailInput-Inquire"  name='email' type="text" placeholder="" />
          <div className="button-inquire">
          <button className="buttonin-inquire"> Subscribe </button>
          <input className="button buttonin-inquire" type='submit' value="Subscribe"></input>
          </div>

        </form>
        </div> */}

      </div>
      <Footer />
    </>
  );
}

export default Membership;
