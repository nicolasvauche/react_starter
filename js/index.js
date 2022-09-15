'use strict'

const e = React.createElement

const Index = () => {
  return e('h1', {}, 'Coucou')
}

ReactDOM.render(e(Index), document.querySelector('#root'))
