import React from 'react'
import { useAuth } from '../../hooks/useAuth.jsx'
import './NotificationSection.css'

const NotificationSection = ({ isOpen, onClose }) => {
  const { notifications } = useAuth()

  if (!isOpen) return null

  return (
    <div className="notification-section active" id="notification-section">
      <div className="notification-header">
        <h3>Notifications</h3>
        <button id="close-notifications" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
      </div>
      <div id="notification-list">
        {notifications.length === 0 ? (
          <div className="notification-item">
            <p>No notifications yet</p>
          </div>
        ) : (
          notifications.map(notification => (
            <div key={notification.id} className="notification-item">
              <p>{notification.message}</p>
              <div className="notification-date">{notification.date}</div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default NotificationSection
