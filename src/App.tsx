import { useState } from 'react'
import { levels, calculateImc, ILevel } from './utils/imc'
import { useSnackbar } from 'notistack'
import styles from './App.module.css'
import Level from './components/Level'
import leftArrow from './assets/leftarrow.png'

const App = () => {
  const { enqueueSnackbar } = useSnackbar()
  const [resultImc, setResultImc] = useState<ILevel | null>(null)
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)

  const handleCalculateImc = () => {
    if (!height || !weight) {
      enqueueSnackbar('Preencha todos os campos.', {})
    } else {
      setResultImc(calculateImc(height, weight))
    }
  }

  const onKeyEnter = (e: any) => {
    if (e.key === 'Enter') {
      handleCalculateImc()
    }
  }

  const handleBackButton = () => {
    setResultImc(null)
    setHeight(0)
    setWeight(0)
  }

  return (
    <main className={styles.container}>
      <section className={styles.sideLeft}>
        <h1>Calcule o seu IMC.</h1>
        <p>
          IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela
          OMS para calcular o peso ideal de cada pessoa.
        </p>
        <input
          type="number"
          placeholder="Digite a sua altura. Ex.: 1.6 (em metros)"
          value={height > 0 ? height : ''}
          onChange={(e) => setHeight(parseFloat(e.target.value))}
          disabled={!!resultImc}
          onKeyDown={onKeyEnter}
        />
        <input
          type="number"
          placeholder="Digite seu peso. Ex.: 80.5 (em kg)"
          value={weight > 0 ? weight : ''}
          onChange={(e) => setWeight(parseFloat(e.target.value))}
          disabled={!!resultImc}
          onKeyDown={onKeyEnter}
        />
        <button onClick={handleCalculateImc} disabled={!!resultImc}>
          Calcular
        </button>
      </section>

      {resultImc ? (
        <section className={styles.sideRightResult}>
          <div className={styles.arrow} onClick={handleBackButton}>
            <img alt="" src={leftArrow} />
          </div>
          <Level key={resultImc.title} data={resultImc} />
        </section>
      ) : (
        <section className={styles.sideRight}>
          {levels.map((item, key) => (
            <Level key={key} data={item} />
          ))}
        </section>
      )}
    </main>
  )
}

export default App
