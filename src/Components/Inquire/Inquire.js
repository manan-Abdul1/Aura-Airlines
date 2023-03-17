import React , {useEffect,useRef} from "react";
import "../../App.css";
import Footer from "../Footer/Footer"
import './Inquire.css';
import emailjs from 'emailjs-com';

function Inquire() {

  const topContainer = useRef();
  useEffect(() => {
    topContainer.current.scrollIntoView({ block: "end", behavior: 'smooth' });
    }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ytqgg7y', 'template_rtao99g', e.target, 'ua3xOIc_sBj-iyTME')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  const sendEmailContact = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_la587t8', 'template_rtao99g', e.target, 'LsjBjVjMkntTZqi78')
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
      <div className="Inquire">
        <div className='inquiry'>
            <img
              src="https://wallpaper.dog/large/20509037.jpg"
              alt=""
              width="100%"
              height="600"
            />
            <h1 className="tittle-Inquire pb-5">
                <b>Inquire Now</b>
            </h1>

        </div>
        <div className="inquireCard">
          <div className="container">
            <div className="row">
              <div className="col-md-6 inquireCardLeft" style={{backgroundColor:'white'}}>
                <img 
                 src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-2299.jpg" 
                 alt="" width="100%" height="400" />    
              </div>
              <div className="col-md-6 inquireCardRight">
                  <h5 className="Immediate">For Immediate Assistance</h5>
                  <h4 className="p-1">Phone</h4>
                  <h6 className="p-1">+93111111444</h6>
                  <h4 className="p-1">Email</h4>
                  <h6 className="p-1">auraairlines.com</h6>
              </div>
            </div>
          </div>
          </div>

        {/* <div className="container">
          <div className="card border-secondary my-5 text-center">
            <div class="card-body text-secondary">
              <h5 className="Immediate">For Immediate Assistance</h5>
              <h4 className="phone-inquire p-1">Phone</h4>
              <h6 className="p-1">+93111111444</h6>
              <h4 className="p-1">Email</h4>
              <h6 className="p-1">auraairlines.com</h6>
            </div>
            </div>
        </div> */}
        <div className="contact-card1">
                <h3 className="sm-heading">We're with You Always</h3>
                <div className='book-part contact1'>
                    <form onSubmit={sendEmailContact}>
                        <div className='row'>
                            <div className='col-md-6'>
                                <label>First Name*</label><br />
                                <input className='b-Input w-100' name='first_name' type="text" required />
                            </div>

                            <div className='col-md-6'>
                                <label>Last Name*</label><br />
                                <input  className='b-Input w-100' name='last_name'  type="text" required />
                            </div>
                            
                            <div className="col-md-6">
                                <div className='edit-margin'>
                                    <label >Email Address*</label><br />
                                    <input  className='b-Input w-100' name='email' type="email" required />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className='edit-margin'>
                                    <label>Phone No*</label><br />
                                    <input  className='b-Input w-100' name='phone_number' type="text" required />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className='edit-margin'>
                                    <label >Message*</label><br />
                                    <textarea  className="b-Input w-100" name='message' cols="30" rows="10" required></textarea>
                                </div>
                            </div>
                            <div className="edit-margin col-md-6">
                              <label>How Do You Wish To Be Reached? *</label>
                              <div className="" 
                              style={{textAlign: 'right',marginTop:'10px',paddingRight:'50px'}}
                              >
                              <select className="reachedInquire" name="contact" id="">
                                <option value="call us">Call us </option>
                                <option value="email">Email</option>
                              </select>
                              </div>
                            </div>
                            <div className='butt-on'>
                                    <button className='buttonInput w-25'>Send</button>
                            </div>

                        </div>
                    </form>
                </div>
                </div>

        {/* Newsletter */}
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
                                <button className='buttonInput '>Subscribe</button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
      </div>
              {/* <div className="firstForm-inquire">
        <h2 className="headinng-Inquire p-5">We're with You Always</h2>

        <div className="inputs-Inquire">
        <form onSubmit={sendEmailContact} >
          <h5 className="name-Inquire pt-3">Name *</h5>

          <input
            className="firstInput-Inquire my-3"
            type="text"
            placeholder="First Name"
            name="first_name"
          />
          <input
            className="lastInput-Inquire"
            name="last_name"
            type="text"
            placeholder="Last Name"
          />
          <br />
          <h5 className="name-Inquire">Email Address *</h5>
          <input className="emailInput-Inquire" name='email' type="text" placeholder=""  required/>
          <br />
          <h5 className="name-Inquire pt-5">Phone Number *</h5>
          <input className="emailInput-Inquire" name="phone_number" type="text" required placeholder="" />
          <br />
          <h5 className="name-Inquire pt-5">Message </h5>
          <textarea  className="messageInput-Inquire" name='message' cols="30" rows="10"></textarea>          

          <p className="reached-inquire p-1">How Do You Wish To Be Reached? *</p>
          <select className="reached-inquire mx-5" name="contact" id="" required>
          <option value="call us">Call us </option>
          <option value="email">Email</option>
        </select>
        <br />
          <div className=" button-inquire">
          <button className="buttonin-inquire" >Send</button>
          </div>
        </form>
        </div>
        </div>*/}
      <Footer />
    </>
  );
}

export default Inquire;
