/* eslint-disable react/prop-types */
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

const GoogleLoginSetup = ({width}) => {
    return (
        <>
            <GoogleLogin
                onSuccess={credentialResponse => {
                    const credentialResponseDecode = jwtDecode(credentialResponse.credential)
                    return credentialResponseDecode
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
                shape='rectangular'
                size='large'
                text='continue_with'
                theme='filled_blue'
                width={width}
            />
        </>
    )
}

export default GoogleLoginSetup
