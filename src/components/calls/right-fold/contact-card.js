import React from 'react';

import './contact-card.css';

function ContactCard({ contact }) {
  return (
    <div className='contact-card'>
      <div className='contact-top'>
        <img src={contact.avatar} alt='contact' className='contact-avatar' />
        <div className='contact-info'>
          <label className='contact-title'>{contact.name}</label>
          <label className='contact-subtitle'>{contact.type}</label>
        </div>
      </div>
      <div className='contact-icons'>
        <div className='contact-icon'>
          <i class='fi fi-rr-microphone'></i>
        </div>
        <div className='contact-icon'>
          <i class='fi fi-rr-play-alt'></i>
        </div>
        <div className='contact-icon'>
          <i class="fi fi-rr-menu-dots"></i>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
