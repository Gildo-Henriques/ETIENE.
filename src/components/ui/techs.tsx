import { useInfiniteScroll } from "./useInfiniteScroll";

const imageData = [
  { src: "/html5.svg", alt: "HTML5", size: "lg:size-14 size-9" },
  { src: "/git.svg", alt: "Git", size: "lg:size-20 size-12" },
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
  const { scrollRef, isPaused, setIsPaused } = useInfiniteScroll({
    speed: 1,
    pauseOnHover: true,
  });

  const duplicatedImageData = [...imageData, ...imageData];

  return (
    <>
      <style jsx>{`
        .scroll-container {
          overflow: hidden;
          width: 100%;
        }
        .scroll-content {
          white-space: nowrap;
          will-change: transform;
        }
        .scroll-content > img {
          flex-shrink: 0;
        }
      `}</style>

      <div className="scroll-container px-20 lg:py-10 py-5 w-full rounded-b-[50px] bg-white">
        <div
          ref={scrollRef}
          className="scroll-content lg:gap-20 gap-8 flex items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
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
    </>
  );
}
