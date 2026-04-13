import { Link } from "react-router-dom";
import { Ruler, Wind, Users } from "lucide-react";

interface BoatCardProps {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  specs: {
    length: string;
    speed: string;
    crew: string;
  };
  index: number;
}

const BoatCard = ({ slug, name, category, description, image, specs, index }: BoatCardProps) => {
  return (
    <Link to={`/barche/${slug}`}>
      <article
        className="group overflow-hidden rounded-lg border border-border bg-card transition-all duration-500 hover:border-primary/30 cursor-pointer"
        style={{
          boxShadow: "var(--shadow-card)",
          animationDelay: `${index * 150}ms`,
        }}
      >
        <div className="relative h-64 overflow-hidden">
          <img
            src={image}
            alt={name}
            loading="lazy"
            width={800}
            height={600}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
          <span className="absolute bottom-4 left-4 rounded-sm bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
            {category}
          </span>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold">{name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
          <div className="mt-5 grid grid-cols-3 gap-3 border-t border-border pt-5">
            <div className="flex flex-col items-center gap-1">
              <Ruler className="h-4 w-4 text-primary" />
              <span className="text-xs text-muted-foreground">Lunghezza</span>
              <span className="text-sm font-semibold">{specs.length}</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Wind className="h-4 w-4 text-primary" />
              <span className="text-xs text-muted-foreground">Velocità</span>
              <span className="text-sm font-semibold">{specs.speed}</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Users className="h-4 w-4 text-primary" />
              <span className="text-xs text-muted-foreground">Equipaggio</span>
              <span className="text-sm font-semibold">{specs.crew}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BoatCard;
