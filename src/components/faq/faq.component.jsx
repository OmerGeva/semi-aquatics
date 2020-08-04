import React from 'react';
import { FaqContainer } from './faq.styles';

const Faq = () => (
    <FaqContainer>
      <h3>FAQ</h3>
      <div className="faq-question">
        Do You Ship Internationally?
      </div>
      <div className="faq-answer">
        Yes, we ship to almost every country
      </div>
      <div className="faq-question">
        How Long Does Shipping Take?
      </div>
      <div className="faq-answer">
        Most orders will be shipped within 2-3 business days. However some orders may take up to a full business week to ship.
      </div>
      <div className="faq-question">
        What’s the Return Policy?
      </div>
      <div className="faq-answer">
        While we are sure you will be happy with our garments, if for some reason you wish to return a produc<a href="https://www.buycoffeeworldwide.com/" className='bcw'target="_blank" >t</a>, we are happy to exchange the item or supply store credit within 30 days after purchase. The order must be sent back in the condition it was received, completely unworn with the original tags.
      </div>
      <div className="faq-question">
        Are The Garments Unisex?
      </div>
      <div className="faq-answer">
        Yes! Gendered clothing is an evolutionary failure of humanity. Anyone can wear anything.
      </div>
      <div className="faq-question">
        How Should I Wash My Semi Aquatic's Clothing?
      </div>
      <div className="faq-answer">
        We recommended washing cold with the garment inside out. Hang dry. Drying machines are an evolutionary failure of humanity. Not only are dryers bad for the environment, but they also reduce the lifespan of your garments.
      </div>
    </FaqContainer>
  )

export default Faq;
