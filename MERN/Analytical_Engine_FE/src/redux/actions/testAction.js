export const TEST_ACTION_TYPE = 'TEST_ACTION_TYPE'

export const testAction = (payload) => {
  return {
    type: TEST_ACTION_TYPE,
    payload,
  }
}
