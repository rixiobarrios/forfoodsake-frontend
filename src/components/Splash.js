import { useHistory } from 'react-router-dom'; 
import React, { useEffect } from 'react';




export default function Splash({hideSplash, splash}) {


    let history = useHistory();
    useEffect(() => {
      setTimeout(() => {
        hideSplash()
      }, 3000);
    }, []);

    return (
      <section id="splash" className={splash ? null : 'splash-hidden'}>
        <img src="/images/splash-logo.svg" className='splash-logo'></img>
      </section>
    );
}


