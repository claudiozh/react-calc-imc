export type ILevel = {
  title: string
  color: string
  numbersReference: number[]
  icon: 'up' | 'down'
  resultImc?: number
}

export const levels: ILevel[] = [
  {
    title: 'Magreza',
    icon: 'down',
    numbersReference: [0, 18.5],
    color: '#96A3AB',
  },
  {
    title: 'Normal',
    icon: 'up',
    numbersReference: [18.6, 24.9],
    color: '#0EAD69',
  },
  {
    title: 'Sobrepeso',
    icon: 'down',
    numbersReference: [25, 30],
    color: '#E2B036',
  },
  {
    title: 'Obesidade',
    icon: 'down',
    numbersReference: [30.1, 99],
    color: '#C2433F',
  },
]

export const calculateImc = (height: number, weight: number) => {
  const imc = parseFloat((weight / (height * height)).toFixed(2))

  const resultLevel = levels.find((item) => {
    const [referenceStart, referenceEnd] = item.numbersReference

    if (imc >= referenceStart && imc <= referenceEnd) {
      const itemResult = { ...item }
      itemResult.resultImc = imc
      return itemResult
    }

    return false
  })

  return resultLevel || null
}
