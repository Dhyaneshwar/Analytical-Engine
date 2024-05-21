import React from 'react'
import { connect } from 'react-redux'
import { testAction } from '@/redux/actions/testAction'
import {
  getTestReducerBye,
  getTestReducerHello,
} from '@/redux/selectors/testSelector'
import './TestPath.css'
import styled from 'styled-components'

function TestPath({ helloVal, byeVal, testAct }) {
  console.log('Few ways to print the ENV variables value:-')
  console.log('VITE_PORT-->', process.env.VITE_PORT)
  console.log('VITE_HELLO-->', import.meta.env.VITE_HELLO)
  console.log('VITE_API_URL-->', import.meta.env.VITE_API_URL)

  const onClickHandler = () => {
    console.log('button clicked')
    console.log('Hello -', helloVal)
    console.log('Bye -', byeVal)
    testAct()
  }

  return (
    <div className="TestPath_Container">
      <h1>Testing the Redux and Sagas</h1>
      <StyledButton className="LinkButton" onClick={onClickHandler}>
        Click me to test sagas
      </StyledButton>
      <StyledSpan>Hello - {helloVal.toString()}</StyledSpan>
      <StyledSpan>Bye - {byeVal.toString()}</StyledSpan>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    helloVal: getTestReducerHello(state),
    byeVal: getTestReducerBye(state),
  }
}

const mapDispatchToProps = {
  testAct: testAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(TestPath)

const StyledButton = styled.button`
  border-radius: 3px;
  border: 2px solid #bf4f74;
  padding: 0.25rem 1rem;
  font-size: 2rem;
  margin: 2rem 0;
`

const StyledSpan = styled.span`
  margin: 1rem;
`
