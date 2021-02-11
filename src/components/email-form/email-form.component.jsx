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
    const apiUrl = `/api/subscribe/${text}`;
    try{
      const response = await axios.post(apiUrl,{})
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
