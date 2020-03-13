import React from 'react';

export default function Splash({ hideSplash, splash }) {
    return (
        <section className={`splash ${splash ? null : 'splash-hidden'}`}>
            <img
                src={`${process.env.PUBLIC_URL}/images/splash-bkgd.jpg`}
                alt=""
                className="splash-bg"
            />
            <img
                src={`${process.env.PUBLIC_URL}/images/splash-logo.svg`}
                className="splash-logo"
                alt="Splash"
            ></img>
        </section>
    );
}
