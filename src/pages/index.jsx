import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Introduction } from '@/components/Introduction'
import { Invitation } from '@/components/Invitation'
import { NavBar } from '@/components/NavBar'
import { Profile } from '@/components/Profile'
import { Story } from '@/components/Story'
import { Event } from '@/components/Event'
import { Registry } from '@/components/Registry'
import { SoundButton } from '@/components/SoundButton'
import { RSVP } from '@/components/RSVP'
import { EventBot } from '@/components/Chatbot/EventBot'
import { Fireworks } from '@fireworks-js/react'
import { LiveStreaming } from '@/components/LiveStreaming'


export default function Home() {
  return (
    <>
      <Head>
        <title>
          Guru and Vaishnavi marriage Invitation Card.
        </title>
        <meta
          name="description"
          content="A book and video course that teaches you how to design your own icons from scratch. "
        />
      </Head>
      <Fireworks options={{rocketsPoint: {min: 0,max: 100}}} style={{top: 0,left: 0,width: '100%',height: '100%',position: 'fixed'}} />
      <SoundButton /> 
      <Introduction />
      <NavBar />
      <Invitation />
      <Profile />
      <Story />
      <Event />
      <RSVP />
      <Registry />
      <LiveStreaming />
      <EventBot />
      <Footer />
    </>
  )
}
