import { GridPattern } from '@/components/GridPattern'
import { Container } from '@/components/Container'

export function Footer() {
  return (
    <footer className="relative pt-5 pb-20 sm:pb-32 sm:pt-14">
      <div className="absolute inset-x-0 top-0 h-32 text-slate-900/10 [mask-image:linear-gradient(white,transparent)]">
        <GridPattern x="50%" />
      </div>
      <div className="relative text-center text-sm text-slate-600">
        <p>Conceptualized designed, developed and implemented by Guru Prasad Venkata Raghavan and Vaishnavi Viswanathan.</p>
        <p>The below are some of the tools utilized in the process.</p>
        <p>Copyright &copy; {new Date().getFullYear()} Guru & Vaishnavi</p>
        <p>All rights reserved.</p>
      </div>
      <Container>
      <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-gray-900">Front-End Tools</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer" className="text-sm leading-6 text-gray-600 hover:text-gray-900">React</a>
              </li>
              <li>
                <a href="https://nextjs.org/" target="_blank" rel="noreferrer" className="text-sm leading-6 text-gray-600 hover:text-gray-900">NextJS</a>
              </li>
              <li>
                <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Tailwind</a>
              </li>
            </ul>
          </div>
          <div className="mt-10 md:mt-0">
            <h3 className="text-sm font-semibold leading-6 text-gray-900">AI Tools</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <a href="https://www.midjourney.com/home/" target="_blank" rel="noreferrer" className="text-sm leading-6 text-gray-600 hover:text-gray-900">MidJourney</a>
              </li>
              <li>
                <a href="https://stability.ai/blog/stable-diffusion-public-release" target="_blank" rel="noreferrer" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Stable Diffusion</a>
              </li>
              <li>
                <a href="https://link.springer.com/chapter/10.1007/978-981-15-5577-0_18" target="_blank" rel="noreferrer" className="text-sm leading-6 text-gray-600 hover:text-gray-900">AnimeGAN</a>
              </li>
              <li>
                <a href="https://openai.com/" target="_blank" rel="noreferrer" className="text-sm leading-6 text-gray-600 hover:text-gray-900">OpenAI DallE</a>
              </li>
              <li>
                <a href="https://openai.com/" target="_blank" rel="noreferrer" className="text-sm leading-6 text-gray-600 hover:text-gray-900">OpenAI GPT3</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-gray-900">Design Tools</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <a href="https://www.canva.com/" target="_blank" rel="noreferrer" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Canva</a>
              </li>
              <li>
                <a href="https://www.figma.com/" target="_blank" rel="noreferrer" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Figma</a>
              </li>
              <li>
                <a href="https://www.adobe.com/express/" target="_blank" rel="noreferrer" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Adobe Express</a>
              </li>
            </ul>
          </div>
          <div className="mt-10 md:mt-0">
            <h3 className="text-sm font-semibold leading-6 text-gray-900">Other Tools</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer" className="text-sm leading-6 text-gray-600 hover:text-gray-900">MongoDB</a>
              </li>
              <li>
                <a href="https://www.eventcreate.com/" target="_blank" rel="noreferrer"className="text-sm leading-6 text-gray-600 hover:text-gray-900">EventCreate</a>
              </li>
              <li>
                <a href="https://fontawesome.com/" target="_blank" rel="noreferrer" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Font Awesome</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
    </footer>
  )
}
