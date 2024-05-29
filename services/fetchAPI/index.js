const baseURL = "https://665480181c6af63f467837f9.mockapi.io/madyanesAPI";

const getAPI = async (
  path,
  headers = { "Content-Type": "application/json" }
) => {
  const url = `${baseURL}${path}`;

  const data = await fetch(url, {
    method: "GET",
    headers: headers,
    cache: "no-store",
  })
    .then((res) => {
      if (res.redirected) {
        // bazı yerlerde window'u bulamıyor kontrol et
        //return window.location.href = res.url;
      } else {
        return res.json();
      }
    })
    .catch((err) => console.log(err));

  return data;
};

export { getAPI };
