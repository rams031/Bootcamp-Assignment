import React, { useState } from 'react';
import Loader from '../Loader/Loader';
import axios from 'axios';

const withLoading = Component => props => {

    const [show, setShow] = useState(false)

    axios.interceptors.request.use(
        (config) => {
            setShow(true)
            console.log("config", config)
            return config
        },
        (error) => {
            setShow(false)
            console.log(error)
            return Promise.reject(error);
        }
    )

    axios.interceptors.response.use(
        (config) => {
            setShow(false)
            console.log(config)
            return config
        },
        (error) => {
            setShow(false)
            console.log(error)
            return Promise.reject(error);
        }
    )

    return (
        <div>
            <Loader show={show} />
            <Component {...props} />
        </div>
    )
}

export default withLoading
