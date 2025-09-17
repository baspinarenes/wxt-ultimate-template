import { createShadowRootUi } from "#imports";
import ReactDOM from "react-dom/client";
import { App } from "./app.tsx";

import "~/assets/tailwind.css";
import "~/styles/shared.scss";

export default defineContentScript({
  matches: ["*://*/*"],
  cssInjectionMode: "ui",

  async main(ctx) {
    const ui = await createShadowRootUi(ctx, {
      name: "counter-modal-ui",
      position: "modal",
      anchor: "body",
      append: "first",
      onMount: (container) => {
        const wrapper = document.createElement("div");
        container.append(wrapper);
        const root = ReactDOM.createRoot(wrapper);
        root.render(<App />);
        return { root, wrapper };
      },
      onRemove: (elements) => {
        elements?.root.unmount();
        elements?.wrapper.remove();
      },
    });

    onMessage({
      mountCounterModalUi: () => {
        if (!ui.mounted) ui.autoMount();
      },
      unmountCounterModalUi: () => {
        if (ui.mounted) ui.remove();
      },
    });
  },
});
