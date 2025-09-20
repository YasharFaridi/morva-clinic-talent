import Image from "next/image";

export default function About() {
  return (
    <div
      className="hero rounded-2xl lg:h-[700px] my-6"
      style={{ backgroundImage: "url('/images/About-bg.jpg')", height: "" }}
    >
      <div className="size-full rounded-2xl bg-gradient-to-tr from-[#005784] to-[#052A3D] opacity-75"></div>
      <div className="hero-content flex flex-col">
        <h1 className="font-bold md:text-3xl text-2xl">درباره مروا</h1>
        <div className="flex flex-col-reverse lg:flex-row lg:gap-36 items-center">
          <p className="font-bold text-center lg:text-right md:text-2xl text-md my-8 ">
            موسسه مروا با تکیه بر تیمی متخصص و متعهد، فعالیت خود را در حوزه‌های
            مدیریت، روانشناسی، علوم ورزشی و استعدادیابی آغاز کرده است و در
            راستای نیازهای جامعه، ارائه خدمات آموزشی، پژوهشی، مشاوره‌ای و فرهنگی
            را در سطوح استانی، ملی و بین‌المللی دنبال می‌نماید. موسسه مروا با
            تکیه بر تیمی متخصص و متعهد، فعالیت خود را در حوزه‌های مدیریت،
            روانشناسی، علوم ورزشی و استعدادیابی آغاز کرده است و در راستای
            نیازهای جامعه، ارائه خدمات آموزشی، پژوهشی، مشاوره‌ای و فرهنگی را در
            سطوح استانی، ملی و بین‌المللی دنبال می‌نماید.
          </p>
          <Image
            className="size-44 lg:size-full"
            src="/images/Morva.PNG"
            alt="Morva"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
