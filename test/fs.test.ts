import LineCount from "src/my-fs";

jest.mock('fs', () => ({
  readFileSync: jest.fn(() => `first\n 2\n 4`)
}))

describe('sample', () => {
  const path = 'dummy'
  test('LineCount', () => {
    const result = LineCount(path)

    expect(result).toBe(3)
  });
});
