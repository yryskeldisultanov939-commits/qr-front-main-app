import { useEffect, useRef, useState } from 'react'
import Icon from './Icon'

function ScannerScreen({ onBack, onComplete }) {
  const videoRef = useRef(null)
  const [cameraError, setCameraError] = useState('')

  useEffect(() => {
    let stream

    const startCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }, audio: false })
        if (videoRef.current) videoRef.current.srcObject = stream
      } catch {
        setCameraError('Камера недоступна. Разрешите доступ в браузере.')
      }
    }

    startCamera()
    return () => {
      if (stream) stream.getTracks().forEach((track) => track.stop())
    }
  }, [])

  return (
    <div className="screen scanner-screen">
      <video ref={videoRef} autoPlay playsInline muted className="camera-feed" />
      <div className="scanner-overlay" />

      <header className="scanner-header">
        <button type="button" className="icon-button icon-wrap-light" onClick={onBack} aria-label="Назад"><Icon name="close" /></button>
        <h2>Сканирование QR</h2>
        <span className="scanner-space" />
      </header>

      <div className="scan-frame" aria-hidden="true" />
      <div className="scan-line" aria-hidden="true" />

      <button type="button" className="torch" aria-label="Фонарик"><Icon name="flash" /></button>

      <div className="scanner-actions">
        {cameraError ? <p>{cameraError}</p> : null}
        <button type="button" className="primary-button" onClick={onComplete}>QR найден</button>
      </div>
    </div>
  )
}

export default ScannerScreen
