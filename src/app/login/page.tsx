import React from 'react'
import './styles.scss'

export default function LoginPage() {
  return (
    <div className="login-page">
      <h2>Вход</h2>
      <form className="login-form">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Пароль" />
        <button type="submit">Войти</button>
      </form>
    </div>
  )
}
