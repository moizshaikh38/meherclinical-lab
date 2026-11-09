import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

/* ---------- Schema Markup JSON-LD ---------- */

const schemaMedicalBusiness = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "LocalBusiness"],
  "@id": "https://meherclinicallab.com/#business",
  name: "Meher Clinical Laboratory",
  alternateName: "Meher Clinical Lab Karjat",
  url: "https://meherclinicallab.com",
  logo: "https://res.cloudinary.com/dgfwwnn4x/image/upload/v1784311761/IMG_9331_ta0jt8.jpg",
  image:
    "https://res.cloudinary.com/dgfwwnn4x/image/upload/v1784311761/IMG_9331_ta0jt8.jpg",
  description:
    "Karjat's most trusted clinical laboratory since 2002. Offering 500+ diagnostic tests, health packages, and home sample collection.",
  telephone: "+919422666178",
  email: "meherclinicallab@gmail.com",
  foundingDate: "2002-02-02",
  priceRange: "₹50 - ₹3200",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Bank Transfer",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shop 8, Samarth Building, Near Government Hospital",
    addressLocality: "Karjat",
    addressRegion: "Maharashtra",
    postalCode: "410201",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "18.9106",
    longitude: "73.3251",
  },
  hasMap:
    "https://maps.google.com?q=Meher%20clinical%20laboratory,%20Shop%208%20samarth%20bldg,%20near%20dagade%20vada%20paav,%20Karjat,%20Maharashtra%20410201&ftid=0x3be7fb9b3d47f821:0x78fe20d514748872",
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
      closes: "21:00",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+919422666178",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi", "Marathi"],
    contactOption: "TollFree",
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: "18.9106",
      longitude: "73.3251",
    },
    geoRadius: "5000",
  },
  medicalSpecialty: "Pathology",
  employee: {
    "@type": "Person",
    name: "Mr Abid Khan",
    jobTitle: "Founder & Technologist",
    description:
      "B.Sc. ADMLT qualified medical laboratory technologist with 23+ years of experience",
  },
  sameAs: [
    "https://maps.google.com?q=Meher%20clinical%20laboratory,%20Shop%208%20samarth%20bldg,%20near%20dagade%20vada%20paav,%20Karjat,%20Maharashtra%20410201&ftid=0x3be7fb9b3d47f821:0x78fe20d514748872",
  ],
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the working hours of Meher Clinical Laboratory?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are open all 6 days from 8:00 AM to 9:00 PM.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer home sample collection in Karjat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We offer home sample collection across Karjat and nearby 5km area. Book via WhatsApp at +91 9422666178.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to get reports?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most routine test reports are available on the same day. Some specialized tests may take 24-48 hours.",
      },
    },
    {
      "@type": "Question",
      name: "How will I receive my reports?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reports are sent via WhatsApp. You can also collect physical reports from our lab or receive them via email.",
      },
    },
    {
      "@type": "Question",
      name: "What payment methods do you accept?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We accept Cash, UPI (Google Pay, PhonePe, Paytm), and bank transfer.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide corporate health checkup services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We offer customized corporate health packages. Contact us for bulk pricing and on-site collection.",
      },
    },
    {
      "@type": "Question",
      name: "Are your reports accepted by all hospitals and doctors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our reports are prepared following standard medical protocols and are accepted by all hospitals, clinics, and doctors.",
      },
    },
    {
      "@type": "Question",
      name: "How can I book a test at Meher Clinical Laboratory Karjat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can book a test by calling us at +91 9422666178, sending a WhatsApp message, or visiting our lab directly at Shop 8, Samarth Building, Near Government Hospital, Karjat.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Meher Clinical Laboratory located in Karjat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are located at Shop 8, Samarth Building, Near Government Hospital, Karjat, Maharashtra 410201.",
      },
    },
    {
      "@type": "Question",
      name: "Do you need to fast before a blood test?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For fasting tests like blood sugar fasting and lipid profile, you need to fast for 10-12 hours. For other tests, fasting is not required. Contact us to confirm for your specific test.",
      },
    },
  ],
};

const schemaItemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Popular Diagnostic Tests at Meher Clinical Laboratory Karjat",
  description:
    "List of popular blood tests and diagnostic services available at Meher Clinical Laboratory, Karjat",
  url: "https://meherclinicallab.com/#services",
  numberOfItems: 9,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Complete Blood Count (CBC)",
      description:
        "CBC blood test available at Meher Clinical Laboratory, Karjat at ₹200",
      url: "https://meherclinicallab.com/#services",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Thyroid Profile T3 T4 TSH",
      description:
        "Thyroid test available at Meher Clinical Laboratory, Karjat at ₹400",
      url: "https://meherclinicallab.com/#services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Lipid Profile",
      description:
        "Lipid profile test at Meher Clinical Laboratory, Karjat at ₹500",
      url: "https://meherclinicallab.com/#services",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Liver Function Test LFT",
      description:
        "Liver function test at Meher Clinical Laboratory, Karjat at ₹500",
      url: "https://meherclinicallab.com/#services",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Kidney Function Test KFT",
      description:
        "Kidney function test at Meher Clinical Laboratory, Karjat at ₹600",
      url: "https://meherclinicallab.com/#services",
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Vitamin D Test",
      description:
        "Vitamin D test at Meher Clinical Laboratory, Karjat at ₹1200",
      url: "https://meherclinicallab.com/#services",
    },
    {
      "@type": "ListItem",
      position: 7,
      name: "HbA1c Diabetes Test",
      description:
        "HbA1c test for diabetes at Meher Clinical Laboratory, Karjat at ₹500",
      url: "https://meherclinicallab.com/#services",
    },
    {
      "@type": "ListItem",
      position: 8,
      name: "Dengue NS1 Antigen Test",
      description:
        "Dengue test at Meher Clinical Laboratory, Karjat at ₹600",
      url: "https://meherclinicallab.com/#services",
    },
    {
      "@type": "ListItem",
      position: 9,
      name: "Urine Routine Microscopy",
      description:
        "Urine routine test at Meher Clinical Laboratory, Karjat at ₹100",
      url: "https://meherclinicallab.com/#services",
    },
  ],
};

const schemaBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://meherclinicallab.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://meherclinicallab.com/#services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Health Packages",
      item: "https://meherclinicallab.com/#packages",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Home Collection",
      item: "https://meherclinicallab.com/#home-collection",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Contact",
      item: "https://meherclinicallab.com/#contact",
    },
  ],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          title:
            "Meher Clinical Laboratory Karjat | Blood Test, Health Checkup & Home Collection",
        },
        {
          name: "title",
          content:
            "Meher Clinical Laboratory Karjat | Blood Test, Health Checkup & Home Collection",
        },
        {
          name: "description",
          content:
            'Meher Clinical Laboratory — Karjat\'s most trusted pathology lab since 2002. Blood tests, health packages, home sample collection. Near Government Hospital, Karjat. Call +91 9422666178',
        },
        {
          name: "keywords",
          content:
            "pathology lab karjat, blood test karjat, diagnostic centre karjat, clinical laboratory karjat, meher clinical laboratory, health checkup karjat, home sample collection karjat, CBC test karjat, thyroid test karjat, sugar test karjat, lipid profile karjat, vitamin d test karjat, near government hospital karjat, best lab karjat, cheap blood test karjat, same day reports karjat, fever test karjat, dengue test karjat, malaria test karjat, urine test karjat, pathology lab near me karjat",
        },
        { name: "author", content: "Meher Clinical Laboratory" },
        {
          name: "robots",
          content:
            "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        },
        { name: "language", content: "English" },
        { name: "revisit-after", content: "7 days" },
        {
          name: "category",
          content: "Healthcare, Pathology, Diagnostic Laboratory",
        },

        /* Open Graph / Facebook / WhatsApp */
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://meherclinicallab.com/" },
        {
          property: "og:site_name",
          content: "Meher Clinical Laboratory",
        },
        {
          property: "og:title",
          content:
            "Meher Clinical Laboratory Karjat | Trusted Pathology Lab Since 2002",
        },
        {
          property: "og:description",
          content:
            "23+ years of accurate diagnostics. 500+ tests, affordable health packages, home collection in Karjat. Open 6 days 8AM-9PM. Call +91 9422666178",
        },
        {
          property: "og:image",
          content:
            "https://res.cloudinary.com/dgfwwnn4x/image/upload/v1784311761/IMG_9331_ta0jt8.jpg",
        },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        {
          property: "og:image:alt",
          content: "Meher Clinical Laboratory Karjat",
        },
        { property: "og:locale", content: "en_IN" },

        /* Twitter Card */
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:url",
          content: "https://meherclinicallab.com/",
        },
        {
          name: "twitter:title",
          content:
            "Meher Clinical Laboratory Karjat | Trusted Pathology Lab Since 2002",
        },
        {
          name: "twitter:description",
          content:
            "23+ years of accurate diagnostics. 500+ tests, affordable packages, home collection in Karjat.",
        },
        {
          name: "twitter:image",
          content:
            "https://res.cloudinary.com/dgfwwnn4x/image/upload/v1784311761/IMG_9331_ta0jt8.jpg",
        },

        /* Geo meta tags */
        { name: "geo.region", content: "IN-MH" },
        {
          name: "geo.placename",
          content: "Karjat, Maharashtra, India",
        },
        { name: "geo.position", content: "18.9106;73.3251" },
        { name: "ICBM", content: "18.9106, 73.3251" },
        {
          name: "DC.title",
          content: "Meher Clinical Laboratory Karjat",
        },
        {
          name: "DC.description",
          content:
            "Pathology lab and diagnostic centre in Karjat, Maharashtra, India",
        },
        {
          name: "DC.subject",
          content: "Pathology Lab, Blood Test, Health Checkup, Karjat",
        },
        { name: "DC.language", content: "en" },
        {
          name: "DC.coverage",
          content: "Karjat, Maharashtra, India",
        },

        /* Theme & Verification */
        { name: "theme-color", content: "#0A2647" },
        { name: "msapplication-TileColor", content: "#0A2647" },
        {
          name: "google-site-verification",
          content: "ADD_YOUR_GSC_VERIFICATION_CODE_HERE",
        },
        {
          name: "msvalidate.01",
          content: "ADD_YOUR_BING_VERIFICATION_CODE_HERE",
        },
      ],
      links: [
        { rel: "stylesheet", href: appCss },
        { rel: "canonical", href: "https://meherclinicallab.com" },
        { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },

        /* Preconnect & DNS Prefetch */
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },
        { rel: "preconnect", href: "https://res.cloudinary.com" },
        { rel: "dns-prefetch", href: "https://wa.me" },
        { rel: "dns-prefetch", href: "https://maps.google.com" },

        /* Fonts */
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
        },
      ],
      scripts: [
        /* 4A: MedicalBusiness + LocalBusiness Schema */
        {
          type: "application/ld+json",
          children: JSON.stringify(schemaMedicalBusiness),
        },
        /* 4B: FAQPage Schema */
        {
          type: "application/ld+json",
          children: JSON.stringify(schemaFAQ),
        },
        /* 4C: MedicalTest ItemList Schema */
        {
          type: "application/ld+json",
          children: JSON.stringify(schemaItemList),
        },
        /* 4D: BreadcrumbList Schema */
        {
          type: "application/ld+json",
          children: JSON.stringify(schemaBreadcrumb),
        },
      ],
    }),

    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  },
);

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
