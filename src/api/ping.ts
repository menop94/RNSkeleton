import { api } from '.';

export const ping = async () => {
  try {
    const res = await api.get(`/ping`);

    return res.data;
  } catch (e) {
    console.log(e.message);
  }
};
