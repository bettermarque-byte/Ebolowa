import type { Metadata } from "next";
import localFont from "next/font/local";
import TranslationsProvider from "@/utils/TranslationsProvider";
import initTranslations from "../i18n";
import "../../styles/globals.scss";

const regular = localFont({
  src: "../fonts/Inter-Regular.ttf",
  variable: "--regular-font",
});

const medium = localFont({
  src: "../fonts/Inter-Medium.ttf",
  variable: "--medium-font",
});

const semibold = localFont({
  src: "../fonts/Inter-SemiBold.ttf",
  variable: "--semibold-font",
});

type Props = {
  params: Promise<{ locale: string }>
}

//MetaData
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const {locale} = await params;
  const { t } = await initTranslations(locale, i18nNamespaces);
  
  return {
    title: t("Navigation:homemetatitle"),
    description: t("HomePage:herotext"),
    applicationName: "Communauté Urbaine d'Ebolowa",
    twitter: {
      card: "summary_large_image"
    }
  };
}

/**Translations */
const i18nNamespaces = ["Navigation", "HomePage"];

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  // ① Await the promise:
  const { locale } = await params;

  const { resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <html lang={locale}>
      <body
        className={`${regular.variable} ${medium.variable} ${semibold.variable}`}
      >
        <TranslationsProvider
          resources={resources}
          locale={locale}
          namespaces={i18nNamespaces}
        >
          {children}
        </TranslationsProvider>
      </body>
    </html>
  );
}
