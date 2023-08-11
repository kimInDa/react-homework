import styles from '@/styles/PlayButton.module.css'

function PlayButton({label, buttonType}) {
  
  return (
    <button 
      type='button'
      aria-label={label}
      title={label}
      className={`${styles.button} ${buttonType === 'play' ? styles.play : styles.pause}`}>

    </button>
  )
}

export default PlayButton