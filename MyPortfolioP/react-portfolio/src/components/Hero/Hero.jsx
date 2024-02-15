import React from 'react';
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
export const Hero = () => {
    return (
      <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Hi, I'm Alban</h1>
          <p className={styles.description}>
            I am  an undergraduate student of University of Patras ,<br/>
            
             majoring at Management Science and Technology  <img
            src={getImageUrl("hero/st.png")}
            alt="Image of st"
            className={styles.stImg}
          /> <br/><br/>

            The past few months im focusing and trying my best  on developing my full-stack web applications
            <img
            src={getImageUrl("hero/fs.png")}
            alt="Image of fs"
            className={styles.fsImg}
          />
          <br/><br/>

            Reach out if you'd like to learn more!
          </p>
          <a href="mailto:albanbozha02@gmail.com" className={styles.contactBtn}>
            Contact Me
          </a>
        </div>
        <img
          src={getImageUrl("hero/Alban3.png")}
          alt="Hero image of me"
          className={styles.heroImg}
        />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </section>
    );
  };