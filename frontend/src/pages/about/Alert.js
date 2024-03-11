import React, { useContext } from 'react'
import { alertContext } from '../../components/context/Context'
import './Alert.css'; 

export default function Alert() {
    const { alert } = useContext(alertContext);

    return (
        alert && (
            <div className='fixed top-0 left-0 w-full h-1/2 flex justify-center items-center z-50 alert-container'>
                <div className='w-1/5 text-xl bg-blue-400 text-black font-bold rounded-lg py-3 text-center alert-box'>
                    {alert}
                </div>
            </div>
        )
    );
}
