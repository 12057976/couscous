import styles from './Panel.module.scss'
import TotalInfo from './totalInfo/TotalInfo'
import MintIntent from './mintIntent/MintIntent'
import MintPool from './mintPool/MintPool'

function Panel() {
  return (
    <section>
      <div className={`${styles["panel-container"]} container`}>
        <div className={styles["left"]}>
          <TotalInfo/>
          <MintIntent/>
        </div>
        <div className={styles["right"]}>
          <MintPool/>
        </div>
      </div>
    </section>
  )
}

export default Panel