function getDuration(minutes: number): string {
  if (minutes === 0) {
    return "TBA";
  }
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h ${remainingMinutes}m`;
}

export default getDuration;
