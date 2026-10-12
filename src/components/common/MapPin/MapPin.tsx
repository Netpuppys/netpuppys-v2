/** Google-Maps-style location pin used on the contact cards. */
export const MapPin: React.FC<{ className?: string }> = ({ className = "h-[30px] w-[30px]" }) => (
  <svg viewBox="0 0 24 34" className={className} aria-hidden="true">
    <path d="M12 0C5.4 0 0 5.2 0 11.7 0 20.4 12 34 12 34s12-13.6 12-22.3C24 5.2 18.6 0 12 0Z" fill="#34a853" />
    <path d="M12 0C5.4 0 0 5.2 0 11.7c0 2.2.8 4.6 2 7L12 6.2V0Z" fill="#4285f4" />
    <path d="M12 0v6.2L22 18.7c1.2-2.4 2-4.8 2-7C24 5.2 18.6 0 12 0Z" fill="#ea4335" />
    <path d="M2 18.7C5.4 25.4 12 34 12 34V17.2L2 18.7Z" fill="#fbbc04" />
    <circle cx="12" cy="11.7" r="4.4" fill="#fff" />
  </svg>
);
