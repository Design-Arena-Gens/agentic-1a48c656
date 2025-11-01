import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <nav className="navbar">
        <div className="container navbar-inner">
          <Link href="/" className="brand">
            <span className="brand-mark shape-square" />
            <span>Bauhaus Design System</span>
          </Link>
          <div className="navlinks">
            <Link href="/styleguide">Styleguide</Link>
            <a href="https://agentic-1a48c656.vercel.app" target="_blank" rel="noreferrer">Docs</a>
          </div>
        </div>
      </nav>

      <section className="container hero">
        <div>
          <div className="h1">Form meets function</div>
          <p className="subtitle" style={{ marginTop: 12 }}>
            A Bauhaus-inspired design system of geometric color, bold structure, and purposeful restraint.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
            <Link href="/styleguide" className="btn yellow">Explore Styleguide</Link>
            <a className="btn blue" href="#components">Browse Components</a>
          </div>
        </div>
        <div className="art">
          <div className="layer circle" />
          <div className="layer square" />
          <div className="layer bar" />
        </div>
      </section>

      <section id="components">
        <div className="container">
          <div className="section-title h2">Components</div>
          <div className="grid cols-3">
            <div className="card">
              <div className="title">Button</div>
              <div className="body">Primary actions with crisp geometry</div>
              <div style={{ display:'flex', gap: 10, marginTop: 16 }}>
                <button className="btn">Default</button>
                <button className="btn blue">Blue</button>
                <button className="btn red">Red</button>
              </div>
            </div>

            <div className="card">
              <div className="title">Badge</div>
              <div className="body">Labels with strong contrast</div>
              <div style={{ display:'flex', gap: 10, marginTop: 16, alignItems:'center', flexWrap:'wrap' }}>
                <span className="badge yellow">Alpha</span>
                <span className="badge blue">New</span>
                <span className="badge red">Alert</span>
              </div>
            </div>

            <div className="card">
              <div className="title">Input</div>
              <div className="body">Form controls with assertive outlines</div>
              <div style={{ display:'grid', gap: 12, marginTop: 16 }}>
                <label className="input"><span>Email</span><input type="email" placeholder="bauhaus@example.com" /></label>
                <label className="input"><span>Discipline</span>
                  <select>
                    <option>Architecture</option>
                    <option>Graphic Design</option>
                    <option>Industrial Design</option>
                  </select>
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container" style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <span className="mono">v1.0.0</span>
          <span className="subtitle">? {new Date().getFullYear()} Bauhaus DS</span>
        </div>
      </footer>
    </main>
  );
}
