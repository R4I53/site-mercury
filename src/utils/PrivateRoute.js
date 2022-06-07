import React, { useEffect } from 'react'
import { Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import FingerprintJS from '@fingerprintjs/fingerprintjs'


const PrivateRoute = ({ children, ...rest }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {

        async function api() {
            const fpPromise = FingerprintJS.load()
            const fp = await fpPromise
            const fingerprint = await fp.get()
            const token = localStorage.getItem("token")

            const res = await fetch("/api/check", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    fingerprint: fingerprint.visitorId,
                    token
                })
            });

            const data = await res.json();
            localStorage.setItem("token", data.token)
            console.log(data)
            if (!data.access) {           
                setLoading(false);
                return navigate('/access-denied');
            }

            return setLoading(false);
        }
        api()
    }, [])

    return loading ? null : children

};
export default PrivateRoute