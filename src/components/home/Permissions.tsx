import Image from "next/image";

export default function PermissionsSection() {
  const permissions = [
    { src: "/images/morva.png", title: "مجوز ۱" },
    { src: "/images/morva.png", title: "مجوز ۲" },
    { src: "/images/morva.png", title: "مجوز ۳" },
  ];

  return (
    <div className="container mx-auto mt-12 px-4 flex flex-col items-center gap-10 bg-gradient-to-b from-secondary to-accent py-8 rounded-3xl">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        مجوز ها
      </h1>
      
      <div className="flex flex-col sm:flex-row justify-center items-center sm:items-end gap-8 w-full">
        {permissions.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center bg-gradient-to-t from-primary to-accent rounded-2xl p-4 transition-transform duration-300 hover:-translate-y-3 hover:shadow-xl shadow-indigo-300/30`}
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
              className={`mt-3 text-center transition-all duration-300 text-base-300 ${
                index === 1
                  ? "text-lg md:text-xl font-bold mt-8"
                  : "text-base font-medium"
              }`}
            >
              {item.title}
            </span>
          </div>
        ))}
      </div>
   
      <button className="btn btn-secondary rounded-lg btn-outline text-white">
        اطلاعات بیشتر
      </button>
    </div>
  );
}
