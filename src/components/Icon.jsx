function Icon({ name, className = '' }) {
  const icons = {
    menu: <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />,
    bell: (
      <>
        <path d="M8 17h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M7 17h10l-1.1-1.8V11a4 4 0 1 0-8 0v4.2L7 17Z" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinejoin="round" />
      </>
    ),
    mail: <path d="M4 7.5h16v9H4z M4.5 8l7.5 5 7.5-5" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinejoin="round" strokeLinecap="round" />,
    lock: (
      <>
        <rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <path d="M8 10V8a4 4 0 1 1 8 0v2" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      </>
    ),
    eye: (
      <>
        <path d="M2.5 12s3.6-5 9.5-5 9.5 5 9.5 5-3.6 5-9.5 5-9.5-5-9.5-5Z" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="2.3" fill="currentColor" />
      </>
    ),
    eyeOff: (
      <>
        <path d="M2.5 12s3.6-5 9.5-5c2.1 0 4 .6 5.6 1.5M21.5 12s-3.6 5-9.5 5c-2.1 0-4-.6-5.6-1.5" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="m4 20 16-16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </>
    ),
    qr: <path d="M4 4h5v5H4zM15 4h5v5h-5zM4 15h5v5H4zM14 14h2v2h-2zM18 14h2v2h-2zM14 18h2v2h-2zM17 17h3v3h-3" stroke="currentColor" strokeWidth="1.6" fill="none" />,
    map: <path d="M4 6.5 9 5l6 1.5L20 5v12l-5 1.5L9 17l-5 1.5v-12Z M9 5v12 M15 6.5v12" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinejoin="round" />,
    calendar: <path d="M6 5v3M18 5v3M4 9h16M5.5 7h13a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 18.5 19h-13A1.5 1.5 0 0 1 4 17.5v-9A1.5 1.5 0 0 1 5.5 7Z" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" />,
    history: <path d="M5 12a7 7 0 1 0 2-4.9M5 4v4h4M12 8v4l2.8 1.8" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />,
    user: <path d="M5 19a7 7 0 0 1 14 0M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" />,
    close: <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />,
    flash: <path d="M13 3 7 13h4l-1 8 7-11h-4l1-7Z" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinejoin="round" strokeLinecap="round" />,
    chevron: <path d="m8 10 4 4 4-4" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />,
  }

  return (
    <svg viewBox="0 0 24 24" className={`svg-icon ${className}`} aria-hidden="true">
      {icons[name]}
    </svg>
  )
}

export default Icon
