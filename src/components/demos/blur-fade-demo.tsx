import {BlurFade} from "../magicui/blur-fade";
import Image from "next/image";
import Link from "next/link";

const works = [
  {
    background: "bg-gray-200",
    imageUrl: "/project/claudecosmeti.png",
    title: "Claude Cosmetici",
    link: "https://claudiacosmetici.com/",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/project/biloo.png",
    title: "Basile Bilo",
    link: "https://basilebilo.fr/",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/project/pocflys.png",
    title: "Pocfly",
    link: "https://www.pocfly.com/",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/project/savoieflock.png",
    title: "Savoie Flock",
    link: "https://savoieflock.fr/",
  },


];

export function BlurFadeDemo() {
  return (
    <section id="photos"  aria-labelledby="projects-heading">
      <div className="grid md:grid-cols-2 gap-8 mt-10 justify-items-center">
        {works.map(({ imageUrl, title, link }, idx) => (
          <BlurFade
            key={title}
            delay={0.25 + idx * 0.05}
            inView
            className={`rounded-lg ${works[idx].background} p-4`}
          >
            <Link href={link} target="_blank" rel="noreferrer" aria-label={`Voir le projet ${title}`}>
              <Image
                height={10000}
                width={10000}
                className="h-5/6 w-full object-cover rounded-lg"
                src={imageUrl}
                alt={`Random stock image ${idx + 1}`}
                quality={85}
                priority={idx < 2}
              />
              <h3 className="text-lg font-semibold p-4">{title}</h3>
            </Link>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}