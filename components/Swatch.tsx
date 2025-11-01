type SwatchProps = { name: string; value: string; text?: string };
export function Swatch({ name, value, text }: SwatchProps) {
  return (
    <div className="swatch">
      <div className="chip" style={{ background: `var(${value})` }} />
      <div className="meta">
        <div style={{ fontWeight: 700, textTransform: 'uppercase' }}>{name}</div>
        <div className="mono">{value}</div>
        {text ? <div className="subtitle">{text}</div> : null}
      </div>
    </div>
  );
}
