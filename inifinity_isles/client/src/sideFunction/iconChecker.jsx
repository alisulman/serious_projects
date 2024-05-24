/* eslint-disable react/prop-types */

const IconChecker = ({ CheckedIcon, UnCheckedIcon, chknchk, uchknchk }) => {
    return (
        <>
            <div className={`relative`}>
                <div className={`absolute top-0 ${chknchk && 'hidden'}`} >{UnCheckedIcon}</div>
                <div className={`absolute top-0 ${uchknchk && 'hidden'}`} >{CheckedIcon}</div>
            </div>
        </>
    )
}

export default IconChecker
