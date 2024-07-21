import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
           <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-2">CInnovaTech</h3>
            <a href="mailto:developerengineercls@gmail.com" className="text-sm mb-2">
              E-mail: developerengineercls@gmail.com 
            </a>
            <a href="https://wa.me/5511971822466" target="_blank" rel="noopener noreferrer" className="text-sm">
              Telefone: +55 11 971 822 466
            </a>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://www.linkedin.com/in/cleisantos"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              View Linkedin
            </a>
            <a
              href="https://github.com/CleiL"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
