export function inWords(input: number) {
  const ones = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen'
  ]

  const tens = [
    '',
    'twenty',
    'thirty',
    'fourty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety'
  ]

  const units = [
    'thousand',
    'million',
    'billion',
    'trillion',
    'quadrillion',
    'quintillion',
    'sextillion',
    'septillion',
    'octillion',
    'nonillion',
    'decillion'
  ]

  if (!input) return 'zero'

  const result: string[] = []

  if (input < 0) {
    input = Math.abs(input)
    result.push('negative')
  }

  while (input) {
    if (input < 20) {
      result.push(ones[input - 1])
      break
    }

    if (input < 100) {
      result.push(tens[Math.floor(input / 10) - 1])
      input = input % 10
      continue
    }

    if (input >= 100 && input < 1000) {
      result.push(ones[Math.floor(input / 100) - 1], 'hundred')
      input = input % 100
      continue
    }

    let unitIndex = 0
    let base = 1000

    while (input > base * 1000 - 1) {
      unitIndex++
      base = base * 1000
    }

    const words = inWords(Math.floor(input / base))
    const unit = units[unitIndex]

    result.push(words, unit)
    input = input % base
  }

  return result.join(' ')
}
