import { Card, CardContent } from "@/components/ui/card";
import location1Logo from "@/assets/location1-logo.png";
import location2Logo from "@/assets/location2-logo.png";

const locations = [
  { name: "Benicia Boxing & Martial Arts", subtitle: "Benicia", logo: location1Logo, href: "#" },
  { name: "NorCal Boxing Club", subtitle: "Fairfield — Opening Soon", logo: location2Logo, href: "#" },
];

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10 px-6 py-12 md:gap-14">
      <h1 className="font-heading text-center text-2xl font-bold uppercase tracking-[0.2em] text-primary sm:text-3xl md:text-4xl">
        Select Your Location
      </h1>

      <div className="flex w-full max-w-lg flex-col items-stretch gap-6 md:max-w-5xl md:flex-row md:justify-center md:gap-8">
        {locations.map((loc) => (
          <a key={loc.name} href={loc.href} className="group w-full md:max-w-xs">
            <Card className="h-full border border-primary/20 bg-card transition-all duration-300 hover:scale-[1.03] hover:border-primary hover:shadow-xl hover:shadow-primary/25">
              <CardContent className="flex flex-col items-center gap-4 p-4">
                <div className="flex h-56 w-full items-center justify-center overflow-hidden rounded-lg bg-foreground/95 p-2 md:h-64">
                  <img
                    src={loc.logo}
                    alt={`${loc.name} logo`}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="font-heading text-center text-base font-semibold uppercase tracking-wider text-primary">
                    {loc.name}
                  </span>
                  {loc.subtitle && (
                    <span className="text-sm text-muted-foreground">{loc.subtitle}</span>
                  )}
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Index;
