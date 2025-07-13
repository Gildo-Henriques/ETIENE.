import { useInfiniteScroll } from "./useInfiniteScroll";

const imageData = [
  { src: "/github.svg", alt: "GitHub", size: "lg:size-14 size-9" },
  { src: "/laravel.svg", alt: "Laravel", size: "lg:size-14 size-9" },
  { src: "/php.svg", alt: "PHP", size: "lg:size-20 size-16" },
  { src: "/python.svg", alt: "Python", size: "lg:size-16 size-10" },
  { src: "/rest.svg", alt: "REST", size: "lg:size-16 size-10" },
  { src: "/sql.svg", alt: "SQL", size: "lg:size-16 size-10" },
  { src: "/html5.svg", alt: "HTML5", size: "lg:size-14 size-9" },
  { src: "/git.svg", alt: "Git", size: "lg:size-20 size-12" },
  { src: "/github.svg", alt: "GitHub", size: "lg:size-14 size-9" },
  { src: "/laravel.svg", alt: "Laravel", size: "lg:size-14 size-9" },
  { src: "/php.svg", alt: "PHP", size: "lg:size-20 size-16" },
  { src: "/python.svg", alt: "Python", size: "lg:size-16 size-10" },
  { src: "/rest.svg", alt: "REST", size: "lg:size-16 size-10" },
  { src: "/sql.svg", alt: "SQL", size: "lg:size-16 size-10" },
];

export default function Tecnologias() {
  const { scrollRef } = useInfiniteScroll({ speed: 1 });
  const duplicatedImageData = [...imageData, ...imageData];

  return (
    <div className="overflow-hidden px-20 py-10 w-full rounded-b-[50px] bg-white">
      <div
        ref={scrollRef}
        className="flex whitespace-nowrap lg:gap-20 gap-10 will-change-transform items-center"
      >
        {duplicatedImageData.map((item, index) => (
          <img
            key={`${item.src}-${index}`}
            src={item.src}
            alt={item.alt}
            className={`${item.size} mx-4`}
          />
        ))}
      </div>
    </div>
  );
}


  