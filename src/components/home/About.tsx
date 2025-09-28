import Image from "next/image";

export default function About() {
  return (
    <div
      className="hero rounded-2xl lg:h-[700px] my-6"
      style={{ backgroundImage: "url('/images/About-bg.jpg')", height: "" }}
    >
      <div className="size-full rounded-2xl bg-gradient-to-tr from-[#005784] to-[#052A3D] opacity-75"></div>
      <div className="flex flex-col hero-content">
        <h1 className="mb-8 text-2xl font-bold md:text-3xl">درباره مروا</h1>

        <div className="flex items-center justify-between gap-12">
          <div
            className="h-full p-4 border rounded-lg shadow-sm bottom-2 bg-base-100/20 backdrop-blur-md border-white/80 lg:w-7/12 "
          >
            <h1 className="my-4 text-xl font-bold">ماموریت و تاریخچه</h1>
            <p>
              موسسه مروا با تکیه بر تیمی متخصص و متعهد، فعالیت خود را در
              حوزه‌های مدیریت، روانشناسی، علوم ورزشی و استعدادیابی آغاز کرده است
              و در راستای نیازهای جامعه، ارائه خدمات آموزشی، پژوهشی، مشاوره‌ای و
              فرهنگی را در سطوح استانی، ملی و بین‌المللی دنبال می‌نماید.
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
            className="hidden md:block"
          />
        </div>
      </div>
    </div>
  );
}
