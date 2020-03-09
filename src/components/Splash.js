import { useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';

export default function Splash({ hideSplash, splash }) {
  let history = useHistory();

  return (
    <section className={`splash ${splash ? null : 'splash-hidden'}`}>
      <img
        src="/images/splash-logo.svg"
        className="splash-logo"
        alt="Splash graphic"
      ></img>
    </section>
  );
}
