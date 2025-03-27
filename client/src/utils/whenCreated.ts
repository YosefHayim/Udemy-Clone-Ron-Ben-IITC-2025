export const calculateTimeDifference = (date: Date) => {
  const now = new Date().getTime(); // Convert to timestamp
  const commentDate = new Date(date).getTime(); // Convert to timestamp
  const differenceInSeconds = Math.floor((now - commentDate) / 1000);

  const years = Math.floor(differenceInSeconds / (60 * 60 * 24 * 365));
  if (years > 0) return `${years} year${years > 1 ? 's' : ''} ago`;

  const months = Math.floor(differenceInSeconds / (60 * 60 * 24 * 30));
  if (months > 0) return `${months} month${months > 1 ? 's' : ''} ago`;

  const weeks = Math.floor(differenceInSeconds / (60 * 60 * 24 * 7));
  if (weeks > 0) return `${weeks} week${weeks > 1 ? 's' : ''} ago`;

  const days = Math.floor(differenceInSeconds / (60 * 60 * 24));
  if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;

  const hours = Math.floor(differenceInSeconds / (60 * 60));
  if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;

  const minutes = Math.floor(differenceInSeconds / 60);
  if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;

  return 'Just now';
};
