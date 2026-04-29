import { useState } from 'react'
import Icon from './Icon'

function LoginScreen({ onSubmit }) {
  const [email, setEmail] = useState('example@mail.com')
  const [password, setPassword] = useState('12345678')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ email, password })
  }

  return (
    <div className="screen login-screen">
      <h1>Вход в систему</h1>
      <p>Войдите, чтобы забронировать рабочее место</p>

      <div className="login-illustration" aria-hidden="true">
        <div className="leaf" />
        <div className="person" />
        <div className="table" />
      </div>

      <form className="login-form" onSubmit={handleSubmit}>
        <label className="field">
          <Icon name="mail" className="field-icon" />
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="example@mail.com" required />
        </label>

        <label className="field">
          <Icon name="lock" className="field-icon" />
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="••••••••"
            required
          />
          <button type="button" className="icon-button" onClick={() => setShowPassword((prev) => !prev)} aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}>
            <Icon name={showPassword ? 'eyeOff' : 'eye'} />
          </button>
        </label>

        <button type="submit" className="primary-button">Войти</button>
      </form>

      <p className="register-link">Нет аккаунта <button type="button">Регистрация</button></p>
    </div>
  )
}

export default LoginScreen
