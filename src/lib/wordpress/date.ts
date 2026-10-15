const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/** WordPress returns site-local dates ("2026-06-04T16:52:36"); format without timezone shifts. */
const parts = (iso: string) => {
  const [y, m, d] = iso.slice(0, 10).split("-").map(Number);
  return { y, month: MONTHS[(m || 1) - 1], d };
};

/** "June 4, 2026" — blog listing cards. */
export const formatLongDate = (iso: string) => {
  const { y, month, d } = parts(iso);
  return `${month} ${d}, ${y}`;
};

/** "June 2026" — homepage + "What to read next" cards. */
export const formatMonthYear = (iso: string) => {
  const { y, month } = parts(iso);
  return `${month} ${y}`;
};

/** "June, 2026" — single post header. */
export const formatMonthCommaYear = (iso: string) => {
  const { y, month } = parts(iso);
  return `${month}, ${y}`;
};
