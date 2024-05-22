export const fetchData = async () => {
  try {
    const response = await fetch(
      'https://api.jsonbin.io/v3/b/664b48b1acd3cb34a84ad37c?meta=false',
    );
    const data = await response.json();
    return data.news;
  } catch (error) {
    throw new Error('Error during fetching data');
  }
};
