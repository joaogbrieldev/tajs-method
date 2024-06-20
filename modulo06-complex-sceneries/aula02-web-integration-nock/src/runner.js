import axios from "axios";

async function feathAPIByPage(page, counter = 1) {
  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/character/?page=${1}`
  );
  const result = data?.results?.slice(0, counter).map((item) => {
    return {
      id: item.id,
      name: item.name,
    };
  });
  return result;
}
export { feathAPIByPage };
