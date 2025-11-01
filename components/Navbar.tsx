import Link from 'next/link';

export function Navbar() {
  return (
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
  );
}
