const _picturePreview = {
  elements: {
    container: document.querySelector("#picture-container"),
    preview: document.querySelector("#picture-preview"),
    input: document.querySelector("#picture-input"),
    remove: document.querySelector("#picture-remove"),
    button: document.querySelector("#picture-button"),
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

      reader.onload = (e) => {
        this.disableButton();
        preview.src = e.target.result;
        container.classList.remove("hidden");
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