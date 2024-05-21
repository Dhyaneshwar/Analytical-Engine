import { TEST_ACTION_TYPE } from '@/redux/actions/testAction'

const initialState = {
  hello: true,
  bye: false,
}

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST_ACTION_TYPE:
      return {
        ...state,
        hello: !state.hello,
        bye: !state.bye,
      }
    default:
      return state
  }
}

export default testReducer
