import React from "react"

const Title = ({title, mb = '4rem', style}) => {
  return (
    <div className={`section-title ${style}`} style={{marginBottom: mb}}>
      <h2>{title || 'default title'}</h2>
      <div className="underline"></div>
    </div>
  )
}

export default Title