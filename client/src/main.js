import { createApp } from "vue";

import { router } from "./routes/router";
import { store } from "./store";

import App from "./App.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import BaseCard from "./components/UI/BaseCard.vue";
import BaseDialog from "./components/UI/BaseDialog.vue";

const app = createApp(App);
app.use(store);
app.use(router);

app.component("base-button", BaseButton);
app.component("base-card", BaseCard);
app.component("base-dialog", BaseDialog);

app.mount("#app");
