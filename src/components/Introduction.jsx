import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="mt-5 container mx-auto shadow-2xl rounded-2xl pt-20 pb-16 sm:pb-20 md:pt-36 lg:py-32 bg-royal_purple text-white"
      style={{
        backgroundImage: `url('/background_1.png')`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
      }}
    >
      <Container className="text-lg tracking-tight">
        <img src="https://imagedelivery.net/w3bwa6Kx95L31QaiCVI-wg/d9825028-ed34-4277-5dd3-3d5e96ade000/public" alt="venkatraghavan_&_family_invite" />
      </Container>
    </section>
  )
}
