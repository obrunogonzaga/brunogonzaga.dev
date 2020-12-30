import Link from "next/link";

const links = [
  { href: "https://github.com/obrunogonzaga", label: "GitHub" },
  { href: "https://linkedin.com/in/brunogsantos/", label: "Linkedin" },
];

function Nav() {
  return (
    <nav>
      <ul className="flex items-center justify-between p-8">
        <div className="flex justify-start">
          <li>
            <Link href="/">
              <a className="mx-2 text-blue-500 no-underline text-accent-1 dark:text-blue-300">
                Bruno Gonzaga
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="mx-2 text-blue-500 no-underline text-accent-1 dark:text-blue-300">
                Artigos
              </a>
            </Link>
          </li>
        </div>
        <ul className="flex items-center justify-between space-x-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a href={href} className="no-underline btn-blue">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
}

export default Nav;
