import { useState, useEffect, useContext, createContext } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [notifications, setNotifications] = useState([])
  const [showNotifications, setShowNotifications] = useState(false)
  const [authModal, setAuthModal] = useState({ show: false, type: 'login' })

  useEffect(() => {
    const user = localStorage.getItem('currentUser')
    if (user) {
      setCurrentUser(user)
    }
  }, [])

  const login = (userName) => {
    setCurrentUser(userName)
    localStorage.setItem('currentUser', userName)
    addNotification(`Welcome ${userName}! You'll receive notifications about upcoming events.`)
  }

  const logout = () => {
    setCurrentUser(null)
    localStorage.removeItem('currentUser')
  }

  const addNotification = (message) => {
    const newNotification = {
      id: Date.now(),
      message,
      date: new Date().toLocaleDateString()
    }
    setNotifications(prev => [newNotification, ...prev])
  }

  const showLoginModal = () => setAuthModal({ show: true, type: 'login' })
  const showRegisterModal = () => setAuthModal({ show: true, type: 'register' })
  const hideAuthModal = () => setAuthModal({ show: false, type: 'login' })

  const value = {
    currentUser,
    login,
    logout,
    notifications,
    addNotification,
    showNotifications,
    setShowNotifications,
    authModal,
    showLoginModal,
    showRegisterModal,
    hideAuthModal
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
