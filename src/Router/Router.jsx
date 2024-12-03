import React from 'react'
import { Route, Routes } from 'react-router'
import Login from '../Pages/Login'
import Dashboard from '../Pages/Dashboard'
import Patient from '../Pages/Patient'
import Emr from '../Pages/Emr'

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/patient" element={<Patient />} />
                <Route path="/emr" element={<Emr />} />
            </Routes>
        </>
    )
}

export default Router