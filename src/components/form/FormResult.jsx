import React from 'react'
// import styles from './Contact.module.css'
function FormResult({status, msg}) {
  return (
    <div >
      {status ? <h3>Message Sent!</h3> : <h3>Server Error:</h3>}
      <h5>{msg}</h5>
    </div>
  )
}

export default FormResult
