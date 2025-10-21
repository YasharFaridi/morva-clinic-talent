import Image from "next/image";
import Link from "next/link";

export default function Carts() {
  const carts = [
    {
      title: "مروا کودک",
      desc: "شکوفایی استعداد کودک دلبندتان را به ما بسپارید برای آینده تحصیلی، کاری، ورزشی و آینده ای درخشان",
      age: "6-12",
      img: "/images/Morva-children.png",
      page:'/morva-kids'
    },
    {
      title: "مروا بزرگسال",
      desc: "شکوفایی استعداد های خود را به مروا و تیم تخصصی مروا بسپارید و آینده شغلی رو رقم بزنید و بدرخشید",
      age: "20-30",
      img: "/images/Morva-adults.jpg",
      page:'/morva-adults'
    },
    {
      title: "مروا نوجوان",
      desc: "نوجوانان آینده این مرز و بوم هستن مروا کمک به شکوفایی آنها و آیندشان خواهد کرد",
      age: "20-30",
      img: "/images/Morva-teen.jpg",
      page:'/morva-teen'
    },
  ];
  return (
    <div className="container flex flex-col justify-around items-center gap-8 mx-auto my-16 lg:flex-row">
      {carts.map((cart, index) => (
        <div
          key={index}
          className="grid max-w-lg p-2 border-2 shadow-sm card bg-primary/10 md:grid-cols-2 w-96 lg:h-64"
        >
          <figure className="flex items-center justify-center">
            <Image
              src={cart.img}
              alt={cart.title}
              width={400}
              height={400}
              className="object-cover w-64 rounded-lg h-36"
            />
          </figure>

          <div className="flex flex-col justify-between card-body">
            <div>
              <h2 className="mb-4 text-center card-title">{cart.title}</h2>
              <p className="mb-4">{cart.desc}</p>
            </div>
            <div className="justify-end card-actions">
              <Link href={cart.page}>
                <button className="btn btn-accent rounded-xl text-xs text-nowrap">
                  ثبت نام و اطلاعات بیشتر
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
