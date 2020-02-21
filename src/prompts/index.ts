import Enquirer from 'enquirer'

export const listPrompt = async (message: string) => {
  const { keyWordList } = await Enquirer.prompt({
    type: 'list',
    name: 'keyWordList',
    message,
  })
  return keyWordList
}

export const selectPrompt = async (choices: string[], message: string) => {
  const { selectValue } = await Enquirer.prompt({
    type: 'select',
    name: 'selectValue',
    choices,
    message,
  })
  return selectValue
}
