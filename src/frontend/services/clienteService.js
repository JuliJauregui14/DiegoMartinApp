const API_URL = "http://localhost:5432/clientes";

export async function getClientes() {
  const response = await fetch(API_URL);
  return response.json();
}

export async function createCliente(cliente) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cliente),
  });
  return response.json();
}

export async function deleteCliente(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
}