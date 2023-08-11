import styles from '../styles/Controller.module.css'
import PlayButton from './PlayButton'


function Controller() {
  return (
    <article className={styles.container}>
      <PlayButton label='재생' buttonType='play' />
      <PlayButton label='일시정지' buttonType='pause' />
    </article>
  )
}

export default Controller