import React from 'react'
import { Route, Routes } from 'react-router'
import Login from '../Pages/Login'
import Dashboard from '../Pages/Dashboard'
import Patient from '../Pages/Patient'
import Emr from '../Pages/Emr'
import Emr2 from '../Pages/Emr2'

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/patient" element={<Patient />} />
                <Route path="/emr" element={<Emr />} />
                <Route path="/emr2" element={<Emr2 />} />
            </Routes>
        </>
    )
}

export default Router