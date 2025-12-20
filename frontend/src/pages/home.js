export function initHome() {
    const status = document.getElementById("status");
    const button = document.getElementById("btn");
  
    status.textContent = "Estrutura organizada e funcionando ✅";
  
    button.addEventListener("click", () => {
      alert("JS modular funcionando 🚀");
    });
  }
  