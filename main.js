const inputs = document.querySelectorAll(".controls input");
function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  // name = --(base - spacing - blur)
  // value = value of the property
  // suffix = (px - (color = ""))
  // ex -> --blur 10 px
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}
inputs.forEach((input) => {
  input.addEventListener("change", handleUpdate);
  input.addEventListener("mousemove", handleUpdate);
});
