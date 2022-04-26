type TRandStrType = 'default' | 'number'

type TRand = {
  (min: number, max: number): number
}

type TRandStr = {
  (len: number, type?: TRandStrType): string
}

type TPrefixInteger = {
  (str: string, n: number, type?: 'after' | 'before'): string
}

// 随机生成
export const rand: TRand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

// 随机生成不同类型的指定长度字符串
export const randStr: TRandStr = (len = 64, type = 'default') => {
  const strMap = {
    default: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    number: '0123456789',
    lowerCase: 'abcdefghijklmnopqrstuvwxyz',
    upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }
  let result = ''
  const str = strMap[type]
  let countLen = len
  while (countLen--) {
    result += str[rand(0, str.length - 1)]
  }
  return result
}

// 数字补零 after before
export const prefixInteger: TPrefixInteger = (str = '', n = 0, type = 'after') => {
  return type === 'before'
    ? (Array(n).join('0') + str).slice(-n)
    : (str + Array(n).join('0')).slice(0, n)
}
