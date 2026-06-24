import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Donations | Gathered in Khayr",
};

// TODO: replace "#" with the real link to Masjid Ibn Abbas's donation page once it's available.
const MASJID_DONATION_LINK = "#";

export default function DonationsPage() {
  return (
    <div>
      <PageHeader
        kicker="Support the work"
        title="Donations"
        description="Gathered in Khayr is run as a community effort, and we also want to point that support toward the masjid behind it."
      />

      <section className="px-8 pb-24 text-center">
        <Reveal>
          <p className="font-serif italic text-sm text-antique-rose mb-2">
            Sadaqah goes a long way
          </p>
          <h2 className="font-serif text-3xl text-dried-thyme mb-6">
            Masjid Ibn Abbas
          </h2>
          <p className="max-w-lg mx-auto text-sm leading-7 text-foreground/70 mb-10">
            If you&apos;d like to give, your donation goes directly to Masjid
            Ibn Abbas — supporting the community, programs, and space that
            help make work like this possible.
          </p>
          <a
            href={MASJID_DONATION_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xs tracking-widest uppercase bg-dried-thyme text-champagne px-8 py-4 rounded-full hover:bg-antique-rose transition-colors duration-300"
          >
            Donate to Masjid Ibn Abbas
          </a>
        </Reveal>
      </section>
    </div>
  );
}
