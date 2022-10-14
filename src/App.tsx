import styles from './App.module.css'
import Level from './components/Level'
// import Level from './components/Level'
import { levels } from './utils/imc'

const App = () => {
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
          onChange={() => console.log('Change')}
        />

        <input
          type="number"
          placeholder="Digite seu peso. Ex.: 80.5 (em kg)"
          onChange={() => console.log('Change')}
        />

        <button>Calcular</button>
      </section>

      <section className={styles.sideRight}>
        {levels.map((item, key) => (
          <Level key={key} data={item} />
        ))}
      </section>
    </main>
  )
}

export default App
