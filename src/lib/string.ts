import { generatorRandom, splitNumber } from './math'

/**
 * 增加字符到指定长度
 * @param char 原始字符
 * @param len 增长长度
 * @returns 增长的字符串
 */
export const toLen = (char = '', len = 80) => {
  if (len <= 0) return ''
  return new Array(len).fill(char).join('').slice(0, len)
}

/**
 * 填充指定长度字符到字符串头部
 * @param str 原始字符串
 * @param char 填充字符
 * @param len 填充后的长度
 * @returns 增加后的字符串
 */
export const addHead = (str = '', char = '-', len = 80) =>
  toLen(char, len - str.length) + str

/**
 * 填充指定长度字符到字符串尾部
 * @param str 原始字符串
 * @param char 填充字符
 * @param len 填充后的长度
 * @returns 增加后的字符串
 */
export const addTail = (str = '', char = '-', len = 80) =>
  str + toLen(char, len - str.length)

/**
 * 填充指定长度字符到字符串两侧
 * @param str 原始字符串
 * @param char 填充字符
 * @param len 填充后的长度
 * @returns 增加后的字符串
 */
export const addMiddle = (str = '', char = '-', len = 80) => {
  const shortLen = splitNumber(len, 2) + splitNumber(str.length, 2)
  return addTail(addHead(str, char, shortLen), char, len)
}

/**
 * 切割字符串
 * @param str 原始字符串
 * @param len 切割份数
 * @returns 切割后的字符串列表
 */
export const splitString = (str = '', len = 2) => {
  const result: string[] = []
  let tmp = ''
  for (const char of str.split('')) {
    if (tmp.length === len) {
      result.push(tmp)
      tmp = ''
    }
    tmp += char
  }
  if (tmp) result.push(tmp)
  return result
}

/**
 * 插入子串
 * @param str 原始字符串
 * @param substring 插入的子串
 * @param position 插入的位置
 * @returns 插入子串后的字符串
 */
export const insertSubstring = (str = '', substring = '', position = 0) => {
  while (position < 0) {
    position = position < 0 ? str.length + position : position
  }
  return str.substring(0, position) + substring + str.substring(position)
}

/**
 * 生成字符串
 * @param len 字符串长度
 * @param random 是否随机长度
 * @param min 最短长度
 * @returns 指定长度字符串
 */
export const generatorString = (len = 1, random = false, min = len) => {
  if (random) len = generatorRandom(min, len)
  const result: string[] = []
  for (let i = 0; i < len; i++) result.push(generatorRandom(0, 35).toString(36))
  return result.map(str => Math.random() < .5 ? str.toUpperCase() : str).join('')
}
