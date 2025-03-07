import { Router } from "./router/Router";

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

router.set("/maintenance", () => {
	console.log("Maintenance");
});

router.route();
