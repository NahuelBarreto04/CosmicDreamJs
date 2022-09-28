const fetchPics = async () => {
  const apiOfTheDay = `https://api.nasa.gov/planetary/apod?api_key=F4ZEE5iOT3aoaJXcjjzAaGKcpPSWntfGrWuJfdvj`;
  const request = await fetch(apiOfTheDay);
  const data = await request.json();
  return data;
};

const randomComments = [
  {
    user: "MatiSio",
    comments: ["El espacio me genera tranquilidad absoluta"],
  },
  {
    user: "SoFrutilla",
    comments: ["El cielo estrellado es hermoso"],
  },
];
