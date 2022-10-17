import { ILevel } from '../../utils/imc'
import iconArrowUp from '../../assets/up.png'
import iconArrowDown from '../../assets/down.png'
import styles from './Level.module.css'

type Props = {
  data: ILevel
}

const Level = ({ data }: Props) => {
  return (
    <div className={styles.container} style={{ backgroundColor: data.color }}>
      <div className={styles.levelIcon}>
        <img
          alt="Icon"
          src={data.icon === 'up' ? iconArrowUp : iconArrowDown}
        />
      </div>

      <h1 className={styles.levelTitle}>{data.title}</h1>

      {data.resultImc && (
        <div className={styles.resultImc}>
          Seu IMC é de {data.resultImc} kg/m²
        </div>
      )}

      <div className={styles.levelInfo}>
        IMC está entre {data.numbersReference[0]} e {data.numbersReference[1]}
      </div>
    </div>
  )
}

export default Level
