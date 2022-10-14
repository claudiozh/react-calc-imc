export type ILevel = {
  title: string
  color: string
  numbersReference: number[]
  icon: 'up' | 'down'
  yourImc?: number
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

export const calculateImc = (height: number, peso: number): number => {
  return 0
}
