// Years of experience since the given start date.
// The anniversary month triggers the +1 each year.
export function calcYears({ year, month }) {
  const now = new Date()
  let years = now.getFullYear() - year
  if (now.getMonth() + 1 < month) years -= 1
  return years
}

// Replaces the {years} placeholder in a string with the computed value.
export function fillYears(text, years) {
  return text.replace(/{years}/g, years)
}
