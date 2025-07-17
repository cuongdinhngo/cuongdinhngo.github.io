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