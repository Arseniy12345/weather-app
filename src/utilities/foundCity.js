export const foundCity = (listCities, str) => {
  let arr = [];
  for (let city in listCities) {
    if (city.toLowerCase().startsWith(str.toLowerCase()) && str !== "") {
      arr.push(city);
    }
  }
  return arr;
};
