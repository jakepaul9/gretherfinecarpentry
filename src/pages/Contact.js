import React from 'react'
import emailjs from 'emailjs-com'

import './Contact.css'

const SERVICE_ID = 'service_62das13'
const TEMPLATE_ID = 'template_5ztj1ea'
const USER_ID = 'user_EDfXeXDog67ocw00MU037'

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault()

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      }
    )
    alert('Your message has been sent!')
    let inputs = document.getElementsByTagName('input')
    document.getElementById('msg').value = ''
    for (let i = 0; i < inputs.length - 1; i++) {
      inputs[i].value = ''
    }
  }

  return (
    <div className='contact-container'>
      <div className='layer'>
        <div className='contact-title'>Contact Us</div>

        <form onSubmit={sendEmail}>
          <div className='contact-form'>
            <input type='hidden' name='contact_number' />
            <div>
              <label>Name</label>
              <input type='text' name='from_name' />
            </div>
            <div>
              <label>Phone</label>
              <input type='tel' name='from_phone' />
            </div>
            <div>
              <label>Email</label>
              <input type='email' name='from_email' />
            </div>
            <div className='side-by-side'>
              <div className='budget'>
                <label>Budget</label>
                <input type='number' name='budget' />
              </div>
              <div className='date'>
                <label>Deadline</label>
                <input type='date' name='doc' pattern='\d{4}-\d{2}-\d{2}' />
              </div>
            </div>
            <div>
              <label>Description</label>
              <textarea id='msg' name='message' rows='3' />
            </div>
            <input className='submit-btn' type='submit' value='Send' />
          </div>
        </form>
        <div className='address'>
          Grether Fine Carpentry
          <br /> 562 Parsons Dr. Suite 115
          <br /> Medford, OR 97501
        </div>
      </div>
    </div>
  )
}
