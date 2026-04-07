interface BoatCardProps {
  image: string;
  name: string;
  category: string;
  description: string;
  specs: { label: string; value: string }[];
}

const BoatCard = ({ image, name, category, description, specs }: BoatCardProps) => {
  return (
    <div className="group bg-card rounded-sm overflow-hidden border border-border hover:border-primary/30 transition-colors duration-500">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={name}
          loading="lazy"
          width={800}
          height={600}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-primary-foreground text-xs font-body font-semibold uppercase tracking-wider px-3 py-1.5">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
          {name}
        </h3>
        <p className="text-muted-foreground font-light leading-relaxed mb-6">
          {description}
        </p>
        <div className="grid grid-cols-3 gap-4 border-t border-border pt-6">
          {specs.map((spec) => (
            <div key={spec.label} className="text-center">
              <p className="text-primary font-heading text-xl font-bold">{spec.value}</p>
              <p className="text-muted-foreground text-xs uppercase tracking-wider mt-1">{spec.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoatCard;
