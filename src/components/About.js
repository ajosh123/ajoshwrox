import React from 'react'
import Button from 'react-bootstrap/Button';
function About() {
  return (
    <div className='container text-center '>
        <h3 className='mt-3'> Intrested in Developing Into The Project?</h3>
        <p className='mt-3 text-center'>
        If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate to connect. You can reach out to us via email at <strong>hello@abc.com</strong> or give us a call at <strong>+91 480 20802730</strong>.
        </p>
        <div className="main_btnd d-flex  justify-content-center align-items-center gap-5 mt-5">
  <Button variant="outline-light" className="main_btns1 mt-4 p-3" >Ring Us On Skype</Button>
  <Button variant="light" className="mt-4 p-3">Contact us</Button>
</div>
        
    </div>
  )
}

export default About