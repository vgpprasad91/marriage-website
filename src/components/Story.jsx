import Image from 'next/future/image'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { CardsEffect } from "./Story/SwiperCards";


export const Story = () => {
  return (
    <section
      id="story"
      aria-labelledby="story-title"
      className="mt-5 container mx-auto shadow-md rounded-2xl scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32 bg-light_green"
      style={{
        backgroundImage: `url('/background_4.png')`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
      }}
    >
      <Container>
        <SectionHeading number="3" id="story-title">
          Our Story
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-white">
          From Strangers to Soulmates: Our Unconventional Journey to Happily Ever After
        </p>
        <p className="mt-4 mb-10 text-lg tracking-tight text-white">
          It all started with a chance encounter that turned into a lifelong journey. We met each other when we least expected it, and it was clear from the very beginning that we were meant to be together. Our story is one of serendipity and fate, and we feel incredibly lucky to have found each other. We can&apos;t wait to share our journey with all of our loved ones as we begin this new chapter in our lives.
        </p>
        <CardsEffect />
      </Container>
    </section>
  )
}

export default Story;
