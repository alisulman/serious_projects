/* eslint-disable react/prop-types */

export const SpinnerOne = ({ color }) => {
    return (
        <>
            <div className={`lds-ellipsis ${color}`}><div></div><div></div><div></div><div></div></div>
        </>
    )
}

export const SpinnerTwo = () => {
    return (
        <>
            <span className="loader"></span>
        </>
    )
}

