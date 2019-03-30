import React from 'react';
import styles from './about-css-modules.module.css';
import Container from '../components/container';


console.log("[styles]", styles);

const User = props => (
    <div className={styles.user}>
        <img src={props.avatar} className={styles.avatar} alt="avatar image" />
        <div className={styles.description}>
            <h2 className={styles.username}>{props.username}</h2>
            <p className={styles.excerpt}>{props.excerpt}</p>
        </div>
    </div>
)


export default () => (
  <Container>
    <h1>About CSS Modules</h1>
    <p>CSS Modules are Kewl!</p>
    <User
      username="Scott Lang"
      avatar="https://avatarfiles.alphacoders.com/146/146587.jpg"
      excerpt="If Trump Ipsum weren’t my own words, perhaps I’d be dating it."
    />
    <User
      username="Natasha Romanova"
      avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCZqcTVIfvR-YgBO0tjLwgZVmH84nWw5T4s7-zRYTDnDHUFoO3nQ"
      excerpt="I write the best placeholder text, and I'm the biggest developer on the web by far... While that's mock-ups and this is politics, are they really so different? Be careful, or I will spill the beans on your placeholder text."
    />
  </Container>
)