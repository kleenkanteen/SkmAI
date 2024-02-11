import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-white">
      <div className="flex flex-row justify-center items-center gap-12 px-4 py-4 m-0">
        <img src="/logo.png" alt="Logo" width="150" height="150" />
        <span className="text-5xl sm:text-[5rem] font-extrabold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 inline-block text-transparent bg-clip-text">
          skmAI
        </span>
      </div>
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-8">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[4rem]">
          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 inline-block text-transparent bg-clip-text">AI-Powered</span>
          {' '}
          Youtube Video Search
        </h1>
        <h2 className="text-3xl sm:text-[3rem] font-extrabold tracking-tight text-white leading-normal text-center">
          Type your
          {' '}
          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 inline-block text-transparent bg-clip-text">
            thoughts
          </span>
          {' '}
          and instantly get relevant timestamps
        </h2>

        <video width="960" height="720" controls preload="none">
          <source src="/demo.mp4" type="video/mp4" />
          <track
            src="/demo.mp4"
            kind="subtitles"
            label="English"
          />
          Your browser does not support the video tag.
        </video>

        <Link
          className="max-w-lg rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
          href="https://chromewebstore.google.com/detail/skmai-ai-powered-youtube/nkkklchgjghdppjfponpogcfgggchjef"
          target="_blank"
        >
          <h3 className="text-2xl font-bold">Get it from the Chrome web store →</h3>
        </Link>
      </div>
    </main>
  );
}
