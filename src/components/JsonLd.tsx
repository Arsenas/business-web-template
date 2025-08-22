// JsonLd.tsx
export type LocalBusiness = {
  "@context": "https://schema.org";
  "@type": "LocalBusiness" | "Restaurant" | "ProfessionalService";
  name: string;
  url?: string;
  image?: string;
  telephone?: string;
  email?: string;
  address?: {
    "@type": "PostalAddress";
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  description?: string;
};

type Props<T extends object> = { data: T; id?: string };

export default function JsonLd<T extends object>({ data, id }: Props<T>) {
  return <script id={id} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
