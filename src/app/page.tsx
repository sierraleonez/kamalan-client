import { Box, Typography } from "@mui/material";
import { DM_Serif_Display } from "next/font/google";
import Image from "next/image";
const DefaultFont = DM_Serif_Display({ subsets: ["latin"], weight: "400" });
const DefaultFontItalic = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});
const kamalan_logo_black = "/static/asset/kamalan_logo_black.svg";
const love_thumbnail = "/static/asset/love.svg";
const featured_image = "/static/asset/featured/secret_santa.png";
const PRODUK_LOKAL_LOGOS = [
  {
    asset: "/static/asset/vendor-logo/dailycrumbs_logo.svg",
    key: "dailycrumb_logo",
  },
  {
    asset: "/static/asset/vendor-logo/kofitiere_logo.svg",
    key: "kofitiere_logo",
  },
  {
    asset: "/static/asset/vendor-logo/honeylane_logo.svg",
    key: "honeylane_logo",
  },
  {
    asset: "/static/asset/vendor-logo/breman_logo.svg",
    key: "breman_logo",
  },
  {
    asset: "/static/asset/vendor-logo/happysheep_logo.svg",
    key: "happysheep_logo",
  },
  {
    asset: "/static/asset/vendor-logo/vendorx_logo.svg",
    key: "vendorx_logo",
  },
];
type iCatatanKamalanEntries = {
  asset: string;
  key: string;
  title: string;
  desc: string;
};
const CATATAN_KAMALAN_ENTRIES: Array<iCatatanKamalanEntries> = [
  {
    asset: "/static/asset/catatan-kamalan/wedding_things.png",
    key: "wedding_things",
    title: "WEDDING THINGS",
    desc: "Hadiah Spesial untuk Acara Sakral",
  },
  {
    asset: "/static/asset/catatan-kamalan/birthday_pray.png",
    key: "birthday_pray",
    title: "BIRTHDAY PRAY",
    desc: "Kado Istimewa kepada dia yang Tercinta",
  },
  {
    asset: "/static/asset/catatan-kamalan/dearest_baby.png",
    key: "dearest_baby",
    title: "MY DEAREST BABY",
    desc: "Perlengkapan buat Si Kecil yang Kian Terampil",
  },
];

export default function Home() {
  return (
    <>
      <Box className="w-full grid gap-y-32 pb-10">
        <Hero />
        <Body />
      </Box>
    </>
  );
}

function Hero() {
  return (
    <Box className="w-full grid grid-cols-2">
      <RegistryHero />
      <GiftHero />
    </Box>
  );
}

function RegistryHero() {
  return (
    <Box className="flex bg-hero-registry-bg min-h-screen px-40 pb-44 items-end">
      <p className={`${DefaultFont.className} text-pandan text-8xl`}>
        Gift <br />
        Registry
      </p>
    </Box>
  );
}

function GiftHero() {
  return (
    <Box className=" flex bg-hero-gift-bg min-h-screen px-40 pb-44 items-end">
      <p className={`${DefaultFont.className} text-white text-8xl`}>
        Gift <br /> Shop
      </p>
    </Box>
  );
}

function Body() {
  return (
    <Box className="grid gap-y-10 w-full">
      <SolutionSection />
      <KamalanFeatured />
      <CatatanKamalan />
    </Box>
  );
}

function SolutionSection() {
  return (
    <>
      <SectionTitle title="Kamalan Registry sebagai Solusimu" />
      <Box className="px-40 grid gap-y-20">
        <WithKamalanContent />
        <CepatMudahContent />
        <BanggaProdukLokal />
      </Box>
    </>
  );
}

function CatatanKamalan() {
  return (
    <Box className="grid gap-y-10">
      <SectionTitle title="Catatan Kamalan" />
      <Box className="px-40">
      <Box className="flex gap-x-5">
        {CATATAN_KAMALAN_ENTRIES.map((catatanEntry) => (
          <CatatanKamalanCard {...catatanEntry} key={catatanEntry.key} />
        ))}
      </Box>

      </Box>
    </Box>
  );
}

function CatatanKamalanCard({
  asset,
  desc,
  key,
  title,
}: iCatatanKamalanEntries) {
  return (
    <Box>
      <Box className="relative">
        <Box className="absolute bg-white px-4 py-2 right-1/2 bottom-0">
          <Typography>{title}</Typography>
        </Box>
        <Image src={asset} alt={key} width={480} height={480} />
      </Box>
      <Box className="bg-pandan flex items-center justify-center">
        <p className="text-white text-md">{desc}</p>
      </Box>
    </Box>
  );
}

function KamalanFeatured() {
  return (
    <>
      <SectionTitle title="Bulan ini di Kamalan" />
      <Box className="px-40">
        <Box className="relative">
          <Image
            src={love_thumbnail}
            alt="love_thumbnail"
            width={48}
            height={48}
            className="fill-white absolute left-10 top-8"
          />
          <Image
            src={featured_image}
            alt="featured_image"
            width={1600}
            height={800}
          />
        </Box>
      </Box>
    </>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <Box className="flex items-center gap-x-8">
      <Box className="grow bg-pandan h-1" />
      <p className="text-5xl text-pandan max-w-full">{title}</p>
      <Box className="bg-pandan h-1 grow" />
    </Box>
  );
}

function CepatMudahContent() {
  return (
    <Box className="flex items-center">
      <SmallBorderGiftBox position="left">
        <Typography className="text-3xl text-pandan indent-5">
          Tidak perlu menghabiskan waktu lagi untuk cari hadiah kesana-kemari
          sebab di Kamalan, kamu bisa leluasa pilah-pilih hadiah dan memabgikan
          Registry secara online <TaglineSpan>#CepatNanMudah</TaglineSpan>
        </Typography>
      </SmallBorderGiftBox>
      <LargeGradientBox className="bg-pandan-to-merica" />
    </Box>
  );
}

function BanggaProdukLokal() {
  return (
    <Box className="flex items-center">
      <LargeGradientBox className="border-pandan border-[6px]">
        <Box className="grid grid-cols-3 justify-items-center items-center justify-center w-full h-full">
          {PRODUK_LOKAL_LOGOS.map((produkLogo) => (
            <Image
              src={produkLogo.asset}
              alt={produkLogo.key}
              key={produkLogo.key}
              width={200}
              height={200}
            />
          ))}
        </Box>
      </LargeGradientBox>
      <SmallBorderGiftBox position="right">
        <Typography className="text-3xl text-pandan indent-5">
          Jangan khawatir mendapat ataupun memberikan kado yang ternyata tidak
          berkualitas, karena produk di Kamalan sudah dikurasi dari brand asli
          Indonesia <TaglineSpan>#BanggaProdukLokal</TaglineSpan>
        </Typography>
      </SmallBorderGiftBox>
    </Box>
  );
}

function WithKamalanContent() {
  return (
    <Box className="flex items-center">
      <LargeGradientBox className="bg-merica-to-pandan" />
      <SmallBorderGiftBox position="right">
        <Typography className="text-3xl text-pandan indent-5">
          Ucapkan selamat tinggal ke tumpukan sama tiap tahun, karena kini kamu
          akan dapat hadiah sesuai dengan kebutuhan dan keinginanmu{" "}
          <TaglineSpan>#DenganKamalan</TaglineSpan>
        </Typography>
      </SmallBorderGiftBox>
    </Box>
  );
}

function TaglineSpan({ children }: { children: React.ReactNode }) {
  return (
    <span className={`${DefaultFontItalic.className} text-pandan`}>
      {children}
    </span>
  );
}

type BoxPosition = "left" | "right";
function LargeGradientBox({
  children,
  className = "",
}: {
  children?: React.ReactElement;
  className?: string;
}) {
  return <Box className={`w-3/5 h-[600px] ${className}`}>{children}</Box>;
}

function SmallBorderGiftBox({
  children,
  position,
}: {
  children?: React.ReactElement;
  position: BoxPosition;
}) {
  // const BorderStyle = `border-${position === "left" ? "l" : "r"}-2`;
  const tw =
    "w-2/5 h-[480px] border-t-[6px] border-b-[6px] border-solid border-pandan relative flex items-center justify-center px-16" +
    ` border-${position === "left" ? "l" : "r"}-[6px]`;

  return (
    <Box className={tw}>
      <Image
        src={love_thumbnail}
        alt="love_thumbnail"
        width={92}
        height={81}
        className="absolute left-1/2 -top-[70px]"
      />
      {children}
    </Box>
  );
}
