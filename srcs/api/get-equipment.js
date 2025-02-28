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
      const response = await fetch(`${URL}/dev/equipment?companyId=${companyId}`, request);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(`Failed to fetch equipment data: ${data.message}`);
      }

      cache.set(companyId, data);

      return data.equipments;
    } 
    catch (error)
    {
      console.error(error);
      throw error;
    }
  };
};

export const getEquipment = getEquipmentClosure();
