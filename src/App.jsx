import { useMemo, useState } from 'react'
import './App.css'
import LoginScreen from './components/LoginScreen'
import ScannerScreen from './components/ScannerScreen'
import SeatMap from './components/SeatMap'
import { SCREEN, WORKSPACE_STATUS } from './data/constants'
import { WORKSPACES } from './data/workspaces'

function App() {
  // Какой экран сейчас открыт
  const [currentScreen, setCurrentScreen] = useState(SCREEN.LOGIN)

  // id стола, который был выбран после сканирования QR
  const [reservedSeatId, setReservedSeatId] = useState(null)

  // Список только свободных столов
  const freeSeatIds = useMemo(() => {
    return WORKSPACES
      .filter((workspace) => workspace.status === WORKSPACE_STATUS.FREE)
      .map((workspace) => workspace.id)
  }, [])

  // Имитация успешного сканирования: выбираем случайный свободный стол
  const handleScanComplete = () => {
    const randomIndex = Math.floor(Math.random() * freeSeatIds.length)
    const randomFreeSeatId = freeSeatIds[randomIndex]

    setReservedSeatId(randomFreeSeatId)
    setCurrentScreen(SCREEN.MAP)
  }

  return (
    <main className="phone-shell">
      {currentScreen === SCREEN.LOGIN && (
        <LoginScreen onSubmit={() => setCurrentScreen(SCREEN.MAP)} />
      )}

      {currentScreen === SCREEN.MAP && (
        <SeatMap
          reservedSeat={reservedSeatId}
          onScanClick={() => setCurrentScreen(SCREEN.SCANNER)}
        />
      )}

      {currentScreen === SCREEN.SCANNER && (
        <ScannerScreen
          onBack={() => setCurrentScreen(SCREEN.MAP)}
          onComplete={handleScanComplete}
        />
      )}
    </main>
  )
}

export default App
