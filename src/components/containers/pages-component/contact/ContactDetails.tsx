import Link from "next/link";
import { MapPin } from "@/components/common/MapPin";
import { SlashDivider } from "@/components/common/SlashDivider";
import { contactPage } from "@/lib/data/pages/contact";

/** Phone / email card and the address pill under the Contact hero copy. */
export const ContactDetails: React.FC = () => (
  <>
    <div className="mt-[30px] flex flex-col gap-6 rounded-[30px] bg-white px-5 py-10 sm:px-[30px] lg:mt-5 sm:flex-row sm:items-start sm:gap-0 lg:w-[640px]">
      {[contactPage.phone, contactPage.email].map((c, i) => (
        <div key={c.label} className={["flex items-start", i === 0 ? "sm:w-[290px]" : ""].join(" ")}>
          <div className="flex-1">
            <p className="text-base font-light leading-6 text-body">{c.label}</p>
            <a href={c.href} className="mt-1.5 block font-display text-base font-normal leading-7 text-ink hover:text-orange">
              {c.value}
            </a>
          </div>
          {i === 0 && <SlashDivider className="mr-[38px] hidden h-10 w-10 sm:block" />}
        </div>
      ))}
    </div>
    <div className="mt-[19px] flex flex-col gap-6 sm:mt-[30px] sm:flex-row sm:items-center sm:gap-[130px]">
      <div className="flex items-center gap-5 rounded-[34px] bg-white py-[27px] pl-5 pr-6 sm:w-[352px] sm:py-0 sm:pl-0">
        <span className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-peach">
          <MapPin />
        </span>
        <span className="text-[15px] font-normal leading-5 text-ink">{contactPage.address}</span>
      </div>
      <Link href={contactPage.mapHref} target="_blank" className="group inline-flex self-start border-b-2 border-orange pb-0.5 font-syne text-xs font-bold uppercase text-ink sm:self-auto">
        <span className="hover-fill">view on map</span>
      </Link>
    </div>
  </>
);
