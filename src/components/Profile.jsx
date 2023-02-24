import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { CubeProfile } from "./Profile/ProfileCube";


export const Profile = () => {
  return (
    <section
      id="profile"
      aria-labelledby="profile-title"
      className="mt-5 container mx-auto shadow-2xl rounded-2xl py-16 sm:py-20 lg:py-32 bg-royal_purple"
      style={{
        backgroundImage: `url('/background_3.png')`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
      }}
    >
      <div className="h-full relative">
        <Container className="h-full">
          <SectionHeading number="2" id="profile-title">
            Our Profile
          </SectionHeading>
          <p className="mt-8 font-display text-4xl font-bold tracking-tight text-white">
            Serendipity Awaits: Discover Our Matchmade Profiles
          </p>
          <p className="mt-4 text-lg tracking-tight text-white">
            Find everything you need to know about our journey as a couple, from how we met to our shared interests and future aspirations. Our hope is that this profile gives you a glimpse into who we are as individuals, and as a team.
          </p>
          <div className='mt-5 h-full' >
            <CubeProfile />
          </div>
        </Container>
      </div>
    </section>
  )
}


export default Profile;
