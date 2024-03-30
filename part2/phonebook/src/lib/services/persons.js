// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
const baseUrl = 'http://localhost:3001/persons';

const getAll = async () => {
  const request = fetch(baseUrl);
  return request.then((response) => response.json());
};

const create = async (newObject) => {
  const request = fetch(baseUrl, {
    method: 'POST',
    body: JSON.stringify(newObject)
  });
  return request.then((response) => response.json());
};

const update = async (newObject) => {
  const request = fetch(`${baseUrl}/${newObject.id}`, {
    method: 'PUT',
    body: JSON.stringify(newObject)
  });
  return request.then((response) => response.json()).catch((error) => Promise.reject(error));
};

const remove = async (id) => {
  const request = fetch(`${baseUrl}/${id}`, {
    method: 'DELETE'
  });
  return request.then((response) => response.json());
};

export default { getAll, create, update, remove };
