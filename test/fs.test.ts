import { createDir } from "src/my-fs";

describe('main', () => {
  test('test', () => {
    const result = createDir('./test/dummyDir/input')
    console.dir(result)
  });
});

