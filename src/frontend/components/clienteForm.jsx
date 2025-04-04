import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

export default function ClienteForm({ onCreate }) {
  const [cliente, setCliente] = useState({ nombre: "", email: "", telefono: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(cliente);
    setCliente({ nombre: "", email: "", telefono: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <Input type="text" placeholder="Nombre" value={cliente.nombre} onChange={(e) => setCliente({ ...cliente, nombre: e.target.value })} required />
      <Input type="email" placeholder="Email" value={cliente.email} onChange={(e) => setCliente({ ...cliente, email: e.target.value })} required />
      <Input type="text" placeholder="Teléfono" value={cliente.telefono} onChange={(e) => setCliente({ ...cliente, telefono: e.target.value })} />
      <Button type="submit" color="blue">Crear</Button>
    </form>
  );
}