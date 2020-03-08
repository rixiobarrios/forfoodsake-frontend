import { useHistory } from 'react-router-dom'; 
import React, { useEffect } from 'react';




export default function Splash({hideSplash, splash}) {


    let history = useHistory();
    useEffect(() => {
      setTimeout(() => {
        hideSplash()
      }, 2000);
    }, []);

    return (
        <section id='splash' className={splash ? null : 'splash-hidden'}>
            <h1>Splash Page</h1>
        </section>
    )
}


