import React, { useContext } from 'react'
import { alertContext } from '../../components/context/Context'

export default function Alert() {

    const { alert } = useContext(alertContext);

    return (
        alert && (
            // <div className='mx-96 flex justify-center justify-self-center text-xl px-4 py-3 rounded-lg bg-blue-100 text-black font-bold text-center'>
            //     {alert}
            // </div>
            <div className='flex justify-center items-center'>
                <div className='w-1/2 text-xl bg-blue-300 text-black font-bold rounded-lg py-3 text-center'>
                    {alert}
                </div>
            </div>
        )
    );
}
