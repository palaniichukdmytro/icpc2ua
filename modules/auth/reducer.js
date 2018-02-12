import { AsyncStorage } from 'react-native'

// TODO change Oleg or Vova to normal variable not 't'
import * as t from './actionTypes'

let initialState = { isLoggedIn: false, user: null }

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.LOGGED_IN:
      const user = action.data

      // Save token and data to Asyncstorage
      AsyncStorage.multiSet([['user', JSON.stringify(user)]])

      //   pls rewrite to with spread operator, DO not use Object.assign
      state = Object.assign({}, state, { isLoggedIn: true, user: user })

      return state

    case t.LOGGED_OUT:
      let keys = ['user']
      AsyncStorage.multiRemove(keys)

      state = Object.assign({}, state, { isLoggedIn: false, user: null })

      return state

    default:
      return state
  }
}

export default authReducer
