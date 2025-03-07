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
    const path = "/";
    const viewPromise = this.#views.get(path);

    if (!viewPromise) {
      throw new Error("No index route defined.");
    }

    history.replaceState({}, "", path);

    viewPromise.then((view) => {
      this.#rootElement.innerHTML = view.content;
      view.callback();
    });
  }

  #renderNotFound() {
    const path = "/404"
    const viewPromise = this.#views.get(path);

    if (!viewPromise) {
      this.#renderIndex();
      return;
    }

    if (window.location.pathname != path) {
      history.pushState({}, "", path);
    }

    viewPromise.then((view) => {
      this.#rootElement.innerHTML = view.content;
      view.callback();
    });
  }

  #render(view) {
    this.#rootElement.innerHTML = view.content;
    view.callback();
  }

  #navigate(path) {
    const viewPromise = this.#views.get(path);

    if (!viewPromise) {
      this.#renderNotFound();
      return;
    }

    if (window.location.pathname != path) {
      history.pushState({}, "", path);
    }

    viewPromise.then((view) => {
      this.#render(view)
    });
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
      this.#navigate(window.location.pathname);
    });
  }

  #handleInitial() {
    window.addEventListener("DOMContentLoaded", (event) => {
      this.#navigate(window.location.pathname);
    });
  }

  set(path, callback) {
    const pathname = path.slice(1) || "home";
    const viewname = capitalize(pathname);
    const viewPromise = import(`../views/${viewname}.js`).then((module) => ({
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
