'use client'

import { useState, useEffect } from 'react'

export default function EditLayout() {
  const [editMode, setEditMode] = useState(false)
  const [draggedElement, setDraggedElement] = useState<HTMLElement | null>(null)

  useEffect(() => {
    const sections = document.querySelectorAll('.section')

    const handleDragStart = (e: Event) => {
      if (!editMode) return
      const dragEvent = e as DragEvent
      const target = dragEvent.target as HTMLElement
      const section = (target as HTMLElement).closest('.section') as HTMLElement
      if (section) {
        setDraggedElement(section)
        section.classList.add('dragging')
        if (dragEvent.dataTransfer) {
          dragEvent.dataTransfer.effectAllowed = 'move'
        }
      }
    }

    const handleDragOver = (e: Event) => {
      if (!editMode) return
      const dragEvent = e as DragEvent
      if (e.preventDefault) {
        e.preventDefault()
      }
      if (dragEvent.dataTransfer) {
        dragEvent.dataTransfer.dropEffect = 'move'
      }
      return false
    }

    const handleDragEnter = (e: Event) => {
      if (!editMode) return
      const target = (e as DragEvent).target as HTMLElement
      const section = target.closest('.section') as HTMLElement
      if (section && section !== draggedElement) {
        section.classList.add('drag-over')
      }
    }

    const handleDragLeave = (e: Event) => {
      if (!editMode) return
      const target = (e as DragEvent).target as HTMLElement
      const section = target.closest('.section') as HTMLElement
      if (section) {
        section.classList.remove('drag-over')
      }
    }

    const handleDrop = (e: Event) => {
      if (!editMode) return
      const dragEvent = e as DragEvent
      if (e.stopPropagation) {
        e.stopPropagation()
      }

      const target = dragEvent.target as HTMLElement
      const targetSection = target.closest('.section') as HTMLElement

      if (draggedElement && draggedElement !== targetSection && targetSection) {
        const allSections = Array.from(document.querySelectorAll('.section'))
        const draggedIdx = allSections.indexOf(draggedElement)
        const targetIdx = allSections.indexOf(targetSection)

        if (draggedIdx < targetIdx) {
          targetSection.parentNode?.insertBefore(draggedElement, targetSection.nextSibling)
        } else {
          targetSection.parentNode?.insertBefore(draggedElement, targetSection)
        }
      }

      return false
    }

    const handleDragEnd = (e: Event) => {
      if (!editMode) return
      const target = (e as DragEvent).target as HTMLElement
      const section = target.closest('.section') as HTMLElement
      if (section) {
        section.classList.remove('dragging')
        sections.forEach(s => s.classList.remove('drag-over'))
      }
    }

    sections.forEach(section => {
      section.addEventListener('dragstart', handleDragStart as EventListener)
      section.addEventListener('dragover', handleDragOver as EventListener)
      section.addEventListener('dragenter', handleDragEnter as EventListener)
      section.addEventListener('dragleave', handleDragLeave as EventListener)
      section.addEventListener('drop', handleDrop as EventListener)
      section.addEventListener('dragend', handleDragEnd as EventListener)
      section.setAttribute('draggable', editMode ? 'true' : 'false')
    })

    return () => {
      sections.forEach(section => {
        section.removeEventListener('dragstart', handleDragStart as EventListener)
        section.removeEventListener('dragover', handleDragOver as EventListener)
        section.removeEventListener('dragenter', handleDragEnter as EventListener)
        section.removeEventListener('dragleave', handleDragLeave as EventListener)
        section.removeEventListener('drop', handleDrop as EventListener)
        section.removeEventListener('dragend', handleDragEnd as EventListener)
      })
    }
  }, [editMode, draggedElement])

  const toggleEditMode = () => {
    setEditMode(!editMode)
  }

  // Smooth scrolling for anchor links
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]')

    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      const href = target.getAttribute('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }
      }
    }

    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick)
    })

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick)
      })
    }
  }, [])

  return (
    <button
      onClick={toggleEditMode}
      className={`edit-toggle ${editMode ? 'active' : ''}`}
      title={editMode ? 'Click to finish editing' : 'Click to edit layout'}
    >
      {editMode ? '✓ Done Editing' : '📝 Edit Layout'}
    </button>
  )
}
