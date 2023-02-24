import React from "react";
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { CountDownTimer } from '@/components/LiveStreaming/CountDownTimer'

export const LiveStreaming = () => {

  return (
    <section
      id="live_stream"
      aria-labelledby="live_stream-title"
      className="mt-5 container mx-auto shadow-2xl rounded-2xl scroll-mt-14 py-4 sm:scroll-mt-32 sm:py-4 lg:py-4 bg-cream"
      style={{
        backgroundImage: `url('/background_2.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
    <Container>
      <SectionHeading number="7" id="live_stream-title">
        Live Streaming
      </SectionHeading>
      <p className="mt-8 font-display text-6xl font-bold tracking-tight text-black">
        Coming Soon...
      </p>
      <div className="mt-5">
        <CountDownTimer />
      </div>
    </Container>
    </section>
  );
};

export default LiveStreaming;
