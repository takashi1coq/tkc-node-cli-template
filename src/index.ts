import { listPrompt, selectPrompt } from "src/prompts"

const main = async () => {
  const list = await listPrompt('Type comma-separated keywords')
  const selectVal = await selectPrompt(list, 'select')
  console.dir(selectVal)
}
main()
