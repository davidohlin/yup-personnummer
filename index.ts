import { addMethod, string, number } from 'yup'
import Personnummer from 'personnummer'

declare module 'yup' {
  export interface StringSchema {
    personnummer(error?: string): this
  }
}

function personnummer(error: string = '') {
  const message =
    typeof error === 'string'
      ? error
      : '${path} must be a valid Swedish personal identity number.'

  // @ts-ignore
  return this.test('personnummer', message, (value?: string | null) => {
    if (!value) return false
    return Personnummer.valid(value)
  })
}

addMethod(string, 'personnummer', personnummer)
addMethod(number, 'personnummer', personnummer)
