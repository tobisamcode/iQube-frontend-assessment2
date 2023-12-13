const BASER_URL = "https://covid-api.com/api/";

export const getRegionData = async () => {
  try {
    const dataResponse = await (await fetch(`${BASER_URL}regions`)).json();
    return dataResponse;
  } catch (error) {
    if (error) {
      return {
        error: error.message,
      };
    }
  }
};

export const getCovidData = async (isoCode) => {
  try {
    const dataResponse = await (
      await fetch(`${BASER_URL}reports/total?iso=${isoCode}`)
    ).json();
    return dataResponse;
  } catch (error) {
    if (error) {
      return {
        error: error.message,
      };
    }
  }
};
