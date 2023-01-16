import {
  getLocalePartsFrom,
  locales,
  ValidLocale,
  getTranslator,
} from "@/i18n";

export async function generateStaticParams() {
  return locales.map((locale) => getLocalePartsFrom({ locale }));
}

export default async function Demo({
  params,
}: {
  params: { lang: string; country: string };
}) {
  const translate = await getTranslator(
    `${params.lang}-${params.country.toUpperCase()}` as ValidLocale // our middleware ensures this is valid
  );
  return (
    <div>
      <h1>Example page: {translate("welcome.helloWorld")}</h1>
    </div>
  );
}
