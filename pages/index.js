import Nav from "../src/patterns/components/Nav/index";
import Footer from "../src/patterns/components/Footer/index";

export default function IndexPage() {
  return (
    <div>
      <Nav />
      <div className="py-20">
        <h1 className="text-5xl text-center text-gray-700 dark:text-gray-100">
          Next.js + Tailwind CSS 2.0
        </h1>
      </div>
      <Footer />
    </div>
  );
}
