export default function Articles() {
  const articles = [
    {
      title: "چگونه استعداد فرزندمان را کشف کنیم؟",
      desc: "راهنمای علمی برای والدین و معلمان",
    },
    {
      title: "تاثیر ورزش بر سلامت کودکان",
      desc: "مروری بر شواهد علمی و پیشنهادات علمی",
    },
    {
      title: "هوش مصنوعی در استعداد یابی: فرصت ها و چالش ها",
      desc: "نقش تکنولوژی در استعداد یابی و رشد",
    },
  ];
  return (
    <div className="flex flex-col items-center gap-4 my-4">
      <h1 className="text-3xl font-bold"> مقالات آموزشی</h1>
      <p>
        مجموعه ای از مقالات تخصصی در حوزه های مدیریت، روانشناسی، ورزشی و استعداد
        یابی به صورت بروز و رایگان
      </p>

      <div className="flex justify-around flex-grow gap-8 mt-8">
        {articles.map((article, index) => (
          <div
            key={index}
            className="border-2 shadow card w-96 bg-base-100 border-base-200"
          >
            <div className="items-center text-center card-body">
              <h1 className="my-2 card-title">{article.title} </h1>
              <p>{article.desc}</p>
              <div className="card-actions">
                <button className="btn btn-info btn-sm">ادامه مطلب</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="btn btn-outline btn-info ">نمایش همه مقالات</button>
    </div>
  );
}
