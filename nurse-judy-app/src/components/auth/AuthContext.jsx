import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [unreadNotifications, setUnreadNotifications] = useState(0);

  useEffect(() => {
    const user = localStorage.getItem('currentUser');
    if (user) {
      setCurrentUser(user);
      checkForEventNotifications();
    }
  }, []);

  const login = (userName) => {
    setCurrentUser(userName);
    localStorage.setItem('currentUser', userName);
    addNotification(`Welcome ${userName}! You'll receive notifications about upcoming events.`);
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
  };

  const addNotification = (message) => {
    const newNotification = {
      id: Date.now(),
      message,
      date: new Date().toLocaleDateString(),
      read: false
    };
    
    setNotifications(prev => [newNotification, ...prev]);
    setUnreadNotifications(prev => prev + 1);
  };

  const markNotificationsAsRead = () => {
    setUnreadNotifications(0);
  };

  const checkForEventNotifications = () => {
    const lastNotification = localStorage.getItem('lastEventNotification');
    const currentMonth = new Date().getMonth();
    
    if (!lastNotification || parseInt(lastNotification) !== currentMonth) {
      setTimeout(() => {
        addNotification("New monthly event posted: NCLEX Success Workshop on March 15, 2024");
        localStorage.setItem('lastEventNotification', currentMonth.toString());
      }, 3000);
    }
  };

  const value = {
    currentUser,
    login,
    logout,
    notifications,
    unreadNotifications,
    markNotificationsAsRead,
    addNotification
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};