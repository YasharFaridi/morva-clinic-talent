import Image from "next/image";

export default function Articles() {
  const articles = [
    {
      title: "چگونه استعداد فرزندمان را کشف کنیم؟",
      desc: "راهنمای علمی برای والدین و معلمان",
      image: "/images/articlesPic/a1.jpg",
    },
    {
      title: "تاثیر ورزش بر سلامت کودکان",
      desc: "مروری بر شواهد علمی و پیشنهادات علمی",
      image: "/images/articlesPic/a2.jpg",
    },
    {
      title: "هوش مصنوعی در استعداد یابی: فرصت ها و چالش ها",
      desc: "نقش تکنولوژی در استعداد یابی و رشد",
      image: "/images/articlesPic/a3.jpg",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-4 my-4 p-6 text-center ">
      <h1 className="text-3xl font-bold"> مقالات آموزشی</h1>
      <p>
        مجموعه ای از مقالات تخصصی در حوزه های مدیریت، روانشناسی، ورزشی و استعداد
        یابی به صورت بروز و رایگان
      </p>

      <div className="flex justify-around flex-grow gap-8 mt-8 flex-col lg:flex-row">
        {articles.map((article, index) => (
          <div
            key={index}
            className="card bg-base-100 image-full w-96 shadow-sm"
          >
            <figure className="rounded-2xl">
              <Image
                className="rounded-2xl"
                src={article.image}
                alt=""
                fill
              />
            </figure>

            <div className="items-center text-center card-body">
              <h1 className="my-2 card-title min-h-[3.5rem] flex items-center justify-center">
                {article.title}
              </h1>
        
              <p className="mx-8">{article.desc}</p>
            
              <div className="card-actions mt-6">
                <button className="btn btn-accent btn-sm rounded-lg">
                  ادامه مطلب
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="btn btn-outline btn-secondary rounded-lg">
        نمایش همه مقالات
      </button>
    </div>
  );
}
