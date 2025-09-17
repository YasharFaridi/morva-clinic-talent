import Image from "next/image";

export default function Carts() {
  const carts = [
    {
      title: "مروا کودک",
      desc: "شکوفایی استعداد کودک دلبندتان را به ما بسپارید برای آینده تحصیلی، کاری، ورزشی و آینده ای درخشان",
      age: "6-12",
      img: "/images/Morva-children.png",
    },
    {
      title: "مروا کودک",
      desc: "شکوفایی استعداد کودک دلبندتان را به ما بسپارید برای آینده تحصیلی، کاری، ورزشی و آینده ای درخشان",
      age: "6-12",
      img: "/images/Morva-children.png",
    },
  ];
  return (
    <div className="container flex flex-col justify-around gap-8 mx-auto my-16 md:flex-row">
      {carts.map((cart, index) => (
        <div
          key={index}
          className="grid max-w-lg p-2 border-2 shadow-sm card bg-primary/10 md:grid-cols-2"
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
              <button className="btn btn-accent rounded-xl">
                ثبت نام و اطلاعات بیشتر
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
