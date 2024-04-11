/* eslint-disable no-unused-vars */

import * as  React from 'react'
import { Toaster } from 'react-hot-toast';

export const AlertBottomRight = () => {
    return (
        <>
            <Toaster
                position="bottom-right"
                reverseOrder={true}
                toastOptions={{
                    className: "w-1/2"
                }}
            />
        </>
    )
}

