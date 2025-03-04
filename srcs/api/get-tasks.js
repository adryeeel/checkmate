const URL = import.meta.env.VITE_AWS_API_URL;
const KEY = import.meta.env.VITE_AWS_API_KEY;

const getTasksClosure = () => {
  let cache = new Map();

  const request = {
    method: "GET",
    headers: { "x-api-key": KEY },
  };

  return async (equipmentId, options) => {
    if (options.once && cache.has(equipmentId)) {
      return [];
    }

    if (cache.has(equipmentId)) {
      return cache.get(equipmentId);
    }

    try 
    {
      const response = await fetch(`${URL}/dev/task?equipmentId=${equipmentId}`, request);
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Ocorreu um erro na busca das tarefas. Tente novamente.");
      }

      cache.set(equipmentId, data);
      return data.tasks;
    } 
    catch (error)
    {
      throw new Error("Ocorreu um erro na busca das tarefas. Tente novamente.");
    }
  };
};

export const getTasks = getTasksClosure();
