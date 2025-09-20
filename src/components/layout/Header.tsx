import { FaBarsStaggered } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="container mx-auto navbar text-primary">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FaBarsStaggered />
          </div>
          <ul
            tabIndex={0}
            className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52"
          >
            <li>
              <Link href="/services" className="font-thin">
                خدمات
              </Link>
            </li>
            <li>
              <Link href="/packages" className="font-thin">
                پکیج ها
              </Link>
            </li>
            <li>
              <Link href="/about" className="font-thin">
                درباره ما
              </Link>
            </li>
            <li>
              <Link href="/contact" className="font-thin">
                تماس با ما
              </Link>
            </li>
            <li>
              <Link href="/news" className="font-thin">
                اخبار و رویدادها
              </Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/Morva.PNG"
            width={40}
            height={40}
            alt="Morva-icon"
          />
          <h1 className="font-bold">مروا</h1>
        </Link>
      </div>
      <nav className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">
          <li>
            <Link href="/services" className="font-thin">
              خدمات
            </Link>
          </li>
          <li>
            <Link href="/packages" className="font-thin">
              پکیج ها
            </Link>
          </li>
          <li>
            <Link href="/about" className="font-thin">
              درباره ما
            </Link>
          </li>
          <li>
            <Link href="/contact" className="font-thin">
              تماس با ما
            </Link>
          </li>
          <li>
            <Link href="/news" className="font-thin">
              اخبار و رویدادها
            </Link>
          </li>
        </ul>
      </nav>
      <div className="space-x-4 navbar-end">
        <Link href="/login" className="rounded-lg btn btn-primary btn-sm">
          ثبت نام
        </Link>
        <Link href="/login" className="rounded-lg btn btn-outline btn-sm hover:btn-primary">
          ورود
        </Link>
      </div>
    </header>
  );
}
