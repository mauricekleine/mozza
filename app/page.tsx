import { LogoGrid } from "./logo-grid";
import { MailtoLink } from "./mailto-link";
import { Button } from "./ui/button";
import { GithubLogo, LinkedinLogo, PaperPlaneTilt } from "./ui/icons";
import { StarBurst } from "./ui/starburst";
import { H1, H2, H3 } from "./ui/typography";

export default function Page() {
  return (
    <main className="mt-32 space-y-32 md:mt-64 md:space-y-64">
      <div className="mx-auto max-w-4xl space-y-16 text-center md:space-y-32">
        <div className="relative flex flex-col items-center space-y-4">
          <H1>Maurice Kleine</H1>

          <H3>Freelance Software Engineer</H3>

          <StarBurst className="size-24 rotate-12 md:absolute md:right-32 md:top-16">
            Now With AI!
          </StarBurst>
        </div>

        <div className="flex flex-col gap-4">
          <p>Why wait? Reach out - today!</p>

          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <Button
              as="a"
              href="https://www.linkedin.com/in/mauricekleine/"
              leadingIcon={
                <LinkedinLogo
                  className="size-5 transition-transform duration-200"
                  weight="bold"
                />
              }
              target="_blank"
            >
              LinkedIn
            </Button>

            <Button
              as="a"
              href="https://github.com/mauricekleine/"
              leadingIcon={
                <GithubLogo
                  className="size-5 transition-transform duration-200"
                  weight="bold"
                />
              }
              target="_blank"
            >
              Github
            </Button>

            <MailtoLink
              leadingIcon={
                <PaperPlaneTilt
                  className="size-5 transition-transform duration-200"
                  weight="bold"
                />
              }
            >
              Email
            </MailtoLink>
          </div>

          <div className="mt-4">
            <p className="text-sm">
              Reach out now and get a free consultation!
            </p>

            <p className="animate-pulse text-sm uppercase">
              You won&apos;t believe your eyes!
            </p>
          </div>
        </div>
      </div>

      <div className="-mx-8 -rotate-3 border-b-4 border-t-4 border-dashed border-black bg-white p-8 md:p-12">
        <div className="relative mx-auto max-w-2xl space-y-4 px-8 sm:px-0">
          <StarBurst className="absolute -top-4 -ml-28 hidden size-24 -rotate-12 text-lg md:flex">
            Not sold in stores!
          </StarBurst>

          <H2>Transform Today!</H2>

          <p>
            Do you need a software engineer who can take your ideas and turn
            them into reality? Look no further! Maurice excels at building
            applications from scratch, bringing your vision to life. With
            expertise in hands-on coding and a passion for coaching and
            mentoring, he ensures fast iteration and top-notch results. Elevate
            your software products today with unparalleled skills and
            dedication. Don’t wait—act now and watch your ideas transform into
            amazing applications!
          </p>
        </div>
      </div>

      <div className="relative mx-auto max-w-4xl space-y-16 px-4 text-center md:px-0">
        <H2>Don&apos;t just take our word for it!</H2>

        <StarBurst className="hidden size-24 rotate-12 md:absolute md:-top-14 md:right-24 md:flex">
          Call now!
        </StarBurst>

        <LogoGrid />
      </div>

      <div className="-mx-8 rotate-3 border-b-4 border-t-4 border-dashed border-black bg-white p-8 md:p-12">
        <div className="relative mx-auto max-w-2xl space-y-4 px-8 sm:px-0">
          <StarBurst className="absolute -top-4 -ml-28 hidden size-24 -rotate-12 text-xl md:flex">
            Wow!
          </StarBurst>

          <H2>Subthread!</H2>

          <p>
            Subthread is a product studio that helps companies big and small go
            from idea to product. Maurice co-founded Subthread with fellow
            creative technologist, AI engineer and product manager{" "}

            <a
              className="underline hover:no-underline"
              href="https://toonverbeek.com/"
              target="_blank"
            >
              Toon Verbeek
            </a>

            . To find out more, check out our website at{" "}

            <a
              className="underline hover:no-underline"
              href="https://subthread.io/"
              target="_blank"
            >
              subthread.io
            </a>
            !
          </p>
        </div>
      </div>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center space-y-8 px-4 md:px-0">
        <H2>Get Yours today!</H2>

        <StarBurst className="absolute -top-14 right-16 hidden size-24 rotate-12 text-xl md:flex">
          Don’t miss out!
        </StarBurst>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-2 rounded-md border-2 border-black bg-white p-8 shadow-brutal md:p-12">
            <H3>AI!</H3>

            <p>
              AI is the FUTURE, and we’re here to help YOU seize it! Need a new
              AI application built from scratch? DONE! Want to optimize an
              existing AI application? NO PROBLEM! Looking to integrate AI into
              your current software? WE’VE GOT YOU COVERED! Don’t wait another
              moment—contact us TODAY to discover our incredible AI services!
              Your future starts NOW!
            </p>
          </div>

          <div className="space-y-2 rounded-md border-2 border-black bg-white p-8 shadow-brutal md:p-12">
            <H3>Websites!</H3>

            <p>
              Your website is the FACE of your business, and we’re here to
              ensure it WOWS everyone! Need a new website? DONE! Want to
              optimize your current site? NO PROBLEM! Looking to integrate a
              website with your software? WE’VE GOT YOU COVERED! Contact us
              TODAY and discover our amazing website services! Make a GREAT
              first impression NOW!
            </p>
          </div>

          <div className="space-y-2 rounded-md border-2 border-black bg-white p-8 shadow-brutal md:p-12">
            <H3>Databases!</H3>

            <p>
              Your data is the backbone of your business! Need help setting up a
              new database? DONE! Migrating an existing database? NO PROBLEM!
              Optimizing your database? WE’VE GOT YOU COVERED! Contact us TODAY
              to discover our top-notch database services! Don’t miss out—get
              the best for your business NOW!
            </p>
          </div>

          <div className="space-y-2 rounded-md border-2 border-black bg-white p-8 shadow-brutal md:p-12">
            <H3>Apps!</H3>

            <p>
              Captivate your customers with the PERFECT app! Need a new app?
              DONE! Optimize your current app? NO PROBLEM! Seamless integration?
              WE’VE GOT YOU COVERED! Contact us TODAY to discover our stellar
              app services! Engage like never before!
            </p>
          </div>
        </div>
      </div>

      <div className="border-t-4 border-dashed border-black bg-red-600 p-8 text-center text-yellow-300 md:p-12">
        <div className="mx-auto max-w-4xl space-y-8">
          <H2>You won&apos;t regret it!</H2>

          <p>
            For a limited time only, we are offering a free consultation to new
            clients. Contact us today to learn more about our services and how
            we can help you transform your ideas into reality!
          </p>

          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <Button
              as="a"
              href="https://www.linkedin.com/in/mauricekleine/"
              leadingIcon={
                <LinkedinLogo
                  className="size-5 transition-transform duration-200"
                  weight="bold"
                />
              }
              target="_blank"
            >
              LinkedIn
            </Button>

            <Button
              as="a"
              href="https://github.com/mauricekleine/"
              leadingIcon={
                <GithubLogo
                  className="size-5 transition-transform duration-200"
                  weight="bold"
                />
              }
              target="_blank"
            >
              Github
            </Button>

            <MailtoLink
              leadingIcon={
                <PaperPlaneTilt
                  className="size-5 transition-transform duration-200"
                  weight="bold"
                />
              }
            >
              Email
            </MailtoLink>
          </div>
        </div>

        <div className="mt-16 text-base">
          <p>Maurice Kleine</p>

          <p>Amsterdam, The Netherlands</p>
        </div>
      </div>
    </main>
  );
}
