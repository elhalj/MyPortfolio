import React from 'react'
import { RiAdminFill } from "react-icons/ri";
import { LuFileSpreadsheet } from "react-icons/lu";

function Description() {
  return (
    <section className='md:mt-[100px]'>
      <div>
        {/* profil profesionnel */}
        <div className='flex items-center gap-4 px-4 md:px-8 py-4 bg-gray-200 md:bg-slate-100 uppercase border-y '>
            <RiAdminFill />
        <h1>profil profesionnel</h1>
        </div>
        <div className='p-4 md:px-32 md:w-[1200px] mx-auto'>
            Developpeur FullStack MERN, je suis disponible pour de nouvelles missions.
            Souriant, j;assure un acceuil chaleureux a mon poste en me montrant a l'ecoute des besoins.
            Organise et reactif, je fais preuve de la polivalence attendue.
        </div>

        {/* vue d'ensemble */}
        <div className='flex items-center gap-4 px-4 md:px-8 py-4 bg-gray-200 md:bg-slate-100 uppercase border-y '>
            <LuFileSpreadsheet />
        <h1>vue d'ensemble</h1>
        </div>
        <div className='p-4 md:px-32 uppercase font-bold grid grid-cols-1 md:grid-cols-2 items-center text-center gap-4'>
            <div className='relative flex justify-around items-center gap-4 bg-slate-100 p-6'>
                <h1 className='text-7xl text-blue-400'>2</h1>
                <p>ans d'experience professionnel</p>
                <h1 className='text-9xl text-slate-400 absolute right-0 opacity-30'>2</h1>
            </div>
            <div className='relative flex justify-around items-center gap-4 bg-slate-100 p-6'>
                <h1 className='text-7xl text-blue-400'>1</h1>
                <p>an d'enseignement post-secondaire</p>
                <h1 className='text-9xl text-slate-400 absolute right-0 opacity-30'>1</h1>
            </div>
            <div className='relative flex justify-around items-center gap-4 bg-slate-100 p-6'>
                <h1 className='text-7xl text-blue-400'>1</h1>
                <p>certification</p>
                <h1 className='text-9xl text-slate-400 absolute right-0 opacity-30'>1</h1>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Description
