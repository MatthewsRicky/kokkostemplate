export default function RestaurantSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": "https://www.kokkoscafe.com/#restaurant",
    name: "Kokkos Café & Bistro",
    url: "https://www.kokkoscafe.com",
    image: ["https://www.kokkoscafe.com/images/kokkos/hero.jpg"],
    telephone: "+254721565567",
    email: "kokkos.diani@gmail.com",
    priceRange: "$$",
    servesCuisine: ["International", "European", "Indian", "Kenyan"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Diani Beach Road",
      addressLocality: "Diani Beach",
      addressRegion: "Kwale County",
      addressCountry: "KE",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "23:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "09:00",
        closes: "16:30",
      },
    ],
    foundingDate: "2000",
    sameAs: [
      "https://www.tripadvisor.com/Restaurant_Review-g775870-d7603863-Reviews-Kokkos_Cafe_Bistro-Diani_Beach_Ukunda_Coast_Province.html",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
