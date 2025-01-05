import clsx from "clsx";

export function formatPercent(percent: number | undefined) {
  if (!percent) return undefined;
  return (percent / 100).toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 0,
  });
}

export function getProgressBarStyles(
  percent: number | undefined
): string | undefined {
  if (!percent) return undefined;

  const style = clsx({
    "w-2/12 bg-red-200": percent <= 20,
    "w-4/12 bg-red-200": percent > 20 && percent <= 40,
    "w-6/12 bg-red-200": percent > 40 && percent <= 60,
    "w-9/12 bg-orange-200": percent > 60 && percent <= 80,
    "w-10/12 bg-orange-200": percent > 80 && percent < 90,
    "w-full bg-green-200": percent >= 90 && percent <= 100,
  });
  return style;
}

export function calculateAge(birthday: string)  {
  const ageDifMs = Date.now() - new Date(birthday).getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};