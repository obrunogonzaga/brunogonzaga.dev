import Link from "next/link";

const links = [
  { href: "https://github.com/obrunogonzaga", label: "GitHub" },
  { href: "https://linkedin.com/in/brunogsantos/", label: "Linkedin" },
];

function Nav() {
  return (
    <nav>
      <div>
        <Link href="/">
          <a className="mx-2 text-blue-500 font-bold no-underline text-accent-1 dark:text-blue-300">
            Bruno Gonzaga
          </a>
        </Link>
        <Link href="/">
          <a className="mx-2 text-blue-500 no-underline text-accent-1 dark:text-blue-300">
            Artigos
          </a>
        </Link>
        <Link href="/">
          <a className="mx-2 text-blue-500 no-underline text-accent-1 dark:text-blue-300">
            Sobre
          </a>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
