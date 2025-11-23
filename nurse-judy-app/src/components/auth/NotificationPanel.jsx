import React from 'react';
import { useAuth } from './AuthContext';

const NotificationPanel = ({ isOpen, onClose }) => {
  const { notifications, markNotificationsAsRead } = useAuth();

  React.useEffect(() => {
    if (isOpen) {
      markNotificationsAsRead();
    }
  }, [isOpen, markNotificationsAsRead]);

  if (!isOpen) return null;

  return (
    <div className="notification-section active">
      <div className="notification-header">
        <h3>Notifications</h3>
        <button onClick={onClose}><i className="fas fa-times"></i></button>
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
  );
};

export default NotificationPanel;