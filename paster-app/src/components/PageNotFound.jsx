import React from 'react'

const PageNotFound = () => {
  return (
    <div className="d-flex flex-column  align-items-center" style={{ minHeight: '70vh' }}>
      <h1
        className="display-3 fw-bold mb-3 text-danger"
        //style={{ color: '#ff6f61' }} // Light red tone
      >
        404
      </h1>
      <h2 className="mb-2 text-danger">Page Not Found</h2>
      <p className="text-secondary mb-4">Sorry, the page you are looking for does not exist.</p>
      <a href="/" className="btn btn-primary px-4">Go Home</a>
    </div>
  )
}

export default PageNotFound