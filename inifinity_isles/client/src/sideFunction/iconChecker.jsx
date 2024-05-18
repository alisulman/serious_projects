import { useState } from "react";

const IconChecker = (CheckedIcon, UnCheckedIcon, set) => {
    const [checked, setChecked] = useState(set == null ? set : 'hidden')
    const [unChecked, setUnChecked] = useState('')

    const handleClickChecked = () => {
        console.log('unchecked')
        setChecked('hidden')
        setUnChecked('')
        return unChecked
    }
    const handleClickUnChecked = () => {
        console.log('checked')
        setChecked('')
        setUnChecked('hidden')
        return checked
    }
  return (
    <>
      <div className="relative text-7xl">
        <div className={`absolute top-0 ${unChecked}`} onClick={handleClickUnChecked}>{UnCheckedIcon}</div>
        <div className={`absolute top-0 ${checked}`} onClick={handleClickChecked}>{CheckedIcon}</div>
      </div>
    </>
  )
}

export default IconChecker
