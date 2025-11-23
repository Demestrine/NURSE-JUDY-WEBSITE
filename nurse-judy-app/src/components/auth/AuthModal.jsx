import React, { useState } from 'react'
import { useAuth } from '../../hooks/useAuth.jsx'
import './AuthModal.css'

const AuthModal = ({ isOpen, mode, onClose, onSwitchMode }) => {
  const { login, addNotification } = useAuth()
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' })
  const [success, setSuccess] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (mode === 'login') {
      // Simulate login
      login(formData.name)
      setSuccess('Login successful! Welcome back.')
      addNotification(`Welcome ${formData.name}! You'll receive notifications about upcoming events.`)
    } else {
      // Simulate registration
      setSuccess('Registration successful! You can now login.')
    }
    
    setTimeout(() => {
      onClose()
      setSuccess('')
      setFormData({ name: '', email: '', password: '', confirmPassword: '' })
    }, 2000)
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (!isOpen) return null

  return (
    <div className="auth-modal active">
      <div className="auth-form">
        <button className="close-modal" onClick={onClose}>
          &times;
        </button>
        <h3>{mode === 'login' ? 'Login to Your Account' : 'Create an Account'}</h3>
        <form onSubmit={handleSubmit}>
          {mode === 'register' && (
            <input 
              type="text" 
              name="name"
              placeholder="Full Name" 
              required 
              value={formData.name}
              onChange={handleChange}
            />
          )}
          <input 
            type="email" 
            name="email"
            placeholder="Email" 
            required 
            value={formData.email}
            onChange={handleChange}
          />
          <input 
            type="password" 
            name="password"
            placeholder="Password" 
            required 
            value={formData.password}
            onChange={handleChange}
          />
          {mode === 'register' && (
            <input 
              type="password" 
              name="confirmPassword"
              placeholder="Confirm Password" 
              required 
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          )}
          <button type="submit">
            {mode === 'login' ? 'LOGIN' : 'REGISTER'}
          </button>
        </form>
        
        {success && (
          <div className="auth-success active">
            {success}
          </div>
        )}
        
        <p>
          {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault()
              onSwitchMode(mode === 'login' ? 'register' : 'login')
            }}
          >
            {mode === 'login' ? 'Register here' : 'Login here'}
          </a>
        </p>
      </div>
    </div>
  )
}

export default AuthModal
