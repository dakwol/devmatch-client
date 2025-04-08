import React from 'react'

type Props = {
  params: {
    id: string
  }
}

export default function ProjectDetail({ params }: Props) {
  return (
    <div className="project-detail">
      <h1>Проект #{params.id}</h1>
      <p>Описание проекта, стек, требования и кнопка «Присоединиться».</p>
    </div>
  )
}
