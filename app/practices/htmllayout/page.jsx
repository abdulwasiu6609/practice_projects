import { FaRegUser } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";

export default function HtmlLayout() {
  return (
    <div className="bg-white w-full  h-svh">
      <header className="bg-sky-600 w-full text-center p-2 text-white">
        Header
      </header>
      <nav className="bg-gray-200 w-full p-2 px-4 flex items-center justify-between">
        {/* menu */}
        <CiMenuBurger className="text-gray-700 hover:text-blue-500 sm:hidden" />
        <ul className="hidden sm:flex  justify-end space-x-4">
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Contact
            </a>
          </li>
        </ul>
        {/* profile icon */}
        <FaRegUser className="text-gray-700 hover:text-blue-500" />
      </nav>
      <div className="bg-gray-100 w-full h-full p-4 flex flex-col max-w-xl mx-auto  gap-4">
        <aside className="bg-gray-300 p-4 mt-4">
          <h2 className="text-xl font-bold">Sidebar</h2>
          <p>This is the sidebar content.</p>
        </aside>
        <main className="p-4 w-full">
          {/* <h1 className="text-2xl font-bold">Main Content</h1>
          <p>This is the main content area.</p> */}
          {/* hero section */}
          <section className="bg-blue-100 p-4">
            <h2 className="text-xl font-bold">Hero Section</h2>
            <p>This is the hero section content.</p>
          </section>
          {/* features section */}
          <section className="bg-green-100 p-4">
            <h2 className="text-xl font-bold">Features Section</h2>
            <p>This is the features section content.</p>
            <article>
              <h3 className="text-lg font-semibold">Feature 1</h3>
              <p>This is the content for feature 1.</p>
            </article>
            <article className="bg-white p-4 m-2">
              <h3 className="text-lg font-semibold">Feature 2</h3>
              <p>This is the content for feature 2.</p>
            </article>
          </section>
        </main>
        <aside className="bg-gray-300 p-4 mt-4">
          <h2 className="text-xl font-bold">Sidebar</h2>
          <p>This is the sidebar content.</p>
        </aside>
      </div>
      <footer className="bg-sky-600 w-full text-center p-2 text-white">
        {" "}
        Footer{" "}
      </footer>
    </div>
  );
}
