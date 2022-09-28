const fetchPics = async () => {
  const apiOfTheDay = `https://api.nasa.gov/planetary/apod?api_key=F4ZEE5iOT3aoaJXcjjzAaGKcpPSWntfGrWuJfdvj`;
  const request = await fetch(apiOfTheDay);
  const data = await request.json();
  return data;
};

const randomComments = [
  "The space generate absolute tranquility",
  "The starry sky is beautiful🌟🌠",
  "🤩🌟🌑",
];
