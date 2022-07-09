import React from 'react';
import Directory from './../../components/Directory';
import './styles.scss';

// Include any components for Homepage here, not on App.tsx
const Homepage = props => {
  return (
    <section className='homepage'>
      <Directory/>
    </section>
  )
}

export default Homepage;
