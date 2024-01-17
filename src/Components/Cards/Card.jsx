import React from 'react'
import styles from './card.module.css'
import web from './Images/pexels-tranmautritam-326503.jpg'
import ml from './Images/pexels-pavel-danilyuk-8294551.jpg'
import ui from './Images/pexels-antoni-shkraba-4348403.jpg'
import frontend from './Images/pexels-designecologist-1779487.jpg'
import grapics from './Images/pexels-fauxels-3184612.jpg'
import write from './Images/pexels-j-kelly-brito-322335.jpg'
import apps from './Images/pexels-lisa-fotios-1092644.jpg'
import backend from './Images/pexels-markus-spiske-1089438.jpg'
import ai from './Images/pexels-michelangelo-buonarroti-8728382.jpg'
import music from './Images/pexels-miguel-á-padriñán-167092.jpg'
import animation from './Images/pexels-cottonbro-studio-9669045.jpg'
import marketing from './Images/pexels-mikael-blomkvist-6476808.jpg'

function Card() {
  return (
    <div>
      <div className={styles.cardHeadContainer}>
        <h3>Browse talent by category</h3>
        <p>Get some Inspirations from 1800+ skills.</p>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.card} style={{ backgroundImage: `url(${web})`, backgroundSize: 'cover' }}>
          <div className={styles.cardText}>Web Devolopement</div>
        </div>
        <div className={styles.card} style={{ backgroundImage: `url(${ui})`, backgroundSize: 'cover' }}>
          <div className={styles.cardText}>UI UX Designer</div>
        </div>
        <div className={styles.card} style={{ backgroundImage: `url(${frontend})`, backgroundSize: 'cover' }}>
          <div className={styles.cardText}>Frond End Devoloper</div>
        </div>
        <div className={styles.card} style={{ backgroundImage: `url(${backend})`, backgroundSize: 'cover' }}>
          <div className={styles.cardText}>Back End Devoloper</div>
        </div>
        <div className={styles.card} style={{ backgroundImage: `url(${ai})`, backgroundSize: 'cover' }}>
          <div className={styles.cardText}>AI Engineer</div>
        </div>
        <div className={styles.card} style={{ backgroundImage: `url(${ml})`, backgroundSize: 'cover' }}>
          <div className={styles.cardText}>ML Engineer</div>
        </div>
        <div className={styles.card} style={{ backgroundImage: `url(${apps})`, backgroundSize: 'cover' }}>
          <div className={styles.cardText}>Mobile App Devoloper</div>
        </div>
        <div className={styles.card} style={{ backgroundImage: `url(${grapics})`, backgroundSize: 'cover' }}>
          <div className={styles.cardText}>Graphics Designer</div>
        </div>
        <div className={styles.card} style={{ backgroundImage: `url(${marketing})`, backgroundSize: 'cover' }}>
          <div className={styles.cardText}>Digital Marketing</div>
        </div>
        <div className={styles.card} style={{ backgroundImage: `url(${animation})`, backgroundSize: 'cover' }}>
          <div className={styles.cardText}>Video And Animation</div>
        </div>
        <div className={styles.card} style={{ backgroundImage: `url(${write})`, backgroundSize: 'cover' }}>
          <div className={styles.cardText}>Writing And Translation</div>
        </div>
        <div className={styles.card} style={{ backgroundImage: `url(${music})`, backgroundSize: 'cover' }}>
          <div className={styles.cardText}>Music And Audio</div>
        </div>
      </div>
    </div>
  )

}

export default Card