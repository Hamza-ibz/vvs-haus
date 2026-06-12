import { Camera, Music2, Play } from 'lucide-react'

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030303] px-6 py-7">
      <div className="mx-auto flex max-w-[92rem] flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-4">
          <img
            alt="VVS Haus"
            className="h-auto w-16 object-contain sm:w-20"
            src="/assets/logos/logo.png"
          />
          <div>
            <p className="font-['Orbitron'] text-xs font-semibold uppercase tracking-[0.28em] text-white">
              VVS Haus
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/45">
              Precision mobile detailing
            </p>
          </div>
        </div>

        <p className="text-xs text-white/42">
          © 2025 VVS HAUS. All Rights Reserved.
        </p>

        <div className="flex items-center gap-4 text-white/82">
          <span className="sr-only">Social links</span>
          <span className="inline-flex h-9 w-9 items-center justify-center border border-white/10 transition hover:border-cyan-300/60 hover:text-cyan-200">
            <Camera aria-hidden="true" size={17} />
          </span>
          <span className="inline-flex h-9 w-9 items-center justify-center border border-white/10 transition hover:border-cyan-300/60 hover:text-cyan-200">
            <Music2 aria-hidden="true" size={17} />
          </span>
          <span className="inline-flex h-9 w-9 items-center justify-center border border-white/10 transition hover:border-cyan-300/60 hover:text-cyan-200">
            <Play aria-hidden="true" size={17} />
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
