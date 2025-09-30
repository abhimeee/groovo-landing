"use client";
import config from "@/config/general";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mb-15">
      <div className="bg-grayBackground rounded-md">
        <div className="w-11/12 xl:w-[1050px] mx-auto flex md:flex-row flex-col justify-between md:gap-0 gap-12 items-start py-16">
          <div className="flex flex-col gap-4">
            <Image
              src={"/logo.svg"}
              width={180}
              height={60}
              alt={config.title}
              className="mb-2"
            />
            <p className="w-[300px] text-black/80">{config.description}</p>
            <div className="flex gap-4 mt-2">
              <Link href={config.socials.twitter || '#'} target="_blank" rel="noopener noreferrer">
                <div className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </div>
              </Link>
              {/* Add more social icons here when available */}
            </div>
          </div>
          <div>
            <span className="uppercase text-[#8d8d8d] font-semibold">
              Product
            </span>
            <ul className="font-medium flex flex-col gap-3 mt-4 text-black/80">
              <li className="hover:text-primary transition-colors cursor-pointer">How it works</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Features</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Pricing</li>
              <li className="hover:text-primary transition-colors cursor-pointer">FAQ</li>
            </ul>
          </div>
          <div>
            <span className="uppercase text-[#8d8d8d] font-semibold">
              Company
            </span>
            <ul className="font-medium flex flex-col gap-3 mt-4 text-black/80">
              <li className="hover:text-primary transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Blog</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Contact</li>
            </ul>
          </div>
          <div>
            <span className="uppercase text-[#8d8d8d] font-semibold">
              Legal
            </span>
            <ul className="font-medium flex flex-col gap-3 mt-4 text-black/80">
              <li className="hover:text-primary transition-colors cursor-pointer">Terms of Service</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="w-11/12 xl:w-[1050px] mx-auto pb-16 text-black/60">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} Groovo AI. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <span>Made with ❤️ for dancers everywhere</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
