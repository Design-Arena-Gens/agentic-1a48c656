export function Footer() {
  return (
    <footer className="footer">
      <div className="container" style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <span className="mono">v1.0.0</span>
        <span className="subtitle">? {new Date().getFullYear()} Bauhaus DS</span>
      </div>
    </footer>
  );
}
