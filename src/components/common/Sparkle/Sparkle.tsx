/** Black four-point sparkle used on the contact / careers / free-audit cards. */
export const Sparkle: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 70 70" className={className} aria-hidden="true">
    <path d="M35 0c2.6 18.6 16.4 32.4 35 35-18.6 2.6-32.4 16.4-35 35C32.4 51.4 18.6 37.6 0 35 18.6 32.4 32.4 18.6 35 0Z" />
    <path d="M58 4c.8 5.6 4.4 9.2 10 10-5.6.8-9.2 4.4-10 10-.8-5.6-4.4-9.2-10-10 5.6-.8 9.2-4.4 10-10Z" />
  </svg>
);
