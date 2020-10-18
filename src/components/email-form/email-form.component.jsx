import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { EmailFormContainer } from './email-form.styles'
import axios from 'axios';


const EmailForm = ({inModal, closeEmailModal}) =>
{
  const [text, setText] = useState('');

  const isDark = useSelector(state => state.style.isDark)

  const handleChange = event =>{
    setText(event.target.value)
  }
  // const handleSubmit = async event => {
  //   if(event){
  //     event.preventDefault();
  //   }
  //   const apiUrl = `https://us4.api.mailchimp.com/3.0/lists/${process.env.REACT_APP_MAILCHIMP_AUDIENCE_ID}/members`

  //   try{
  //    const response = await axios.post(
  //     apiUrl,
  //       {
  //         email_address: text,
  //         status: "subscribed"
  //       },
  //       {
  //         headers: { user: process.env.REACT_APP_MAILCHIMP_API_KEY }
  //       }
  //     );
  //     await console.log(response)
  //   //  await closeEmailModal();
  //   }catch(error){
  //     console.log(error);
  //   }

  // }

return(
  <EmailFormContainer isDark={isDark} inModal >
  <form action="https://gmail.us4.list-manage.com/subscribe/post?u=98190063b370f72608d400f09&amp;id=fbde19324c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
    <div className="form-flex-box">
      <div className="group">
        <input type="email" name="EMAIL" className="form-input" id="mce-EMAIL"  autoComplete="off" onChange={handleChange}/>
        <label className={`${text.length ? 'shrink' : ""} form-input-label`}>
        EMAIL
        </label>
      </div>
      <button className='submit-subscribe-button'>Subscribe</button>
    </div>
  </form>
</EmailFormContainer>
  )
}

export default EmailForm;
