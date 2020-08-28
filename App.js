import * as React from 'react'
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);

import MainNavigator from './navigators/MainNavigator'

function App() {
  return (
    <>
      <MainNavigator />
    </>
  )
}
export default App
