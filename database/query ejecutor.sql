CREATE TABLE clientes ( id SERIAL PRIMARY KEY,
                                          nombre VARCHAR(80) NOT NULL,
                                                             email VARCHAR(60) NOT NULL UNIQUE,
                                                                                        telefono VARCHAR(10) NOT NULL,
                                                                                                             direccion VARCHAR(80) NOT NULL,
                                                                                                                                   cuit CHAR(11));


SELECT *
FROM clientes;


INSERT INTO clientes (nombre, email, telefono, direccion, cuit)
VALUES ('Julian Jauregui',
        'julijauregui.2011@gmail.com',
        '1126801899',
        'Remedios de escalada de San Martin 151',
        '20426459702')