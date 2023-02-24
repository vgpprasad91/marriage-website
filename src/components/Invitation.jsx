import Link from 'next/link'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'

export const Invitation = () => {
  return (
    <section
      id="invitation"
      aria-labelledby="invitation-title"
      className="mt-5 container mx-auto shadow-2xl rounded-2xl pt-20 pb-16 sm:pb-20 md:pt-36 lg:py-32 bg-light_green text-white"
      style={{
        backgroundImage: `url('/background_2.png')`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
      }}
    >
      <Container className="text-lg tracking-tight">
          <SectionHeading number="1" id="invitation-title">
            Invitation
          </SectionHeading>
          <p className="mt-8 font-display text-4xl font-bold tracking-tight text-white">
            Join us in celebrating our union: Invitation to our Wedding
          </p>
          <p className="mt-4 text-lg tracking-tight text-white">
          You are cordially invited to join us in celebrating our wedding day! We are thrilled to be joining together in love and commitment, and we would be honored to have you share this special day with us.
          </p>
          <div className='mt-5 h-full' >
            <img src="https://imagedelivery.net/w3bwa6Kx95L31QaiCVI-wg/65acdec4-2361-4bfe-9e9e-c7abe507c200/public" alt="venkatraghavan_&_family_invite" />
          </div>
      </Container>
    </section>
  )
}

export default Invitation;
