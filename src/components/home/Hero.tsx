export default function Hero() {
  return (
    <div
      className="hero md:container md:mx-auto rounded-2xl"
      style={{
        backgroundImage: "url('/imgs/Hero-bg.png')",
        height: "70vh",
      }}
    >
      <div className="size-full bg-gradient-to-tr from-[#005784] to-[#052A3D] opacity-75 rounded-2xl"></div>
      <div className="hero-content text-center flex flex-col">
        <h1 className="font-bold md:text-5xl">به موسسه مروا خوش آمدید</h1>
        <p className="md:text-3xl w-1/2 font-thin">
          مروا ساختن آینده ای درخشان برای شما چرا که شکوفایی استعداد ها آینده
          روشن را به ارمقان می آورد
        </p>
        <button className="btn btn-primary rounded-2xl">شروع کنید</button>
      </div>
    </div>
  );
}
