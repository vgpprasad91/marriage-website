import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import React from 'react'
import { CoverflowEffect } from '@/components/Registry/ThreeDCoverFlow'


export  const Registry = () => {

  return (
    <section
      id="registry"
      aria-labelledby="registry-title"
      className="mt-5 mb-5 container mx-auto shadow-2xl rounded-2xl scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32 bg-royal_purple"
      style={{
        backgroundImage: `url('/background_4.png')`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
      }}
    >
    <Container>
        <SectionHeading number="6" id="registry-title">
            Registry
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-white">
          Unite in Love: Join Us in Building a Home of Memories
        </p>
        <p className="mt-4 text-lg tracking-tight text-white">
        The registry section of our marriage website is a place where you can find a list of gifts that we would love to receive as we begin our married life together. It includes items that we need, want to give for charity to celebrate our occasion, want to help us build our home and create beautiful memories together. By choosing to gift from our registry, you&apos;ll be helping us start our journey with the things that we need, as well as contributing to our future as a couple. Thank you for being a part of our celebration and for considering our registry as you decide on a gift.
        </p>
        <br></br>
        <div className='mt-28'>
        <CoverflowEffect />
        </div>
        </Container>
    </section>
    )
}

export default Registry;
