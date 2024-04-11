/* eslint-disable no-unused-vars */

import * as  React from 'react'
import { Toaster } from 'react-hot-toast';

const Alert = () => {
    return (
        <>
            <Toaster
                position="bottom-right"
                reverseOrder={true}
            />
        </>
    )
}

export default Alert
