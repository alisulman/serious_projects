// import React from 'react'

import HeaderWrap from "../components/wrapper/NavbarWrap"
import { useSelector } from 'react-redux'

const HomeScrn = () => {
  const state = useSelector(state => state.user)
  const data = state.auth
  console.log(state)


  return (
    <HeaderWrap>
      {data &&
        <pre className="text-wrap break-all">
          {JSON.stringify(data)}
        </pre>
      }
    </HeaderWrap>
  )
}

export default HomeScrn
