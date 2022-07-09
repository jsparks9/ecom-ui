import React from 'react';
import ShopMen from './../../assets/main-m.avif';
import ShopWomen from './../../assets/main-f.avif';
import './styles.scss';

const Directory = props => {
  return (
    <div className='directory'>
      <div className='wrapper'>
        <div className='item'
        style={{
          backgroundImage: `url(${ShopMen})`
        }}>
          <a>
            Shop Mens
          </a>
        </div>
        <div className='item'
        style={{
          backgroundImage: `url(${ShopWomen})`
        }}>
          <a>
            Shop Womens
          </a>
        </div>
      </div>
    </div>
  )
}

export default Directory;
