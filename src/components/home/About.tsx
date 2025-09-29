"use client";
import Image from "next/image";
import { useState } from "react";
import { HiPlus } from "react-icons/hi";

export default function About() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "تاریخچه مروا",
      content: (
        <>
          <p className="mb-3">
            مؤسسه مدیریت رشد و استعداد مروا در تاریخ ۵ خرداد ۱۴۰۴ با هدف توسعه و
            ارتقای دانش، مهارت و توانمندی‌های فردی و سازمانی تأسیس شد. این مؤسسه
            با تکیه بر تیمی متخصص و متعهد، فعالیت خود را در حوزه‌های مدیریت،
            روانشناسی، علوم ورزشی و استعدادیابی آغاز کرده است.
          </p>
          <p>
            مأموریت ما ایجاد بستری حرفه‌ای برای شناسایی و پرورش استعدادها،
            ارتقای سلامت روان و جسم، و توانمندسازی افراد و سازمان‌ها است. مؤسسه
            مروا تلاش می‌کند با بهره‌گیری از روش‌های علمی و نوین، همایش‌ها،
            کارگاه‌ها و پروژه‌های تخصصی، سهمی مؤثر در رشد سرمایه انسانی ایفا
            نماید.
          </p>
        </>
      ),
    },
    {
      title: "اهداف مروا",
      content: (
        <ul className="pl-6 space-y-2 list-disc">
          <li>شناسایی و شکوفاسازی استعدادهای فردی و سازمانی.</li>
          <li>ارتقای سطح دانش، مهارت و آگاهی در جامعه.</li>
          <li>توسعه سلامت روان و جسم افراد.</li>
          <li>ارائه راهکارهای علمی به سازمان‌ها.</li>
          <li>گسترش همکاری‌های علمی و پژوهشی ملی و بین‌المللی.</li>
        </ul>
      ),
    },
    {
      title: "ارزش های مروا",
      content: (
        <ul className="pl-6 space-y-2 list-disc">
          <li>نوآوری و خلاقیت در آموزش، مشاوره و استعدادیابی.</li>
          <li>مشتری‌مداری و تعهد به نیازهای واقعی افراد و سازمان‌ها.</li>
          <li>کیفیت و تخصص در ارائه خدمات حرفه‌ای.</li>
          <li>مسئولیت اجتماعی در ارتقای فرهنگ و سلامت جامعه.</li>
          <li>همکاری و هم‌افزایی با نهادها و متخصصان داخلی و خارجی.</li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <div
        className="hero rounded-2xl lg:h-[700px] my-6"
        style={{ backgroundImage: "url('/images/About-bg.jpg')", height: "" }}
      >
        <div className="size-full rounded-2xl bg-gradient-to-tr from-[#005784] to-[#052A3D] opacity-75"></div>
        <div className="flex flex-col hero-content">
          <h1 className="mb-8 text-2xl font-bold md:text-3xl">درباره مروا</h1>

          <div className="flex items-center justify-between gap-12">
            <div className="h-full p-4 border rounded-lg shadow-sm bottom-2 bg-base-100/20 backdrop-blur-md border-white/80 lg:w-7/12 ">
              <h1 className="my-4 text-xl font-bold">ماموریت و تاریخچه</h1>
              <p>
                موسسه مروا با تکیه بر تیمی متخصص و متعهد، فعالیت خود را در
                حوزه‌های مدیریت، روانشناسی، علوم ورزشی و استعدادیابی آغاز کرده
                است و در راستای نیازهای جامعه، ارائه خدمات آموزشی، پژوهشی،
                مشاوره‌ای و فرهنگی را در سطوح استانی، ملی و بین‌المللی دنبال
                می‌نماید.
              </p>

              <div className="flex flex-col gap-2 my-4">
                <div className="flex gap-4">
                  <p className="p-1 rounded-md bg-sky-100 text-sky-900 w-fit whitespace-nowrap">
                    تاریخ تاسیس:
                  </p>
                  <span>1404/03/05</span>
                </div>
                <div className="flex gap-4">
                  <p className="p-1 rounded-md bg-sky-100 text-sky-900 w-fit whitespace-nowrap">
                    افتتاح رسمی:
                  </p>
                  <span>1404/04/04</span>
                </div>
              </div>
              <p>
                هدف ما ایجاد بستری حرفه ای برای شناسایی و رشد استعداد، ارتقاع
                سلامت روان و توسعه سلامت فردی و سازمانی است.
              </p>
            </div>
            <Image
              src="/images/morva.png"
              width={350}
              height={350}
              alt="Morva"
              className="hidden lg:block"
            />
          </div>
        </div>
      </div>

      <div className="container flex flex-col gap-4 px-4 mx-auto my-8">
        <h1 className="mb-6 text-3xl font-bold text-center">شرکت مروا</h1>

        {accordionData.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="overflow-hidden transition-all duration-300 bg-white border border-gray-200 shadow-md rounded-xl"
            >
              <button
                className="flex flex-row-reverse items-center justify-between w-full p-4 text-lg font-semibold text-right text-gray-800 transition-colors duration-200 md:text-xl hover:bg-gray-50"
                onClick={() => toggleIndex(index)}
              >
                <span className="w-full text-center md:text-right">
                  {item.title}
                </span>
                <HiPlus
                  className={`w-6 h-6 transition-transform duration-300 ${
                    isOpen ? "rotate-45" : "rotate-0"
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 px-4 md:px-6 ${
                  isOpen ? "max-h-[1000px] py-4" : "max-h-0"
                } text-gray-700 text-sm md:text-base leading-relaxed text-right`}
              >
                {item.content}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
