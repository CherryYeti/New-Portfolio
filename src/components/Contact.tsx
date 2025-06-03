import { FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div className="flex items-center justify-center min-h-screen py-12 px-4">
      <div className="w-full">
        <h2 className="text-6xl font-bold mb-8 text-center">Contact Me</h2>

        <div className="max-w-md mx-auto backdrop-blur-md bg-white/20 rounded-3xl shadow-lg border border-white/30 pt-8 px-8 pb-16">
          <p className="text-xl mb-8 text-center">
            I'd love to connect! The best way to reach me is through LinkedIn.
          </p>

          <div className="flex justify-center">
            <a
              href="https://www.linkedin.com/in/jason-javandel-b35348262/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center cursor-pointer font-semibold text-[#2b2238] uppercase px-8 py-5 bg-[#f5f0ff] border-2 border-[#8572b1] rounded-xl shadow-[0_0.75em_0_0_#d2c4f9] transition-all duration-150 hover:translate-y-1 hover:shadow-[0_0.5em_0_0_#d2c4f9] active:translate-y-3 active:shadow-none"
            >
              <FaLinkedin className="w-6 h-6 mr-2" />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
