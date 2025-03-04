const URL = import.meta.env.VITE_AWS_API_URL;
const KEY = import.meta.env.VITE_AWS_API_KEY;

export const postPicture = async (filename, filecontent, progressCallback) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    let body = JSON.stringify({ filename, filecontent });

    xhr.open("POST", `${URL}/dev/upload`, true);
    xhr.setRequestHeader("x-api-key", KEY);

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable && progressCallback) {
        const progress = Math.round((event.loaded / event.total) * 100);
        progressCallback(progress);
      }
    };

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject(
          new Error("Ocorreu um erro ao enviar a fotografia. Tente novamente.")
        );
      }
    };

    xhr.onerror = () =>
      reject(new Error("Erro de conexão. Verifique sua internet."));

    xhr.send(body);
  });
};
