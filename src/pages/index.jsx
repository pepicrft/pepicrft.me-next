import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import logoShopify from '@/images/logos/shopify.png'
import logoSoundCloud from '@/images/logos/soundcloud.svg'
import logo8fit from '@/images/logos/8fit.png'
import redbooth from '@/images/logos/redbooth.png'
import { formatDate } from '@/lib/formatDate'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'

const images = [
  "https://scontent-fra5-2.cdninstagram.com/v/t51.2885-15/343287043_637665074857519_7958770177121691970_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-fra5-2.cdninstagram.com&_nc_cat=107&_nc_ohc=5ck86VvnYVQAX8h-Htp&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA4OTkzMTE2NDA2MDMxMzg2NA%3D%3D.2-ccb7-5&oh=00_AfCJ-dKgejq4ktAVpf-Zx4Y88l1Q1xTROyYduBBdaLbjcA&oe=6465CDF2&_nc_sid=6136e7",
  "https://scontent-fra5-2.cdninstagram.com/v/t51.2885-15/342575098_696219605587497_4003869417727947115_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-fra5-2.cdninstagram.com&_nc_cat=109&_nc_ohc=pvXd8tMAg5QAX-AyEUF&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA4NjgyMDUzMzIxNjAyMTg3NA%3D%3D.2-ccb7-5&oh=00_AfBdjEFwr0T1765mZPceENWwxWbQKvIcgNM0hEOYrwaHww&oe=646605E3&_nc_sid=6136e7",
  "https://scontent.cdninstagram.com/v/t51.2885-15/343745374_608792057828249_3816952912310230621_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=0J_Ip568cI4AX-i1fpK&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzA5MTg3NjA0MTUxODA0MTM2OA%3D%3D.2-ccb7-5&oh=00_AfDqITRVPo_pYl7cuddDL4jOc9IhaHEeFfYG_9z40eJI0A&oe=64663899&_nc_sid=978cb9",
  "https://scontent-fra5-1.cdninstagram.com/v/t51.2885-15/308580170_133905776051796_2373406054182087051_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-fra5-1.cdninstagram.com&_nc_cat=100&_nc_ohc=eEyd6xle9L4AX9-XL3O&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MjkzNTc5MDIwMzYzNDk0Njk1NA%3D%3D.2-ccb7-5&oh=00_AfCxnOQImWTwbwbLwyEF6Oen5TtghObe4Gn07zSVMb2S0A&oe=64663844&_nc_sid=6136e7",
  "https://scontent-fra3-1.cdninstagram.com/v/t51.2885-15/341781405_758387659219786_368301868950780910_n.jpg?stp=c180.0.1080.1080a_dst-jpg_e35_s480x480&_nc_ht=scontent-fra3-1.cdninstagram.com&_nc_cat=110&_nc_ohc=ONjVf5A_UqEAX_RM3DR&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDHX1mILNuiEzABPfcuTRDP37eX_9i7NTiL9MZGPR-TmQ&oe=646631A6&_nc_sid=8fd12b"
]

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Shopify',
      title: 'Senior Staff Engineer',
      logo: logoShopify,
      start: '2022',
      end: '2023',
    },,
    {
      company: 'Shopify',
      title: 'Staff Engineer',
      logo: logoShopify,
      start: '2020',
      end: '2022',
    },
    {
      company: 'Shopify',
      title: 'Engineering Manager',
      logo: logoShopify,
      start: '2019',
      end: '2020',
    },
    {
      company: 'Shopify',
      title: 'Production Engineer',
      logo: logoShopify,
      start: '2018',
      end: '2019',
    },
    {
      company: 'SoundCloud',
      title: 'Core iOS Developer',
      logo: logoSoundCloud,
      start: '2015',
      end: '2018',
    },
    {
      company: '8fit',
      title: 'iOS and Android developer',
      logo: logo8fit,
      start: '2015',
      end: '2014',
    },
    {
      company: 'Redbooth',
      title: 'iOS developer',
      logo: redbooth,
      start: '2014',
      end: '2013',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button href="/CV.pdf" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {images.map((image, imageIndex) => (
          <div
            key={image}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <img
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>
          Pedro Piñera - Software crafter, indie builder, and open sourcerer
        </title>
        <meta
          name="description"
          content="I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software crafter, indie builder, and open sourcerer
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Pedro, a Senior Staff Developer based in Berlin 🇩🇪.
            I enjoy building developer experiences that spark joy and make developers more productive.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/pepicrft"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://instagram.com/pepicrft"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/pepicrft"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/pedro-piñera-buendia-9765a9125/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            {/* <Newsletter /> */}
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
