import { store } from './store'
import { Provider as ReduxProvider } from 'react-redux'
import Player from './pages/Player'

export default function App() {
  return (
    <ReduxProvider store={store}>
      <Player />
    </ReduxProvider>
  )
}
