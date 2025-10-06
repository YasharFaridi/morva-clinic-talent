import Image from "next/image";

export default function Permissions() {
  const permissions = [
    { src: "/images/Morva-logo.png", title: "مجوز ۱" },
    { src: "/images/Morva-logo.png", title: "مجوز ۲" },
    { src: "/images/Morva-logo.png", title: "مجوز ۳" },
  ];

  return (
    <div className="container mx-auto my-12 px-4 flex flex-col items-center gap-10 bg-gradient-to-b from-primary/10 via-base-200/10 to-secondary/10 backdrop-blur-md py-8 rounded-3xl">
      <h1 className="text-3xl md:text-4xl font-bold text-base-content text-center mb-8">
        مجوز ها
      </h1>

      <div className="flex flex-col sm:flex-row justify-center items-center sm:items-end gap-8 w-full">
        {permissions.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center bg-base-300/60 border border-primary/40 rounded-2xl p-4 shadow-lg shadow-primary/30 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl`}
          >
            <Image
              src={item.src}
              width={index === 1 ? 180 : 150}
              height={index === 1 ? 180 : 150}
              alt={item.title}
              className={`relative transition-transform duration-300 ${
                index === 1 ? "-bottom-4 sm:-bottom-6 z-10" : "bottom-0"
              }`}
            />
            <span
              className={`mt-3 text-center transition-all duration-300 ${
                index === 1
                  ? "text-lg md:text-xl font-bold text-primary mt-6"
                  : "text-base font-medium text-base-content"
              }`}
            >
              {item.title}
            </span>
          </div>
        ))}
      </div>

      <button className="btn btn-secondary rounded-lg">
        اطلاعات بیشتر
      </button>
    </div>
  );
}
