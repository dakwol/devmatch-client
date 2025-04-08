import React from 'react'
import './styles.scss'

export default function RegisterPage() {
  return (
    <div className="register-page">
      <h2>Регистрация</h2>
      <form className="register-form">
        <input type="text" placeholder="Имя" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Пароль" />
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  )
}
