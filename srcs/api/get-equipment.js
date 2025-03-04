const URL = import.meta.env.VITE_AWS_API_URL;
const KEY = import.meta.env.VITE_AWS_API_KEY;

const getEquipmentClosure = () => {
  let cache = new Map();

  const request = {
    method: "GET",
    headers: { "x-api-key": KEY },
  };

  return async (companyId, options) => {
    if (options.once && cache.has(companyId)) {
      return [];
    }

    if (cache.has(companyId)) {
      return cache.get(companyId);
    }

    try 
    {
      const response = await fetch(`${URL}/dev/equipment?companyId=${companyId}&total=true`, request);
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Ocorreu um erro na busca dos equipamentos. Tente novamente.");
      }

      cache.set(companyId, data);
      return data.equipment;
    } 
    catch (error)
    {
      throw new Error("Ocorreu um erro na busca dos equipamentos. Tente novamente.");
    }
  };
};

export const getEquipment = getEquipmentClosure();
