import { createApp } from "vue";
import App from "./App.vue";
import router from './router'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "./assets/tailwind.css";

library.add(fab, fas);
createApp(App).use(router)
  .component("fawsome-icon", FontAwesomeIcon)
  .mount(".overflow-div");
