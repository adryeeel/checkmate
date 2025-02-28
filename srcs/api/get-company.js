const URL = import.meta.env.VITE_AWS_API_URL;
const KEY = import.meta.env.VITE_AWS_API_KEY;

const getCompanyClosure = () => {
  let cache = [];
  let fetched = false;

  const request = {
    method: "GET",
    headers: { "x-api-key": KEY },
  };

  return async (options) => {
    if (options.once && fetched) {
      return [];
    }

    if (fetched) {
      return cache;
    }

    try
    {
      const response = await fetch(`${URL}/dev/company`, request);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(`Failed to fetch company data: ${data.message}`);
      }

      fetched = true;
      cache = data.companies;

      return data.companies;

    }
    catch (error) {
      console.error(error);
    }
  };
};

export const getCompany = getCompanyClosure();
