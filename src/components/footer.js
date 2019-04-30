import React from 'react';
import styles from "./styles/footer.module.css";

const logo = require("../assets/logo.png")

const Footer = () => (
  <div className={styles.footerContainer}>
    <div>
      <img className={styles.logo} src={logo} alt="logo"/>
    </div>
    <div className={styles.sectionContainer}>
      <div className={styles.addressHeader}>Address</div>
      <div className={styles.addressLine}>2204 E 22nd street</div>
      <div className={styles.addressLine}>Oakland, CA 94606</div>
    </div>
    <div className={styles.sectionContainer}>
      <div>General Contact</div>
      <div>Dguardado@forgotemail.com</div>
    </div>
    <div>
      <a href="https://twitter.com/davechappelle?lang=en">
        <img  className={styles.socialMediaLink} src="http://www.kukustudios.com/wp-content/uploads/2016/10/facebook-150x150.png" />
      </a>
      <a href="https://twitter.com/davechappelle?lang=en">
        <img className={styles.socialMediaLink} src="http://www.kukustudios.com/wp-content/uploads/2016/10/twitter-150x150.png" />
      </a>
      <a href="https://twitter.com/davechappelle?lang=en">
        <img className={styles.socialMediaLink} src="http://www.kukustudios.com/wp-content/uploads/2016/10/instagram-150x150.png" />
      </a>
    </div>
  </div>
)

export default Footer