import fs from 'fs'

export function LineCount (path: string): number {
    const data = fs.readFileSync(path, 'utf8')
    return data.split('\n').length
}

export default LineCount
