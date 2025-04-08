import React from 'react'
import './styles.scss'
import LayoutSidebar from '../../features/LayoutSidebar/LayoutSidebar'

export default function DashboardPage() {
  return (
    <LayoutSidebar>
      <div className="dashboard">
        <h1>Личный кабинет</h1>
        <p>Тут будет информация о твоём профиле, проектах и приглашениях.</p>
      </div>
    </LayoutSidebar>
  )
}
