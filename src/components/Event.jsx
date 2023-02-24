import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'

export const Event = () => {
  return (
    <section
      id="event"
      aria-labelledby="event-title"
      className="mt-5 container mx-auto shadow-2xl rounded-2xl scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32 bg-royal_purple"
      style={{
        backgroundImage: `url('/background_2.png')`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
      }}
    >
    <Container>
      <SectionHeading number="4" id="event-title">
        Event
      </SectionHeading>
      <p className="mt-8 font-display text-4xl font-bold tracking-tight text-white">
        Save the Date: Your Ultimate Guide to Our Wedding Celebration
      </p>
      <p className="mt-4 text-lg tracking-tight text-white">
        We want to make sure that all our guests are well-informed and have everything they need to enjoy our special day to the fullest. So, we have provided the details about the wedding ceremony and date of the event. [Also, please don&apos;t forget to flip the pages at the bottom, to see more events.]
      </p>
      <br></br>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
      <div style={{position: 'relative', width: '100%', height: 0, paddingTop: '129.4118%', paddingBottom: 0, boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden', borderRadius: '8px', willChange: 'transform'}}>
            <iframe loading="lazy" style={{position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', border: 'none', padding: '0', margin: '0'}}
              src="https://heyzine.com/flip-book/13c1772066.html" allowFullScreen="allowfullscreen" allow="fullscreen">
            </iframe>
          </div>
      </div>
      </div>
    </Container>
  </section>
  )
}


export default Event;