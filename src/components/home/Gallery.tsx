import Image from "next/image";

export default function Gallery() {
  const images = [
    "/images/gallery/g1.jpg",
    "/images/gallery/g4.jpg",
    "/images/gallery/g2.jpg",
    "/images/gallery/g3.jpg",
    "/images/gallery/g1.jpg",
    "/images/gallery/g4.jpg",
    "/images/gallery/g2.jpg",
    "/images/gallery/g3.jpg",
    "/images/gallery/g1.jpg",
    "/images/gallery/g5.jpg",
  ];

  const patternCycle = [
    { type: "big", col: "col-span-3 row-span-2", ratio: "aspect-square" },
    { type: "grid4", col: "col-span-3 row-span-2", ratio: "aspect-square" },
  ];

  let imgIndex = 0;
  let flip = false; // برای اینکه big سمت راست یا چپ باشه

  const galleryItems = [];

  while (imgIndex < images.length) {
    for (const p of patternCycle) {
      if (imgIndex >= images.length) break;

      if (p.type === "big") {
        const src = images[imgIndex++];
        galleryItems.push(
          <div
            key={imgIndex}
            className={`col-span-3 row-span-2 ${flip ? "order-last" : ""}`}
          >
            <Image
              className={`w-full h-full object-cover rounded-xl ${p.ratio}`}
              src={src}
              width={800}
              height={800}
              alt={`big image ${imgIndex}`}
            />
          </div>
        );
        flip = !flip; // جابه‌جا کردن جهت بعدی
      }

      if (p.type === "grid4") {
        const group = images.slice(imgIndex, imgIndex + 4);
        imgIndex += group.length;
        galleryItems.push(
          <div
            key={imgIndex}
            className={`${p.col} grid grid-cols-2 grid-rows-2 gap-4`}
          >
            {group.map((src, i) => (
              <Image
                key={i}
                className={`w-full h-full object-cover rounded-xl ${p.ratio}`}
                src={src}
                width={400}
                height={400}
                alt={`small image ${i}`}
              />
            ))}
          </div>
        );
      }
    }
  }

  return (
    <div className="flex flex-col items-center gap-6 p-4">
      <h1 className="text-3xl font-bold">گالری فعالیت ها</h1>

      <div className="grid w-full max-w-6xl grid-cols-6 gap-4 auto-rows-auto">
        {galleryItems}
      </div>
    </div>
  );
}
