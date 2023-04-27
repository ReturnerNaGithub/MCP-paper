import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-222 top-10 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          How to build lvl 7 Paper Factory
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://github.com/ReturnerNaGithub"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/Rlogo.png"
              alt="Rlogo "
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px]  before:from-white before:to-transparent  before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky 900 after:dark:via-[#01ff6b] after:dark:opacity-40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[22_0_0.3rem_#f08fff70] dark:invert"
          src="/Poper.png"
          alt="Paper"
          width={280}
          height={240}
        />
      </div>

      <div className="mb-64 grid text-center lg:mb-0 lg:grid-cols-1 lg:text-center">


        <a
          href="https://play.mcp3d.com/tron"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div><h3 className="text 1x1">4x LVL 5 (you need 2x2 plot)</h3>
          <h3 className="text 2x1">2x LVL 6 (you need 2x LVL 5)</h3>
            <h3 className="text bold">1x LVL 7 (you need 2x LVL 6</h3></div>
          <h2 className={"text 1x1 font-bold"}>
            Material need{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-42 max-w-[130ch] text-sm opacity-150`}>
            <h3>Wood = 13488</h3>
            <h3>Sand = 12088</h3>
            <h3>Metal = 10539</h3>
            <h3>Stone = 5185</h3>
            <h3>Brick = 1450</h3>
            <h3>Glass = 366</h3>
            <h3>Concrete = 101</h3>
          </p>
        </a>
      </div>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px]  before:from-white before:to-transparent  before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky 900 after:dark:via-[#01ff6b] after:dark:opacity-40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/Papir.png"
          alt="Papir"
          width={580}
          height={537}
          priority
        />

      </div>
    </main>
  )
}
