import React from 'react'
import './HeaderContainer.css'

function HeaderContainer({children, tint = false}) {
  return (
    <div className={`heroContainer ${tint ? 'dark-glassmorph': ''}`} style={{
      // backgroundColor: `#2a2a72`,
      // backgroundImage: `linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)`
      // backgroundImage: `linear-gradient(315deg, #3f0d12 0%, #a71d31 74%)`
        // backgroundImage: `linear-gradient(315deg, #7f53ac 0%, #647dee 74%)`

      }}>
      {children}
    </div>
  )
}

export default HeaderContainer
