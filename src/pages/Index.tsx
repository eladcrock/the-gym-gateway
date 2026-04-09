import { Card, CardContent } from "@/components/ui/card";
import location1Logo from "@/assets/location1-logo.png";
import location2Logo from "@/assets/location2-logo.svg";

const locations = [
  { name: "Benicia Boxing & Martial Arts", logo: location1Logo, href: "#" },
  { name: "NorCal Boxing", logo: location2Logo, href: "#" },
];

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 px-6 py-12 md:gap-12">
      <h1 className="font-heading text-center text-2xl font-bold uppercase tracking-widest text-primary sm:text-3xl md:text-4xl">
        Select Your Location
      </h1>

      <div className="flex w-full max-w-3xl flex-col items-center gap-8 md:flex-row md:justify-center">
        {locations.map((loc) => (
          <a
            key={loc.name}
            href={loc.href}
            className="group w-full max-w-xs"
          >
            <Card className="border-border bg-card transition-all duration-300 hover:scale-105 hover:border-primary hover:shadow-lg hover:shadow-primary/20">
              <CardContent className="flex flex-col items-center gap-6 p-10">
                <div className="flex h-40 w-40 items-center justify-center rounded-full bg-muted">
                  <img
                    src={loc.logo}
                    alt={`${loc.name} logo`}
                    className="h-24 w-24 object-contain opacity-50"
                  />
                </div>
                <span className="font-heading text-lg font-semibold uppercase tracking-wider text-primary">
                  {loc.name}
                </span>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Index;
