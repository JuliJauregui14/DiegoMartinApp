create table clientes(id serial, cuit int4, razon_social varchar(100), direccion varchar(100), email varchar(50), telefono int4, celular int4, constraint clientes_pk primary key(id));

-- Los tipos de concepto con importe fijo serían los honorarios y otro si lo quisiera a futuro

create table conceptos_tipos(-- (categorias) 1 impuestos, 2 honorarios
 id serial, descripcion varchar(50), importe_fijo boolean, constraint conceptos_tipos_pk primary key(id));

-- El sistema debería exigir el ingreso de precio en el alta o modificación de un tipo de concepto con precio fijo
-- También puede aumentar cierto porcentaje a todos los conceptos de todos o determinado tipo con importe fijo

create table conceptos(1 ingresos_brutos, 2 arca, id serial, id_tipo int4, descripcion varchar(50), importe double precision, constraint conceptos_pk primary key(id), constraint conceptos_conceptos_tipos_fk foreing key(id_tipo) references conceptos_tipos(id));

-- Cabecera de remitos con atajos para saber si estan saldados o cuanto falta saldar

create table remitos(id serial, id_cliente int4, fecha timestamp, importe double precision, -- 2000
 importe_saldado double precision, -- 1055.3
 esta_saldado boolean, -- false
 constraint remitos_pk primary key(id), constraint remitos_clientes_fk
																					foreign key(id_cliente) references clientes(id));


create table remitos_historicos(id serial, id_cliente int4, fecha_creacion timestamp, importe double precision, importe_saldado double precision, esta_saldado boolean, fecha_delete timestamp, constraint remitos_historicos_pk primary key(id));

-- Detalle de remitos con detalle de saldo de items

create table remitos_items(id serial, id_remito int4, id_concepto int4, importe double precision, --1000			1000
 importe_saldado double precision, --55.3			1000
 esta_saldado boolean --false		true
 constraint remitos_items_pk primary key(id), constraint remitos_items_remitos_fk
																											foreign key(id_remito) references remitos(id), constraint remitos_conceptos_fk
																											foreign key(id_concepto) references conceptos(id));

-- Cabecera de pagos

create table pagos(id serial, id_remito int4, fecha timestamp, importe double precision, constraint pagos_pk primary key(id), constraint pagos_remitos_fk
																			foreign key(id_remito) references remitos(id)); --Modo de pago (medio de pago)

-- Detalle de pagos referenciando a los items del remito que se están pagando

create table pagos_items(id serial, id_pago int4, id_item_remito int4, importe double precision, constraint pagos_items_pk primary key(id), constraint pagos_pagos_items_fk
																									foreign key(id_pago) references pagos(id), constraint pagos_remitos_items_fk
																									foreign key(id_item_remito) references remitos_items(id));