import { postPicture } from "../api/post-picture";

const _picturePreview = {
  elements: {
    container: document.querySelector("#picture-container"),
    preview: document.querySelector("#picture-preview"),
    input: document.querySelector("#picture-input"),
    remove: document.querySelector("#picture-remove"),
    button: document.querySelector("#picture-button"),
  },

  upload: {
    container: document.querySelector("#upload-circle"),
    done: document.querySelector("#upload-circle-done"),
    circle: document.querySelector("#upload-circle-progress"),
  },

  showProgress(progress) {
    const { container, circle, done } = this.upload;
    const current = 101 - (progress * 101 / 100);

    container.classList.add("opacity-100");
    circle.setAttribute("stroke-dashoffset", current);

    if (progress === 100) {
      done.classList.add("opacity-100");
    }
  },

  hideProgress() {
    const { container, circle, done } = this.upload;

    done.classList.remove("opacity-100");
    container.classList.remove("opacity-100");
    circle.setAttribute("stroke-dashoffset", 101);
  },

  disableButton() {
    const { button, input } = this.elements;
    const styles = ["dark:text-gray-600", "text-gray-300", "outline-none"];

    button.classList.add(...styles);
    input.disabled = true;
  },

  enableButton() {
    const { button, input } = this.elements;
    const styles = ["dark:text-gray-600", "text-gray-300", "outline-none"];

    button.classList.remove(...styles);
    input.disabled = false;
  },

  removePicture() {
    const { input, remove, preview, container } = this.elements;

    remove.addEventListener("click", (event) => {
      input.value = "";
      preview.src = "";
      this.enableButton();
      this.hideProgress();
      container.classList.add("hidden");
    });
  },

  insertPicture() {
    const { input, preview, container } = this.elements;

    input.addEventListener("change", (event) => {
      const reader = new FileReader();
      const pictureFile = event.target.files[0];

      if (!pictureFile) {
        return;
      }

      reader.onload = async (event) => {
        this.disableButton();
        preview.src = event.target.result;
        container.classList.remove("hidden");

        try
        {
          const filename = pictureFile.name;
          const base64image = event.target.result;
          await postPicture(filename, base64image, progress => this.showProgress(progress));
        }
        catch (error)
        {
          console.error(error);
        }
      };

      reader.readAsDataURL(pictureFile);
    });
  },
};

export const picturePreview = {
  listen() {
    _picturePreview.insertPicture();
    _picturePreview.removePicture();
  }
}