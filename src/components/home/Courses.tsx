import Image from "next/image";

export default function Courses() {
  const courses = [
    {
      title: "دوره استعداد یابی کودکان(حضوری)",
      desc: "آزمون ها، تحلیل داده، برنامه ریزی رشد",
      direction: "8 جلسه",
      price: "تماس",
      isOnline: false,
      image: "/images/coursesPic/c1.jpg",
    },
    {
      title: "آموزش مربیان ورزشی(آنلاین)",
      desc: "تمرین های عملی، روانشناسی ورزشی و مدیریت تمرین",
      direction: "6 هفته",
      price: "آنلاین",
      isOnline: true,
      image: "/images/coursesPic/c2.jpg",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-4 rounded-lg glass text-center">
      <div>
        <h1 className="my-4 text-3xl font-bold text-center">
          دوره و آرشیو آموزشی
        </h1>
        <p>
          دوره های حضوری و آنلاین با آرشیو دوره ها و امکان پرداخت آنلاین و
          دسترسی به متحوای ضبط شده.
        </p>
      </div>

      <div className="flex flex-col items-center gap-8 lg:flex-row ">
        {courses.map((course, index) => (
          <div key={index} className="flex shadow-lg card bg-base-100/60 border w-96">
            <figure>
              <Image src={course.image} alt="" width={400} height={400} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{course.title}</h2>
              <p>{course.desc}</p>
              <div className="justify-end card-actions">
                {course.isOnline ? (
                  <button className="rounded-lg btn btn-accent btn-sm">
                    ثبت نام آنلاین
                  </button>
                ) : (
                  <button className="rounded-lg btn btn-accent btn-sm">
                    ثبت نام و اطاعات بیشتر
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}

        <div className="border border-white shadow card w-96 h-fit bg-base-100/60">
          <div className="items-center text-center card-body">
            <h1 className="my-2 card-title">آرشیو دوره ها</h1>
            <p>دوره ها ضبط شده با هزینه ها مناسب</p>

            <p>دسترسی مادام العمر بعد از خرید</p>

            <div className="card-actions">
              <button className="rounded-lg btn btn-accent btn-sm btn-outline">
                مشاهده آرشیو
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
