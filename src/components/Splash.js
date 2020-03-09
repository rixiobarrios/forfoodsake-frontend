import { useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/styles';
const useStyles = makeStyles(theme => ({
  splash: {
    background: "url('/images/splash-bkgd.jpg')",
    height: `100vh`,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    position: `relative`,
    zIndex: 5
  }
}));
export default function Splash({ hideSplash, splash }) {
  const classes = useStyles();
  let history = useHistory();

  return (
    <section className={`splash ${splash ? null : 'splash-hidden'}`}>
      <img
        src={`${process.env.PUBLIC_URL}/images/splash-logo.svg`}
        className="splash-logo"
        alt="Splash graphic"
      ></img>
    </section>
  );
}
