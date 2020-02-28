import * as fs from 'fs'

export const createDir = (path: string) => {
  const result = fs.mkdirSync(path)
  return result
}
