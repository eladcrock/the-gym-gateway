import { Card, CardContent } from "@/components/ui/card";
import location1Logo from "@/assets/location1-logo.png";
import location2Logo from "@/assets/location2-logo.png";

const locations = [
  { name: "Benicia Boxing & Martial Arts", logo: location1Logo, href: "#" },
  { name: "NorCal Boxing Club", logo: location2Logo, href: "#" },
];

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10 px-6 py-12 md:gap-14">
      <h1 className="font-heading text-center text-2xl font-bold uppercase tracking-[0.2em] text-primary sm:text-3xl md:text-4xl">
        Select Your Location
      </h1>

      <div className="flex w-full max-w-4xl flex-col items-center gap-8 md:flex-row md:justify-center">
        {locations.map((loc) => (
          <a
            key={loc.name}
            href={loc.href}
            className="group w-full max-w-sm"
          >
            <Card className="border border-primary/20 bg-card transition-all duration-300 hover:scale-[1.03] hover:border-primary hover:shadow-xl hover:shadow-primary/25">
              <CardContent className="flex flex-col items-center gap-6 p-8">
                <div className="flex h-44 w-44 items-center justify-center rounded-lg bg-foreground/95 p-4">
                  <img
                    src={loc.logo}
                    alt={`${loc.name} logo`}
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="font-heading text-center text-lg font-semibold uppercase tracking-wider text-primary">
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
