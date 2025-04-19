import React from 'react'
import { RiAdminFill } from 'react-icons/ri'

const ProfilePro = () => {
    return (
        <div>
            <div className='flex items-center gap-4 px-4 md:px-8 py-4 bg-gray-200 md:bg-slate-100 uppercase border-y '>
                <RiAdminFill />
                <h1>profil profesionnel</h1>
            </div>
            <div className='p-4  mx-auto bg-slate-100 uppercase font-bold grid grid-cols-1 md:grid-cols-1 items-center text-center gap-4 hover:scale-105 hover:translate-y-0 transition-transform duration-300'>
                Developpeur FullStack MERN, je suis disponible pour de nouvelles missions.
                Souriant, j;assure un acceuil chaleureux a mon poste en me montrant a l'ecoute des besoins.
                Organise et reactif, je fais preuve de la polivalence attendue.
            </div>
        </div>
    )
}

export default ProfilePro
