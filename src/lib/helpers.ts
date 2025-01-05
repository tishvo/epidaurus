export function formatPercent(percent: number | undefined) {
  if (!percent) return undefined;
  return (percent / 100).toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 0,
  });
}

export function removeCasing(words: string | string[]): string | string[] {
  if (typeof words === "string") {
    return words.toLowerCase();
  }
  return words.map((word) => word.toLowerCase());
}

export function calculateAge(birthday: string) {
  const ageDifMs = Date.now() - new Date(birthday).getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
