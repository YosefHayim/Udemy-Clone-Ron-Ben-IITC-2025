export const getRandomLearnersAmount = (): string => {
  const randomNumber = Math.floor(Math.random() * 20) + 1;
  return `${randomNumber}M+ learners`;
};
