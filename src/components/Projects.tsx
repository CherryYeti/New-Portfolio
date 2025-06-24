import Card from "./Card";

function Projects() {
  return (
    <div>
      <h2 className="text-6xl font-bold mb-8">Projects</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 mb-4">
        <div className="md:w-1/2 h-auto relative bg-[#f5f0ff] border-2 border-[#8572b1] rounded-xl shadow-[0_0.75em_0_0_#d2c4f9] transition-all duration-150 hover:translate-y-1 hover:shadow-[0_0.5em_0_0_#d2c4f9] active:translate-y-3 active:shadow-none overflow-hidden">
          <a
            href="https://github.com/cherryyeti/FireStarter"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card
              imagePath={`${import.meta.env.BASE_URL}images/firestarter.png`}
              title="FireStarter"
              description="FireStarter was a free and open source Discord bot used to start, stop and manage options on your minecraft servers using Node.js. This has been deprecated in favor of a project I am developing that uses docker and a web interface"
            />
          </a>
        </div>

        <div className="md:w-1/2 h-auto relative bg-[#f5f0ff] border-2 border-[#8572b1] rounded-xl shadow-[0_0.75em_0_0_#d2c4f9] transition-all duration-150 hover:translate-y-1 hover:shadow-[0_0.5em_0_0_#d2c4f9] active:translate-y-3 active:shadow-none overflow-hidden">
          <a
            href="https://github.com/cherryyeti/csc317-final"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card
              imagePath={`${import.meta.env.BASE_URL}images/clientsphere.png`}
              title="ClientSphere"
              description="ClientSphere is a CRM built using HMTL, CSS, EJS, and MongoDB, designed to be lightweight and responsive. This was built as a collaboration project for a web development class"
            />
          </a>
        </div>
        <div className="md:w-1/2 h-auto relative bg-[#f5f0ff] border-2 border-[#8572b1] rounded-xl shadow-[0_0.75em_0_0_#d2c4f9] transition-all duration-150 hover:translate-y-1 hover:shadow-[0_0.5em_0_0_#d2c4f9] active:translate-y-3 active:shadow-none overflow-hidden">
          <a
            href="https://github.com/cherryyeti/nvoid"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card
              imagePath={`${import.meta.env.BASE_URL}images/nvoid.png`}
              title="NVoid"
              description="NVoid is a calculator app built in flutter that is themed after the Nothing Phone."
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
