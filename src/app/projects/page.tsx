import React from 'react'
import './styles.scss'
import LayoutSidebar from '../../features/LayoutSidebar/LayoutSidebar'
import DynamicSidebar from '../../components/DynamicSidebar/DynamicSidebar'

export default function ProjectsPage() {
  return (
    <LayoutSidebar>
      <div className="projects">
        <h1>Проекты</h1>
        <p>Здесь появятся проекты других пользователей.</p>
      </div>
    </LayoutSidebar>

  )
}
