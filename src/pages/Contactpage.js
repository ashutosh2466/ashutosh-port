import React from 'react'
import Contactitem from '../Components/Contactitem';
import  phone from '../img/telephone.png';
import  email from '../img/gmail.png';
import  address from '../img/location-pin.png';
function Contactpage() {
    return (
        <div className="con">
        <div className="contactpage">
           <div className="map">
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.9461803473678!2d75.25523721379706!3d19.842230032598426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb997ace2d756b%3A0x9efe0135a517825a!2sKhinvasara%20Orange%20Elite!5e0!3m2!1sen!2sin!4v1621936896629!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy">

           </iframe>
           </div>
           <div className="contact-sec">
               <Contactitem icon={phone} text={'+91 9561430106'} title={'Phone'}/>
               <Contactitem icon={email} text={'ashutoshshankarwar24@gmail.com'} title={'Email'}/>
               <Contactitem icon={address} text={' Orange Pride,Khinvasara Estate,Aurangabad,Maharahtra'} title={'Address'}/>
           </div>
     
        </div >
        <div  className="w">

        <form className="as" action="https://formsubmit.co/ashutoshshankarwar24@gmail.com" method="POST">
  <input className="foo" type="text" name="name" placeholder="Enter name" required />
  <br />
  <input className="foo" type="email" name="email" placeholder="Enter email" required />
  <br />
  <textarea className="tex" name="text" id cols={40} rows={10} placeholder="Write Your Messege here "  style={{fontSize:'500'}} defaultValue={""} />
  <br />
  <button className="but" type="submit" style={{color: 'white',fontSize:'2rem'}}>Send</button>
</form>
</div>
        
        </div>

    )
}

export default Contactpage;
