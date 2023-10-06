import { Box, Typography } from "@mui/material";
import { DM_Serif_Display } from "next/font/google";

import footer_bg_url from "../../public/static/asset/footer_home_bg.png";
import instagram_icon from "../../public/static/asset/social-media-icon/instagram_black.svg";
import facebook_icon from "../../public/static/asset/social-media-icon/facebook_black.svg";
import twitter_icon from "../../public/static/asset/social-media-icon/twitter_black.svg";
import tiktok_icon from "../../public/static/asset/social-media-icon/tiktok_black.svg";

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

function vendorLogoPathCreator(assetName: string): string {
  return `/static/asset/vendor-logo/${assetName}_logo.svg`;
}

const kofitiere_logo_url = vendorLogoPathCreator("kofitiere");
const honeylane_logo_url = vendorLogoPathCreator("honeylane");
const breman_logo_url = vendorLogoPathCreator("breman");
const dailycrumbs_logo_url = vendorLogoPathCreator("dailycrumbs");
const happysheep_logo_url = vendorLogoPathCreator("happysheep");
const vendorx_logo_url = vendorLogoPathCreator("vendorx");
const cocos_logo_url = vendorLogoPathCreator("cocos");
const provisions_logo_url = vendorLogoPathCreator("provisions");

const ABOUT_US_FOOTER_ITEMS = [
  "Tentang Kamalan",
  "Tanya Jawab",
  "Baca Catatan",
  "Kontak",
  "Jadi Rekan Kamalan",
];
const INFORMASI_FOOTER_ITEMS = ["Syarat & Ketentuan", "Pengiriman"];
const SOCIAL_MEDIA_FOOTER_ITEMS = [
  {
    title: "Instagram",
    asset: instagram_icon,
  },
  {
    title: "Facebook",
    asset: facebook_icon,
  },
  {
    title: "Twitter",
    asset: twitter_icon,
  },
  {
    title: "Tik Tok",
    asset: tiktok_icon,
  },
];

const REKAN_KAMALAN_LOGOS = [
  {
    rowKey: "row-1",
    className: "grid grid-cols-5",
    items: [
      {
        asset: kofitiere_logo_url,
        key: "kofitiere_logo",
        className: "col-start-2 col-span-3",
      },
    ],
  },
  {
    rowKey: "row-2",
    className: "grid grid-cols-5",
    items: [
      {
        asset: honeylane_logo_url,
        key: "honeylane_logo",
        className: "col-start-2 col-span-1",
      },
      {
        asset: breman_logo_url,
        key: "breman_logo",
        className: "col-start-3 col-span-1",
      },
      {
        asset: dailycrumbs_logo_url,
        key: "dailycrumbs_logo",
        className: "col-start-4 col-span-1",
      },
    ],
  },
  {
    rowKey: "row-3",
    className: "grid grid-cols-4",
    items: [
      {
        asset: cocos_logo_url,
        key: "cocos_logo",
        className: "",
      },
      {
        asset: happysheep_logo_url,
        key: "happysheep_logo",
        className: "",
      },
      {
        asset: provisions_logo_url,
        key: "provisions_logo",
        className: "",
      },
      {
        asset: vendorx_logo_url,
        key: "vendorx_logo",
        className: "",
      },
    ],
  },
];
const PRODUK_LOKAL_LOGOS = [
  {
    asset: dailycrumbs_logo_url,
    key: "dailycrumb_logo",
  },
  {
    asset: kofitiere_logo_url,
    key: "kofitiere_logo",
  },
  {
    asset: honeylane_logo_url,
    key: "honeylane_logo",
  },
  {
    asset: breman_logo_url,
    key: "breman_logo",
  },
  {
    asset: happysheep_logo_url,
    key: "happysheep_logo",
  },
  {
    asset: vendorx_logo_url,
    key: "vendorx_logo",
  },
];

type iCatatanKamalanEntries = {
  asset: string;
  item_key: string;
  title: string;
  desc: string;
};
const CATATAN_KAMALAN_ENTRIES: Array<iCatatanKamalanEntries> = [
  {
    asset: "/static/asset/catatan-kamalan/wedding_things.png",
    item_key: "wedding_things",
    title: "WEDDING",
    desc: "Hadiah Spesial untuk Acara Sakral",
  },
  {
    asset: "/static/asset/catatan-kamalan/birthday_pray.png",
    item_key: "birthday_pray",
    title: "BIRTHDAY",
    desc: "Kado Istimewa kepada dia yang Tercinta",
  },
  {
    asset: "/static/asset/catatan-kamalan/dearest_baby.png",
    item_key: "dearest_baby",
    title: "BABY SHOWER",
    desc: "Perlengkapan buat Si Kecil yang Kian Terampil",
  },
];

export default function Home() {
  return (
    <>
      <Box className="w-full grid gap-y-32">
        <Hero />
        <Body />
        <Footer />
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
      <RekanKamalan />
      <Rekomendasikan />
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

function Footer() {
  return (
    <Box className="relative h-[505px]">
      <Image src={footer_bg_url} alt="footer_bg" className="absolute z-0" />
      <Box className="absolute bottom-0 z-10 bg-kemiri/50 w-full h-3/5 px-40">
        <Box className="grid grid-cols-7 pt-10 gap-x-8">
          <Box className="col-start-2">
            <AboutUsSection />
          </Box>
          <Box className="col-start-3">
            <InformasiSection />
          </Box>
          <Box className="col-start-4">
            <SocialMediaSection />
          </Box>
          <Box className="col-start-5 col-span-2">
            <KawanKamalanSection />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function AboutUsSection() {
  return (
    <FooterSectionContainer title="Tentang Kami">
      <Box className="grid gap-y-2">
        {ABOUT_US_FOOTER_ITEMS.map((item, idx) => (
          <Typography key={`about-us-${idx}`}>{item}</Typography>
        ))}
      </Box>
    </FooterSectionContainer>
  );
}

function InformasiSection() {
  return (
    <FooterSectionContainer title="Informasi">
      <Box className="grid gap-y-2">
        {INFORMASI_FOOTER_ITEMS.map((item, idx) => (
          <Typography key={`about-us-${idx}`}>{item}</Typography>
        ))}
      </Box>
    </FooterSectionContainer>
  );
}

function SocialMediaSection() {
  return (
    <FooterSectionContainer title="Social Media">
      <Box className="grid gap-y-3">
        {SOCIAL_MEDIA_FOOTER_ITEMS.map((item, idx) => (
          <Box className="flex gap-x-3" key={`social-media-${idx}`}>
            <Image src={item.asset} alt="social_media_icon" />
            <Typography>{item.title}</Typography>
          </Box>
        ))}
      </Box>
    </FooterSectionContainer>
  );
}

function KawanKamalanSection() {
  return (
    <FooterSectionContainer title="#KawanKamalan">
      <Box>
        <Typography>
          Tulis alamat email kamu di sini dan nantikan rekomendasi serta kejutan
          menarik dari kami!
        </Typography>
        <Box className="border-pandan border bg-white px-8 py-2 w-full">
          <Typography>Tulis alamat email</Typography>
        </Box>
      </Box>
    </FooterSectionContainer>
  );
}

function FooterSectionContainer({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Box className="grid gap-y-8">
      <p className="text-pandan text-3xl">{title}</p>
      {children}
    </Box>
  );
}

function Rekomendasikan() {
  return (
    <Box className="grid gap-y-10">
      <SectionTitle title="Rekomendasikan" />
      <Box className="px-40 flex justify-center">
        <Box className="w-3/4 flex flex-col items-center gap-y-16">
          <p className="text-pandan text-xl">
            Kepada teman & keluargamu untuk membuat Registry dan jadikan acara
            mereka lebih spesial!
          </p>
          <Box className="flex gap-x-4">
            <Box className="border border-black py-2 px-12">
              <p>kamalan.id/buatregistry</p>
            </Box>
            <Box className="bg-pandan py-2 px-12">
              <p className="text-white">Salin Tautan</p>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function RekanKamalan() {
  return (
    <Box className="grid gap-y-10">
      <SectionTitle title="Rekan Kamalan" />
      <Box className="flex justify-center">
        <Box className="w-3/4">
          {REKAN_KAMALAN_LOGOS.map((row) => (
            <Box
              key={row.rowKey}
              className={`${row.className} justify-items-center items-center`}
            >
              {row.items.map((vendorLogo) => (
                <Box key={vendorLogo.key} className={vendorLogo.className}>
                  <Image
                    src={vendorLogo.asset}
                    alt={vendorLogo.key}
                    width={200}
                    height={150}
                  />
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function CatatanKamalan() {
  return (
    <Box className="grid gap-y-10">
      <SectionTitle title="Catatan Kamalan" />
      <Box className="px-40">
        <Box className="grid grid-cols-3 gap-x-5">
          {CATATAN_KAMALAN_ENTRIES.map((catatanEntry) => (
            <CatatanKamalanCard {...catatanEntry} key={catatanEntry.item_key} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function CatatanKamalanCard({ asset, desc, title }: iCatatanKamalanEntries) {
  return (
    <Box>
      <Box
        sx={{ backgroundImage: `url(${asset})` }}
        className="w-full min-h-[500px] flex items-end justify-center"
      >
        <Box className="bg-white px-4 py-2 max-w-[200px] translate-y-1/2">
          <Typography className="tracking-[0.2em]">{title}</Typography>
        </Box>
      </Box>
      <Box className="bg-pandan flex items-center justify-center py-8">
        <p className="text-white text-2xl">{desc}</p>
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
      <SmallBorderGiftBox position="l">
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
      <SmallBorderGiftBox position="l">
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
      <SmallBorderGiftBox position="r">
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

type BoxPosition = "l" | "r";
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
  return (
    <Box
      className={`w-2/5 h-[480px]  border-pandan relative flex items-center justify-center px-16  border-${position}-[6px]`}
    >
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
