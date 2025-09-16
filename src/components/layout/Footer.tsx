import Link from "next/link";

import { FaLocationDot } from "react-icons/fa6";
import { FaSquarePhoneFlip } from "react-icons/fa6";
import { FaMobileButton } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <footer className="p-10 rounded footer footer-horizontal bg-base-300 text-base-content">
        <div className="flex items-center justify-between w-full gap-8 flex-col md:flex-row">
          <div className="flex flex-col gap-4">

            <div className="flex md:items-end gap-2">
              <FaLocationDot className="size-16 md:size-6" />
              <p>
                اعتمادیه، خیابان شهید منصوری، دانشگاه آزاد اسلامی، دانشکده علوم
                و تربیت اسلامی، طبقه همکف
              </p>
            </div>
            <div className="flex items-end gap-2">
              <FaSquarePhoneFlip size={25} />
              <p>۳۳۴۶۱۲۲۱</p>
            </div>

            <div className="flex items-end gap-2">
              <FaMobileButton size={25} />
              <p>۰۹۹۰۶۴۴۳۲۲۹</p>
            </div>
            <div className="flex items-end gap-2">
              <FaEnvelope size={25} />
              <p>morva_clinic@domain.com</p>
            </div>
          </div>

          <div className="flex flex-col items-center w-full md:w-1/4 gap-2 p-4">
            <input
              type="text"
              placeholder="نام"
              className="w-full max-w-lg input input-bordered input-sm"
            />
            <input
              type="text"
              placeholder="ایمیل"
              className="w-full max-w-lg input input-bordered input-sm"
            />
            <textarea
              placeholder="متن پیام"
              className="w-full max-w-lg textarea textarea-bordered textarea-sm"
            ></textarea>
            <button className=" mx-auto btn btn-info btn-sm">
              ارسال
            </button>
          </div>
        </div>
      </footer>

      <footer className="p-10 rounded footer footer-horizontal footer-center bg-base-300 text-base-content">
        <div className="flex flex-col gap-8">
          <nav className="grid md:grid-flow-col gap-4">
            <Link className="link link-hover" href="/about">
              درباره ما
            </Link>
            <Link className="link link-hover" href="/news">
              اخبار و رویدادها
            </Link>
            <Link className="link link-hover" href="/services">
              خدمات
            </Link>
            <Link className="link link-hover" href="/packages">
              پکیج ها
            </Link>
          </nav>
          <nav className="grid grid-flow-col gap-4 text-3xl">
            <Link href="">
              <FaInstagram />
            </Link>
            <Link href="">
              <FaTelegram />
            </Link>
          </nav>
          <aside>
            <p>مروا | تمامی حقوق مخفوظ است. ©</p>
          </aside>
        </div>
      </footer>
    </>
  );
}
