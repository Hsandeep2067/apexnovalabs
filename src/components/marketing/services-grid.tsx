import { services } from "@/lib/content";
import { ServiceCard } from "@/components/cards/service-card";

export function ServicesGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service.slug} service={service} />
      ))}
    </div>
  );
}
