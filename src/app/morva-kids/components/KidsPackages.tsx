import React from "react";

export default function KidsPackages() {
  const packages = [
    { title: "پیش دبستانی" },
    { title: "اول تا سوم دبستان" },
    { title: "چهارم تا ششم دبستان" },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4 mt-12 justify-center items-center">
      {packages.map((p, index) => (
        <div key={index} className="card bg-base-300 w-96 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">{p.title}</h2>
            {/* <p>A card component has a figure, a body part, and inside body there are title and actions parts</p> */}
            <div className="card-actions justify-end">
              <button className="btn btn-primary rounded-xl">
                اطلاعات بیشتر و ثبت نام
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
