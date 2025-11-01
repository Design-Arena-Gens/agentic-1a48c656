import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Swatch } from '@/components/Swatch';
import { Button } from '@/components/Button';
import { Badge } from '@/components/Badge';
import { Card } from '@/components/Card';
import { Select, TextInput } from '@/components/Input';

export const metadata = { title: 'Styleguide ? Bauhaus DS' };

export default function StyleguidePage() {
  const colorTokens = [
    { name: 'Red', value: '--color-red' },
    { name: 'Yellow', value: '--color-yellow' },
    { name: 'Blue', value: '--color-blue' },
    { name: 'Black', value: '--color-black' },
    { name: 'White', value: '--color-white' },
    { name: 'Gray-700', value: '--color-gray-700' },
  ];

  const spaces = [1,2,3,4,6,8,10,12] as const;

  return (
    <main>
      <Navbar />

      <section className="container">
        <div className="section-title h1">Styleguide</div>
        <p className="subtitle">Tokens, components, and usage essentials for the Bauhaus design system.</p>
      </section>

      <section className="container tokens">
        <div>
          <div className="h2" style={{ marginBottom: 16 }}>Color</div>
          <div className="swatches">
            {colorTokens.map(c => <Swatch key={c.value} name={c.name} value={c.value} />)}
          </div>
        </div>

        <div>
          <div className="h2" style={{ marginBottom: 16 }}>Typography</div>
          <div className="grid" style={{ gap: 16 }}>
            <div className="card">
              <div className="title">Headings</div>
              <div className="body" style={{ display:'grid', gap: 10 }}>
                <div className="h1">The quick brown fox</div>
                <div className="h2">Jumps over the lazy dog</div>
                <div className="h3">0123456789 @#$%&</div>
              </div>
            </div>
            <div className="card">
              <div className="title">Body</div>
              <div className="body" style={{ display:'grid', gap: 10 }}>
                <p>Body text uses geometric sans with assertive rhythm and clear contrast.</p>
                <p className="mono">Monospace supports technical annotation and dense information.</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="h2" style={{ marginBottom: 16 }}>Spacing</div>
          <div className="grid cols-4">
            {spaces.map(s => (
              <div key={s} className="card">
                <div className="title">space-{s}</div>
                <div className="body" style={{ display:'flex', alignItems:'center', gap: 12 }}>
                  <div className="shape-square" style={{ width: `var(--space-${s})`, height: `var(--space-${s})`, background:'var(--color-blue)', border: '3px solid var(--color-black)' }} />
                  <code className="mono">var(--space-{s})</code>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="h2" style={{ marginBottom: 16 }}>Components</div>
          <div className="grid cols-3">
            <Card title="Buttons">
              <div style={{ display:'flex', gap: 10, flexWrap:'wrap', marginTop: 12 }}>
                <Button>Default</Button>
                <Button color="blue">Blue</Button>
                <Button color="red">Red</Button>
                <Button color="ghost">Ghost</Button>
              </div>
            </Card>

            <Card title="Badges">
              <div style={{ display:'flex', gap: 10, flexWrap:'wrap', marginTop: 12 }}>
                <Badge>Alpha</Badge>
                <Badge color="blue">New</Badge>
                <Badge color="red">Alert</Badge>
              </div>
            </Card>

            <Card title="Inputs">
              <div style={{ display:'grid', gap: 12, marginTop: 12 }}>
                <TextInput label="Email" type="email" placeholder="bauhaus@example.com" />
                <Select label="Discipline" options={[
                  { label:'Architecture', value:'arch' },
                  { label:'Graphic Design', value:'graphic' },
                  { label:'Industrial Design', value:'industrial' },
                ]} />
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
