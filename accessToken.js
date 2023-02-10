let accessToken = null;

export const setAccessToken = (s) => {
  accessToken = s;
};

export const getAccessToken = async () => {
  if (!accessToken) {
    const res = await fetch("http://localhost:2000/auth/token", {
      credentials: "include",
    });
    const data = await res.json();
    setAccessToken(data.accessToken);
  }

  return accessToken;
};
