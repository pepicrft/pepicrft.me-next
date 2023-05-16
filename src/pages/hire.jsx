import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { formatDate } from '@/lib/formatDate'
import { getAllArticles } from '@/lib/getAllArticles'

function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/blog/${article.slug}`}>{article.title}</Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export default function ArticlesIndex({ articles }) {
  return (
    <>
      <Head>
        <title>Hire me - Pedro Piñera</title>
        <meta
          name="description"
          content="I'm looking for new opportunities to work on exciting projects."
        />
        <meta property="og:image" content="https://pepicrft.me/api/og?title=Hire me" />
      </Head>
      <SimpleLayout
        title="Bring expertise on developer tooling, productivity, and platforms to your team"
        intro="To ensure your organization stays efficient and leverage the developer community to reach new markets"
      >
          <div className="lg:order-first lg:row-span-2 prose dark:text-zinc-400">
            <p>
              I’m open to new opportunities from Germany,{' '}
              <b>preferably as a contractor</b>, although I&apos;m open to
              employment depending on the organization. I have a{' '}
              <b>generalist</b> profile with a <b>problem-oriented</b> mindset
              and an interest in{' '}
              <b>developer productivity, tooling, and platforms</b>. I conceive
              programming languages as tools to solve problems and, therefore,
              can learn new ones more suitable for the problem at hand.
            </p>
            <h3 className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
              What I&apos;m looking for
            </h3>

            <p>
              I’m looking for projects or organizations with a well-defined
              problem space in which they&apos;ve built a{' '}
              <b>sustainable product that delivers</b> value to its users. The
              organization must be diverse, built around trust, and mindful of
              the laws of Germany. I’m hesitant about unicorn projects that are
              a solution to a non-existing problem, and anything related to Web3
              or Blockchain.
            </p>

            <h3 className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
              What I can help you with
            </h3>

            <p>
              Being a generalist makes one’s role harder to understand for
              organizations that lean over more specific roles, so I’m including
              here a list of areas I could help your organization with:
            </p>

            <ul className="list-inside list-disc">
              <li>
                <b>Audit and improve the productivity of your developers:</b> I can
                help you identify where the performance bottlenecks lay, develop
                metrics and monitors, and implement improvements (e.g., slow and
                inconsistent environment setup when jumping across repos).
              </li>
              <li>
                <b>Create a developer platform for your product:</b> If you’ve built a successful
                product and are considering building a developer platform for
                third-party developers to extend your business domain, I can
                help you plan and execute it. Developer platforms are an
                excellent way to adapt your product to various cultures.
              </li>
              <li>
                <b>Advise on and develop Shopify Apps:</b> As the first
                developer of the{' '}
                <a
                  href="https://shopify.engineering/overhauling-shopify-cli-for-a-better-developer-experience"
                  target="_blank"
                  rel="noreferrer"
                >
                  Shopify Node CLI
                </a>{' '}
                I have an in-depth knowledge of the tool and the platform. If
                you are building an app and would like to consult me or get some
                help with the development, I’m open to that.
              </li>
              <li>
                <b>Adopt Tuist in your Xcode projects:</b> As the creator of
                Tuist, I have in-depth knowledge on the tool. I can help you
                migrate the project, set up remote caching, and contribute new
                features and improvements to the tool on behalf of your
                organization.
              </li>
              <li>
                <b>Devise and build developer tools:</b> I am comfortable
                building developer tools of any nature (e.g., CLIs, web
                services, infrastructure). If you&lsquo;ve identified a tool
                that would be useful but need more resources to build it
                internally, I can help with that. I can also help integrate
                third-party services and tools with internal ones.
              </li>
              <li>
                <b>Lead technical projects:</b> I can help teams identify upcoming
                problems and challenges and develop a plan to support the
                business’ direction. I feel comfortable jumping into uncertain
                problem spaces, solving them, and building a team around them.
                I&apos;m also a person whose contagious passion creates bonds
                and healthy team dynamics.
              </li>

            </ul>

            <h3 className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
              How to contact me
            </h3>

            <p>
              Drop me an email at{' '}
              <a href="mailto:hola@pepicrft.me">hola@pepicrft.me</a> or{' '}
              <a
                href="https://cal.com/pepicrft/new-opportunity"
                target="_blank"
                rel="noreferrer"
              >
                use this link
              </a>{' '}
              to book a 30-minute call.
              Even if your needs are not included in the list above, if you’d
              like to bring me to your team, let’s chat.
            </p>
          </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  }
}
