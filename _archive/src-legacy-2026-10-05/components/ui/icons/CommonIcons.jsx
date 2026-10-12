const strokeProps = {
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  fill: 'none',
};

export function CloudIcon(props) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path {...strokeProps} d="M7 18a4 4 0 0 1-.5-7.97A5 5 0 0 1 16.4 9.1 4.5 4.5 0 0 1 17.5 18H7z" />
    </svg>
  );
}

export function ChipIcon(props) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <rect x="7" y="7" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        {...strokeProps}
        d="M10 3v3M14 3v3M10 18v3M14 18v3M3 10h3M3 14h3M18 10h3M18 14h3"
      />
    </svg>
  );
}

export function MailIcon(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path {...strokeProps} d="M4 7l8 6 8-6" />
    </svg>
  );
}

export function PhoneIcon(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        {...strokeProps}
        d="M6 3h3l2 5-2.5 1.5a11 11 0 0 0 5 5L15 12l5 2v3a2 2 0 0 1-2 2c-8 0-14-6-14-14a2 2 0 0 1 2-2z"
      />
    </svg>
  );
}

export function PinIcon(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        {...strokeProps}
        d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6" fill="none" />
    </svg>
  );
}
