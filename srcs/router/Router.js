const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

export class Router {
  #views;
  #rootElement;
  #anchorAttribute;

  constructor(rootElement, anchorAttribute) {
    this.#views = new Map();
    this.#rootElement = rootElement;
    this.#anchorAttribute = anchorAttribute;
  }

  #renderIndex() {
    const viewPromise = this.#views.get("/");

    if (!viewPromise) {
      throw new Error("No index route defined.");
    }

    history.replaceState({}, "", "/");

    viewPromise.then((view) => {
      this.#rootElement.innerHTML = view.content;
      view.callback();
    });
  }

  #renderNotFound() {
    const viewPromise = this.#views.get("/404");

    if (!viewPromise) {
      this.#renderIndex();
      return;
    }

    history.replaceState({}, "", "/404");

    viewPromise.then((view) => {
      this.#rootElement.innerHTML = view.content;
      view.callback();
    });
  }

  #render(path) {
    const viewPromise = this.#views.get(path);

    if (!viewPromise) {
      this.#renderNotFound();
      return;
    }

    viewPromise.then((view) => {
      this.#rootElement.innerHTML = view.content;
      view.callback();
    });
  }

  #navigate(path) {
    if (window.location.pathname === path) {
      return;
    }

    history.pushState({}, "", path);
    this.#render(path);
  }

  #handleAnchor() {
    const selector = `a[${this.#anchorAttribute}]`;
    const anchors = document.querySelectorAll(selector);

    anchors.forEach((anchor) =>
      anchor.addEventListener("click", (event) => {
        event.preventDefault();
        this.#navigate(anchor.pathname);
      })
    );
  }

  #handleHistory() {
    window.addEventListener("popstate", (event) => {
      this.#render(window.location.pathname);
    });
  }

  #handleInitial() {
    window.addEventListener("DOMContentLoaded", (event) => {
      this.#render(window.location.pathname);
    });
  }

  set(path, callback) {
    const pathname = path.slice(1) || "home";
    const viewname = capitalize(pathname);
    const viewPromise = import(`../views/${viewname}`).then((module) => ({
      callback,
      content: module.default(),
    }));

    this.#views.set(path, viewPromise);
  }

  route() {
    this.#handleInitial();
    this.#handleHistory();
    this.#handleAnchor();
  }
}
