import expect from 'expect'
import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import HashRouter from '../HashRouter'

describe('A <HashRouter>', () => {
  it('puts a router on context', () => {
    let router
    const RouterSubject = (props, context) => {
      router = context.router
      return null
    }

    RouterSubject.contextTypes = {
      router: PropTypes.object.isRequired
    }

    const node = document.createElement('div')

    ReactDOM.render((
      <HashRouter>
        <RouterSubject/>
      </HashRouter>
    ), node)

    expect(router).toBeAn('object')
  })
})
