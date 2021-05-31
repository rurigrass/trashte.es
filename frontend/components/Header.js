import Link from 'next/link';
import Nav from './Nav';

export default function Header() {
  return (
    <header>
      <div className="bar">
        <Link href="/">TRASHTEES</Link>
      </div>
      <div className="sub-bar">
        sub bar
        <p>Search</p>
      </div>
      <Nav />

      <p>I AM THE HEADE</p>
    </header>
  );
}
