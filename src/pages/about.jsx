import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

function CalendarIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" {...props}>
      <path   d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Pedro Piñera</title>
        <meta
          name="description"
          content="I’m Pedro Piñera. I live in Berlin, where I craft developer experiences."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2 prose">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Pedro Piñera. I live in Berlin, where I craft developer
              experiences.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Hola 👋
              </p>

              <p>
                It&apos;s{' '}
                <a href="https://twitter.com/pepicrft" target="_blank" rel="noreferrer">
                  Pedro
                </a>
                , a software crafter based in Berlin 🇩🇪. Elixir, Ruby, and
                Typescript are my go-to programming languages.
              </p>

              <p>
                In the past, I worked at{' '}
                <a href="https://8fit.com" target="_blank" rel="noreferrer">
                  8fit
                </a>
                ,{' '}
                <a href="https://soundcloud.com" target="_blank" rel="noreferrer">
                  SoundCloud
                </a>
                , and most recently at{' '}
                <a href="https://shopify.com" target="_blank" rel="noreferrer">
                  <b>Shopfy</b>
                </a>{' '}
                as a Senior Staff Developer. At Shopify I built and maintaned
                tools, services, and CI/CD for mobile developers (e.g.,{' '}
                <a
                  href="https://shopify.engineering/mobile-release-engineering-scale-shipit-mobile"
                  target="_blank"
                  rel="noreferrer"
                >
                  Shipit Mobile
                </a>
                ), managed, formed, and grew teams, and overhauled the{' '}
                <a
                  href="https://shopify.engineering/overhauling-shopify-cli-for-a-better-developer-experience"
                  target="_blank"
                  rel="noreferrer"
                >
                  organization&lsquo;s CLI
                </a>{' '}
                to improve the developer experience.
              </p>

              <p>
              In my spare time, I
                authored{' '}
                <a href="https://tuist.com" target="_blank" rel="noreferrer">
                  <b>Tuist</b>
                </a>
                , a tool for Xcode developers to maintain and scale their
                projects, and that&apos;s used by large organizations such as{' '}
                <a
                  href="https://apps.apple.com/us/app/bloomberg-business-news-daily/id281941097"
                  target="_blank"
                  rel="noreferrer"
                >
                  Bloomberg
                </a>
                ,{' '}
                <a
                  href="https://apps.apple.com/de/app/amex-deutschland/id560172227"
                  target="_blank"
                  rel="noreferrer"
                >
                  American Express
                </a>
                ,{' '}
                <a
                  href="https://apps.apple.com/us/app/asana-work-in-one-place/id489969512"
                  target="_blank"
                  rel="noreferrer"
                >
                  Asana
                </a>
                , and{' '}
                <a
                  href="https://apps.apple.com/us/app/adidas/id1266591536"
                  target="_blank"
                  rel="noreferrer"
                >
                  Adidas
                </a>
                .
              </p>

            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://twitter.com/pepicrft"
                icon={TwitterIcon}
              >
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href="https://instagram.com/pepicrft"
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href="https://github.com/pepicrft"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/pedro-piñera-buendia-9765a9125/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:hola@pepicrft.me"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                hola@pepicrft.me
              </SocialLink>
              <SocialLink
                href="https://cal.com/pepicrft/new-opportunity"
                icon={CalendarIcon}
                className="mt-4 "
              >
                Schedule a call
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
