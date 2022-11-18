export const toaster = (message: string, timeout: number = 5000) => {
  const newToaster = document.createElement("div");
  newToaster.setAttribute("class", "toaster");
  newToaster.innerText = message;
  document.querySelector("#toasts")?.appendChild(newToaster);

  setTimeout(() => {
    newToaster.remove();
  }, timeout);
};
