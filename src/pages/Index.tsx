import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import location1Logo from "@/assets/location1-logo.png";
import location2Logo from "@/assets/location2-logo.png";

const locations = [
  { name: "Benicia Boxing & Martial Arts", subtitle: "Benicia", logo: location1Logo, href: "#" },
  { name: "NorCal Boxing Club", subtitle: "Fairfield — Opening Soon", logo: location2Logo, href: "#" },
];

const LocationCard = ({ loc }: { loc: typeof locations[0] }) => (
  <a href={loc.href} className="group w-full">
    <Card className="h-full border border-primary/20 bg-card transition-all duration-300 hover:scale-[1.03] hover:border-primary hover:shadow-xl hover:shadow-primary/25">
      <CardContent className="flex flex-col items-center gap-4 p-4">
        <div className="flex h-48 w-full items-center justify-center overflow-hidden rounded-lg bg-foreground/95 p-2">
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
);

const Index = () => {
  const isMobile = useIsMobile();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10 px-6 py-12 md:gap-14">
      <h1 className="font-heading text-center text-2xl font-bold uppercase tracking-[0.2em] text-primary sm:text-3xl md:text-4xl">
        Select Your Location
      </h1>

      <div className="flex w-full max-w-md flex-col items-stretch gap-4 md:max-w-4xl md:flex-row md:justify-center md:gap-6">
        {locations.map((loc, i) =>
          isMobile ? (
            <Collapsible
              key={loc.name}
              open={openIndex === i}
              onOpenChange={(open) => setOpenIndex(open ? i : null)}
            >
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg border border-primary/20 bg-card px-4 py-3 text-left transition-colors hover:border-primary">
                <div className="flex flex-col">
                  <span className="font-heading text-sm font-semibold uppercase tracking-wider text-primary">
                    {loc.name}
                  </span>
                  {loc.subtitle && (
                    <span className="text-xs text-muted-foreground">{loc.subtitle}</span>
                  )}
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-primary transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2">
                <LocationCard loc={loc} />
              </CollapsibleContent>
            </Collapsible>
          ) : (
            <div key={loc.name} className="w-full max-w-xs">
              <LocationCard loc={loc} />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Index;
