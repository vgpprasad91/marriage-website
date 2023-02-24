import React from "react";
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { CoverFlowRSVP } from "./RSVP/RSVPCoverFlow";

export const RSVP = () => {

  return (
    <section
      id="rsvp"
      aria-labelledby="rsvp-title"
      className="mt-5 container mx-auto shadow-2xl rounded-2xl scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32 bg-light_green"
      style={{
        backgroundImage: `url('/background_3.png')`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
      }}
    >
    <Container>
      <SectionHeading number="5" id="rsvp-title">
        RSVP
      </SectionHeading>
      <p className="mt-8 font-display text-4xl font-bold tracking-tight text-white">
        Love&apos;s Promise: Confirm Your Attendance to Our Wedding Celebration
      </p>
      <p className="mt-4 text-lg tracking-tight text-white">
      Please join us in celebrating our love and commitment as we exchange vows and start a new chapter of our lives together. We kindly request your response to our special day, as your presence would make our wedding all the more meaningful. Please let us know if you will be able to attend and we can&apos;t wait to share this moment with you!
      </p>
      <br></br>
      <CoverFlowRSVP />
      </Container>
    </section>
  );
};

export default RSVP;