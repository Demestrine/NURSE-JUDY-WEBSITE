import React from 'react'

const AuthModal = () => {
  return (
    <div className="auth-modal">
      {/* Simple auth modal content */}
      <div className="auth-form">
        <h3>Login / Register</h3>
        <p>Authentication feature coming soon</p>
        <button onClick={() => console.log('Close modal')}>Close</button>
      </div>
    </div>
  )
}

export default AuthModal
