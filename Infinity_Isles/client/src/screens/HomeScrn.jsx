// import React from 'react'

import HeaderWrap from "../components/wrapper/NavbarWrap"
import { useSelector } from 'react-redux'

const HomeScrn = () => {
  const state = useSelector(state => state.user)
  const data = state.auth
  const dataLength = data.length

  return (
    <HeaderWrap>
      {dataLength !== 0  &&
        <pre className="text-wrap break-all">
          {JSON.stringify(data)}
        </pre>
      }
    </HeaderWrap>
  )
}

export default HomeScrn
