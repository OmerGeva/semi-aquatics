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
  const handleSubmit = async () => {
    console.log('hello');
    const apiUrl = `https://cors-anywhere.herokuapp.com/https://api.omnisend.com/v3/contacts`;
    try{
    const response = await axios.post(
          apiUrl,
          {
            "identifiers": [
              {
                type: "email",
                id: text,
                channels: {
                  email: {
                    status: "subscribed",
                    statusDate: "2016-02-29T10:07:28Z"
                  }
                }
              }
              ]
          }
          ,
            {
                headers: { 'X-API-KEY': `${process.env.REACT_APP_OMNISEND_API_KEY}` }
            }
          )
      

        await setText('');
        await console.log(response)
    }catch(error){
        console.log(error.message);
      }

  }

return(
  <EmailFormContainer isDark={isDark} inModal >
    <div className="form-flex-box">
      <div className="group">
        <input type="email" value={text} name="EMAIL" className="form-input" id="mce-EMAIL"  autoComplete="off" onChange={handleChange}/>
        <label className={`${text.length ? 'shrink' : ""} form-input-label`}>
        EMAIL
        </label>
      </div>
      <button className='submit-subscribe-button' onClick={() => handleSubmit()}>Subscribe</button>
    </div>
</EmailFormContainer>
  )
}

export default EmailForm;
