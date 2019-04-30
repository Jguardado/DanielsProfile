import React from 'react';
import styles from './index.module.css';
// import YouTube from 'react-youtube';

const logo = require('../assets/logo.png');
const photo1 = require("../assets/photo-1.jpg")
const photo2 = require("../assets/photo-2.jpg")
const photo3 = require("../assets/photo-3.jpg")
const photo4 = require("../assets/photo-4.jpg")
// const background = require('../assets/decolonize.png');

const Landing = () => (
    <div className={styles.container}>
        <div className={styles.headShotContainer}>
            <img className={styles.largeLogo} src={logo} alt="head-shot" />
        </div>
        <div>
            <div>
                <img className={styles.fullLength} src={photo3}/>
                <img className={styles.fullLength} src={photo4} />
            </div>
            <div className={styles.photoContainer}>
                <img className={styles.photoLink} src={photo1} />
                <img className={styles.photoLink} src={photo2}/>
                <img className={styles.photoLink} src={photo1}/>
            </div>
        </div>
    </div>
);

Landing.propTypes = {

};

export default Landing;

// <div className={styles.nameFont}>
// <div>Daniel Guardado</div>
// <div style={{ "fontSize": "30px" }}>Video Productions</div>
// </div>