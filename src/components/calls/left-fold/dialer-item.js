import React from 'react';
import './dailer-item.css';
function DialerItem({ item }) {
  return (
    <div className='dialer-item'>
      <img className='item-avatar' src={item.avatar} alt='icon' />
      <div className='item-info'>
        <label className='item-title'>{item.name}</label>
        <label className='item-subtitle'>{item.type}</label>
      </div>
      <div className='item-icons'>
        <div className='item-icon'>
          <i class='fi fi-rr-microphone'></i>
        </div>
        <div className='item-icon'>
          <i class='fi fi-rr-video-camera'></i>
        </div>
      </div>
    </div>
  );
}

export default DialerItem;
