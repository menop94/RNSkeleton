import { api } from '.';

export const login = async ({
  userName,
  password,
}: {
  userName: string;
  password: string;
}): Promise<any> => {
  try {
    const res = await api.post(`/login`, { username: userName, password });

    return res.data;
  } catch (e) {
    console.log(e.message);
  }
};
