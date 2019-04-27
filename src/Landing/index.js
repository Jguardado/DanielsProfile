import React from 'react';
import styles from './index.module.css';
// import YouTube from 'react-youtube';

const headShot = require('../assets/daniel.png');
const background = require('../assets/decolonize.png');

const Landing = () => (
    <div className={styles.container}>
        <div className={styles.headShotContainer}>
            <img className={styles.headShotImage} src={headShot} alt="head-shot" />
        </div>
        <div>
            This is a brief description
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