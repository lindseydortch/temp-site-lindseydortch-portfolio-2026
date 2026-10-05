import { Link } from '@tanstack/react-router'

import styles from './not-found.module.scss'

function NotFound() {
  return (
    <section className={styles.container}>
      <nav className={styles.nav}>
        <Link to="/">
          <h1>Lindsey Dortch</h1>
        </Link>
      </nav>
      <div className={styles.content}>
        <h2>404</h2>
        <h3>I know, I know... this page doesn't exist</h3>
        <p>
          You wandered off like a tourist lost in the streets of Florence. No
          worries, the Duomo is always visible from somewhere, so head back
          home.
        </p>
        <div className={styles.buttons}>
          <Link to="/">Take Me Home</Link>
        </div>
      </div>
    </section>
  )
}

export default NotFound
