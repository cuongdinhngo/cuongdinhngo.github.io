export function getAssetPath(path: string): string {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  
  const runtimeConfig = useRuntimeConfig()
  const baseURL = runtimeConfig.app.baseURL || '/'
  
  return `${baseURL}${cleanPath}`
}

export function getImagePath(imageName: string): string {
  const runtimeConfig = useRuntimeConfig()
  const baseURL = runtimeConfig.app.baseURL || '/'
  
  return `${baseURL}images/${imageName}`
}

export function parseToBulletPoints(text: string): string {
  if (!text) return '';

  const sentences = text.split('.').filter(sentence => sentence.trim().length > 0);
  if (sentences.length <= 1) {
    return `<p>${text}</p>`;
  }

  const bulletItems = sentences.map(sentence => `<li>${sentence.trim()}</li>`).join('');

  return `<ul>${bulletItems}</ul>`;
}