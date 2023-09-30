import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <footer className="bg-purple-300 rounded-lg shadow m-4 mt-12 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-lg p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-50 sm:text-center dark:text-gray-400">
          © 2023 Developed by Martín Lopez
        </span>
        <div className="w-24 mx-8 flex flex-row justify-between text-gray-50">
          <i>
            <a href="https://github.com/martin-bass" target="_blank">
              <AiFillGithub size={36} />
            </a>
          </i>
          <i>
            <a
              href="https://www.linkedin.com/in/martinariellopez22187139/"
              target="_blank"
            >
              <AiFillLinkedin size={36} />
            </a>
          </i>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
