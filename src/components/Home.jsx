export default function Home() {
  return (
    <section id="home" className="home">
      <h1>
        Hi,<br />
        I am <br />
        <span className="typewriter">Pappu Dey</span>
      </h1>
      <h3>
        A passionate Android &amp; Web Developer,<br />
        turning ideas into elegant digital experiences.
      </h3>

      <div className="button-group">
        <a
          href="https://github.com/pappu-dey"
          className="icon-button"
          target="_blank"
          rel="noreferrer"
        >
          <svg height="24" width="24" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.11 0 0 .67-.21 2.2.82a7.65 7.65 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.91.08 2.11.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/in/pappu-dey-0bb84924a/"
          className="icon-button"
          target="_blank"
          rel="noreferrer"
        >
          <svg height="24" width="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.45 20.45h-3.55v-5.35c0-1.27-.03-2.91-1.77-2.91-1.78 0-2.05 1.38-2.05 2.81v5.45h-3.55V9h3.41v1.56h.05c.47-.89 1.62-1.82 3.33-1.82 3.56 0 4.22 2.34 4.22 5.38v6.33zM5.34 7.43c-1.14 0-2.06-.93-2.06-2.07 0-1.14.92-2.06 2.06-2.06s2.07.92 2.07 2.06c0 1.14-.93 2.07-2.07 2.07zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.78C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.78 24h20.44c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
          </svg>
        </a>

        <a href="/downlode/pappu cv.pdf" download className="btn">
          <strong>DOWNLOAD CV</strong>
          <div id="container-stars">
            <div id="stars"></div>
          </div>
          <div id="glow">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </a>
      </div>

      <div className="lottie-wrapper">
        <dotlottie-wc
          src="https://lottie.host/7585797f-5e92-4411-b450-6ec67f3cf4bc/bhqwT9dNE5.lottie"
          style={{ width: '700px', height: '700px' }}
          speed="1"
          autoplay
          loop
        />
      </div>

      <div className="scroll-down-arrow">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="19 12 12 19 5 12" />
        </svg>
      </div>
    </section>
  );
}
