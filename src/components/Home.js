import React, { useState } from 'react';
import Splash from './Splash';

const Home = () => {
  const [splash, setSplash] = useState(true);

  const hideSplash = () => {
    setSplash(false);
  }

  return (
    <>
    <Splash hideSplash={hideSplash} splash={splash}/>
    <section id='home' className={splash ? 'home-hidden' : null}>
      <ul>
        <li>
          <a href="/vendor">restaurant 1</a>
        </li>
        <li>restaurant 2</li>
        <li>restaurant 3</li>
        <li>restaurant 4</li>
        <li>restaurant 5</li>
      </ul>
    </section>
    </>
  );
};

export default Home;
