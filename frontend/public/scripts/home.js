export function initHome() {
  const status = document.getElementById("status");
  const button = document.getElementById("btn");

  status.textContent = "JS carregado corretamente ✅";

  button.addEventListener("click", () => {
    alert("Botão funcionando 🚀");
  });
}
