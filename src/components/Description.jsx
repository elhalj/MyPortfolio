import React from 'react'
import Experience from './Experience';
import Formation from './Formation';
import ProfilePro from './ProfilePro';
import VueEnsemble from './VueEnsemble';

function Description() {
  return (
    <section className='md:mt-[100px]'>
      <div className='flex flex-col gap-4 m-4 md:m-4'>
        {/* profil profesionnel */}
        <ProfilePro />
        {/* vue d'ensemble */}
        <VueEnsemble />
        {/* experience */}
        <Experience />
        {/* formation */}
        <Formation />
      </div>
    </section>
  )
}

export default Description
