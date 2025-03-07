import { Router } from "./Router";

const rootElement = document.querySelector("#root");
const router = new Router(rootElement, "data-spa-anchor");

router.set("/", () => {
	console.log("Home");
});

router.set("/404", () => {
	console.log("Not Found");
});

router.set("/login", () => {
	console.log("Login");
});

router.set("/dashboard", () => {
	console.log("Dashboard");
});

router.route();
