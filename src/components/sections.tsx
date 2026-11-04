import Image from "next/image";
import {
  ArrowUpRight,
  Code2,
  Layers3,
  ShieldCheck,
  Smartphone,
  Target,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { Feature, Project } from "@/config/site";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}
export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">
          <span className="tiny-square" />
          {eyebrow}
        </span>
        <h2>{title}</h2>
      </div>
      {description && <p>{description}</p>}
    </div>
  );
}
const icons: Record<Feature["icon"], LucideIcon> = {
  code: Code2,
  zap: Zap,
  phone: Smartphone,
  layers: Layers3,
  target: Target,
  shield: ShieldCheck,
};
interface FeaturesProps {
  items: Feature[];
}
export function Features({ items }: FeaturesProps) {
  return (
    <div className="feature-grid">
      {items.map((item, index) => {
        const Icon = icons[item.icon];
        return (
          <article key={item.title} className="feature-card">
            <div className="feature-top">
              <Icon size={23} strokeWidth={1.4} />
              <span>0{index + 1}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        );
      })}
    </div>
  );
}
interface ProjectGalleryProps {
  items: Project[];
}
export function ProjectGallery({ items }: ProjectGalleryProps) {
  return (
    <div className="project-grid">
      {items.map((project) => (
        <a
          key={project.title}
          className="project-card group"
          href={project.href}
          {...(project.href.startsWith("https://")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          <div className="project-image">
            <Image
              src={project.image}
              width={640}
              height={420}
              alt={`Representação visual do projeto ${project.title}`}
              sizes="(max-width: 767px) 100vw, 33vw"
            />
            <span className="project-open">
              <ArrowUpRight size={19} />
            </span>
          </div>
          <div className="project-meta">
            <span>{project.category}</span>
            <span>/{project.number}</span>
          </div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="tags">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </a>
      ))}
    </div>
  );
}
interface GalleryProps {
  items: { title: string; description: string }[];
}
export function Gallery({ items }: GalleryProps) {
  return (
    <div className="project-grid">
      {items.map((item, index) => (
        <article className="project-card" key={item.title}>
          <div className={`room-preview room-${index}`}>
            <Image
              src={`/projects/room-${index}.svg`}
              width={640}
              height={420}
              alt={`Ilustração conceitual: ${item.title}`}
              sizes="(max-width: 767px) 100vw, 33vw"
            />
          </div>
          <div className="project-meta">
            <span>PROJETO ILUSTRATIVO</span>
            <span>0{index + 1}</span>
          </div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  );
}
