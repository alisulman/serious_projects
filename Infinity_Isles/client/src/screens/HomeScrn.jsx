// import React from 'react'

import HeaderWrap from "../components/wrapper/NavbarWrap"
import { useSelector } from 'react-redux'

const HomeScrn = () => {
  const state = useSelector(state => state.user)

  return (
    <HeaderWrap>
      {state.isUser !== null &&
        <pre className="text-wrap break-all">
          {JSON.stringify(state.isUser)}
        </pre>
      }
    </HeaderWrap>
  )
}

export default HomeScrn
