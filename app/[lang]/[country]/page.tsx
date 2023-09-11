import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
const inter = Inter({ subsets: ["latin"] });

import {
  getLocalePartsFrom,
  locales,
  ValidLocale,
  getTranslator,
} from "@/i18n";

export async function generateStaticParams() {
  return locales.map((locale) => getLocalePartsFrom({ locale }));
}

export default async function Home({
  params,
  searchParams,
}: {
  params: { lang: string; country: string };
  searchParams: any; // Type your params
}) {
  const translate = await getTranslator(
    `${params.lang}-${params.country.toUpperCase()}` as ValidLocale // our middleware ensures this is valid
  );
  return (
    <div>
      {JSON.stringify(searchParams)}
      <h1>{translate("welcome.helloWorld")}</h1>
      <h2>
        {translate("welcome.happyYear", {
          year: new Date().getFullYear(),
        })}
      </h2>
    </div>
  );
}
