export type Theme = 'dark' | 'light'

/** Read the theme currently applied to <html> (set pre-paint in index.html). */
export function getStoredTheme(): Theme {
  if (typeof document === 'undefined') return 'dark'
  return document.documentElement.classList.contains('light') ? 'light' : 'dark'
}

/** Apply a theme to <html> and persist it. */
export function setTheme(theme: Theme): void {
  const el = document.documentElement
  el.classList.toggle('light', theme === 'light')
  el.classList.toggle('dark', theme === 'dark')
  try {
    localStorage.setItem('theme', theme)
  } catch {
    /* ignore storage failures */
  }
}
