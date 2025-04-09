import React from 'react'
import { FaGraduationCap } from "react-icons/fa";

const Formation = () => {
    return (
        <div>
            <div className='flex items-center gap-4 px-4 md:px-8 py-4 bg-gray-200 md:bg-slate-100 uppercase border-y '>
                <FaGraduationCap />
                <h1>FORMATION</h1>
            </div>
            <div className='p-4 md:px-32 uppercase font-bold grid grid-cols-1 md:grid-cols-1 items-center text-center gap-4'>
                <div className='relative flex flex-col md:flex-row items-start gap-4 bg-slate-100 p-8 hover:scale-105 hover:translate-y-0 transition-transform duration-300'>
                    <div className='flex justify-center items-center bg-blue-200 border border-blue-300 w-20 h-20 p-4' >
                        <FaGraduationCap className='text-7xl text-blue-400' />
                    </div>
                    <div className='text-left flex flex-col gap-2 '>
                        <h1 className='text-3xl '>Certificat en Software Developpeur - Developpeur Web/Mobile</h1>
                        <p>GoMycode</p>
                        <p>Abidjan</p>
                        <p>2024 - 2025</p>
                    </div>
                </div>
                <div className='relative flex flex-col md:flex-row items-start gap-4 bg-slate-100 p-8 hover:scale-105 hover:translate-y-0 transition-transform duration-300'>
                    <div className='flex justify-center items-center bg-blue-200 border border-blue-300 w-20 h-20 p-4' >
                        <FaGraduationCap className='text-7xl text-blue-400' />
                    </div>
                    <div className='text-left flex flex-col gap-2'>
                        <h1 className='text-3xl '>Informatique Developpeur d'Application</h1>
                        <p>Legacy Institute</p>
                        <p>Abidjan</p>
                        <p>2020 - 2021</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Formation
