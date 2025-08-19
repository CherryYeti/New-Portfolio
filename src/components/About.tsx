export default function About() {
  return (
    <div className="">
      <div className="text-center max-w-4xl mx-auto px-4">
        <h2 className="text-6xl font-bold mt-10 mb-8 text-white">About Me</h2>
        <div className="flex gap-8 mt-4 p-6 backdrop-blur-md bg-white/10 rounded-3xl shadow-lg border border-white/20">
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-4">
            <img
              src={`${import.meta.env.BASE_URL}images/enoshima.png`}
              alt="A photo of a bridge on Enoshima Island in Japan"
              className="w-full md:w-1/4 max-w-[45%] md:max-w-none h-auto rounded-lg object-cover"
              loading="lazy"
            />
            <img
              src={`${import.meta.env.BASE_URL}images/japan.png`}
              alt="A photo of a neighborhood street in Japan"
              className="w-full md:w-1/4 max-w-[45%] md:max-w-none h-auto rounded-lg object-cover"
              loading="lazy"
            />
            <img
              src={`${import.meta.env.BASE_URL}images/f1.png`}
              alt="A photo of a McLaren Formula 1 car at the Canadian Grand Prix"
              className="w-full md:w-1/4 max-w-[45%] md:max-w-none h-auto rounded-lg object-cover"
              loading="lazy"
            />
            <img
              src={`${import.meta.env.BASE_URL}images/track.png`}
              alt="A photo of a runner on a track at San Francisco State"
              className="w-full md:w-1/4 max-w-[45%] md:max-w-none h-auto rounded-lg object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="text-left">
          <p className="text-md text-center text-gray-300 italic my-8">
            Some photos I've taken
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            Hello! I am a third year college student who believes in open source
            projects. I am majoring in computer science, and I love creating!
            I've been an avid linux user and advocate for the last 5 years, and
            I love working in Python and more recently, Zig. I started making
            websites when I was around 12, and since, I have learned how to work
            in React and Svelte. I am proud to be entirely self-taught.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            Other than websites, I have spent considerable time learning Jetpack
            Compose and Flutter, both are frameworks for building native apps
            for Android. I am one of the few people I know who loves writing
            documentation, as I find it extremely rewarding to make things
            easier for other people to understand.
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <div className="mt-2 sm:mt-4 p-3 sm:p-6 backdrop-blur-md bg-white/20 rounded-xl sm:rounded-3xl shadow-lg border border-white/30 w-[80px] h-[80px] sm:w-auto sm:h-auto flex items-center justify-center">
              <img
                src={`${import.meta.env.BASE_URL}images/vectors/html.svg`}
                alt="HTML"
                className="w-10 h-10 sm:w-14 sm:h-14"
                width="56"
                height="56"
              />
            </div>
            <div className="mt-2 sm:mt-4 p-3 sm:p-6 backdrop-blur-md bg-white/20 rounded-xl sm:rounded-3xl shadow-lg border border-white/30 w-[80px] h-[80px] sm:w-auto sm:h-auto flex items-center justify-center">
              <img
                src={`${import.meta.env.BASE_URL}images/vectors/nextjs.svg`}
                alt="Next.js"
                className="w-10 h-10 sm:w-14 sm:h-14"
                width="56"
                height="56"
              />
            </div>
            <div className="mt-2 sm:mt-4 p-3 sm:p-6 backdrop-blur-md bg-white/20 rounded-xl sm:rounded-3xl shadow-lg border border-white/30 w-[80px] h-[80px] sm:w-auto sm:h-auto flex items-center justify-center">
              <img
                src={`${import.meta.env.BASE_URL}images/vectors/tailwind.svg`}
                alt="An svg logo for Tailwind"
                className="w-10 h-10 sm:w-14 sm:h-14"
                width="56"
                height="56"
              />
            </div>
            <div className="mt-2 sm:mt-4 p-3 sm:p-6 backdrop-blur-md bg-white/20 rounded-xl sm:rounded-3xl shadow-lg border border-white/30 w-[80px] h-[80px] sm:w-auto sm:h-auto flex items-center justify-center">
              <img
                src={`${import.meta.env.BASE_URL}images/vectors/react.svg`}
                alt="An svg logo for React"
                className="w-10 h-10 sm:w-14 sm:h-14"
                width="56"
                height="56"
              />
            </div>
            <div className="mt-2 sm:mt-4 p-3 sm:p-6 backdrop-blur-md bg-white/20 rounded-xl sm:rounded-3xl shadow-lg border border-white/30 w-[80px] h-[80px] sm:w-auto sm:h-auto flex items-center justify-center">
              <img
                src={`${import.meta.env.BASE_URL}images/vectors/python.svg`}
                alt="An svg logo for Python"
                className="w-10 h-10 sm:w-14 sm:h-14"
                width="56"
                height="56"
              />
            </div>
            <div className="mt-2 sm:mt-4 p-3 sm:p-6 backdrop-blur-md bg-white/20 rounded-xl sm:rounded-3xl shadow-lg border border-white/30 w-[80px] h-[80px] sm:w-auto sm:h-auto flex items-center justify-center">
              <img
                src={`${import.meta.env.BASE_URL}images/vectors/typescript.svg`}
                alt="An svg logo for TypeScript"
                className="w-10 h-10 sm:w-14 sm:h-14"
                width="56"
                height="56"
              />
            </div>
          </div>
          <p className="text-md text-center text-gray-300 italic my-8">
            Programming skills that I am comfortable in
          </p>

          <p className="text-lg mb-6 leading-relaxed">
            When I'm not coding, I enjoy maintaining my homelab and using
            applications with Docker. I'm currently expanding my skills towards
            learning Proxmox and Kubernetes. Outside of tech, you'll find me
            playing Final Fantasy, studying Japanese, or getting up at 6 AM to
            watch Formula 1 races. PST baby! 頑張れ、広島カープ！
          </p>
        </div>
      </div>
    </div>
  );
}
