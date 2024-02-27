import React, { useContext } from 'react'
import { alertContext } from '../../components/context/Context'

export default function Alert() {

    const { alert } = useContext(alertContext);

    return (
        alert && (
            <div className='mx-96 flex justify-center justify-self-center text-xl px-4 py-3 rounded-lg bg-blue-100 text-black font-bold text-center'>
                {alert}
            </div>
        )
    );
}
