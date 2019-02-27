// Generate unique id
export const generateId = () => (
  Math.random().toString().replace(/0\./, '')
)

// Truncate string
export const truncateString = (string, max) => {
  if (string.length >= max) {
    return `${string
      .substring(0, max)
      .trim()
      .replace(/([&])$/, '')
      .trim()}...`
  }
  return string
}
