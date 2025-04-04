import Button from "./Button";

export default function ClienteItem({ cliente, onDelete }) {
  return (
    <div className="flex justify-between items-center p-2 border-b">
      <span>{cliente.nombre} - {cliente.email} - {cliente.telefono}</span>
      <Button color="red" onClick={() => onDelete(cliente.id)}>Eliminar</Button>
    </div>
  );
}
