export const getCurrentTab = async () => {
  try {
    const tabs = await browser.tabs.query({
      active: true,
      currentWindow: true,
    });

    return tabs[0]! as Required<globalThis.Browser.tabs.Tab>;
  } catch (error) {
    console.error(error);
    return {} as Required<globalThis.Browser.tabs.Tab>;
  }
};
