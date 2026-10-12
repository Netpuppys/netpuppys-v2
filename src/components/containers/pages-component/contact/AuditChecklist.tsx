import { FaIcon } from "@/components/common/FaIcon";
import { freeAudit } from "@/lib/data/pages/contact";

/** The four "review your…" points under the Free Audit hero copy. */
export const AuditChecklist: React.FC = () => (
  <ul className="mt-[61px] flex flex-col gap-[30px] lg:w-[544px]">
    {freeAudit.checklist.map((item) => (
      <li key={item} className="flex gap-[15px]">
        <FaIcon name="checkCircle" className="mt-0.5 shrink-0 text-2xl text-orange" />
        <span className="max-w-[502px] text-base font-light leading-6 text-body">{item}</span>
      </li>
    ))}
  </ul>
);
