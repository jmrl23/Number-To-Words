import { inWords } from './main'
import { createInterface } from 'readline'

const rlInterface = createInterface({
  input: process.stdin,
  output: process.stdout
})

const prompt = (question: string) =>
  new Promise((resolve) => rlInterface.question(question, resolve))

async function main() {
  const input = parseInt((await prompt('Input: '))?.toString() ?? '')

  if (isNaN(input)) throw new TypeError('Invalid input')

  const result = inWords(input)

  console.log('Result:', result)
  rlInterface.close()
}

void main()
