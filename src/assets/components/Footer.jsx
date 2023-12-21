import logo_reacteur from "../img/Logo_Reacteur.avif";
import logo_react from "../img/logo_react.png";

const Footer = () => {
  return (
    <footer>
      <p>
        Made with{" "}
        <a
          href="https://react.dev/blog/2023/03/16/introducing-react-dev"
          target="_blank"
        >
          <img src={logo_react} alt="Logo React" />
          <span>React</span>
        </a>
        at{" "}
        <a href="https://www.lereacteur.io/" target="_blank">
          <img src={logo_reacteur} alt="Logo Reacteur" />
          <span>Le Reacteur</span>
        </a>{" "}
        by{" "}
        <a href="https://github.com/bc-vsgd" target="_blank">
          <i class="fa-brands fa-github"></i> <span>Benoît Charles</span>
        </a>{" "}
        - 2023
      </p>
    </footer>
  );
};
export default Footer;
