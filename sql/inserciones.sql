use abarrotes;
-- Inserciones en Rol

insert into rol values (0, 'Administrador', 'Jefe o Gerente');
insert into rol values (0, 'Empleado', 'Trabajador');
insert into rol values (0, 'Usuario', 'Usuario de la página');

-- Inserciones en Empleado

exec sp_CRUDUsuarios @opcion=1, @rol=3, @nombres='Pepe',
@apPaterno='Matuz', @apMaterno='Aguilera', @telefono='0000000000',
@ciudad='Obregón', @colonia='', @calle='', @codigoPostal='',
@usuario='pepito', @contrasena='1234'

exec sp_CRUDUsuarios @opcion=1, @rol=2, @nombres='Jorge Arturo',
@apPaterno='Bernal', @apMaterno='Espinoza', @telefono='6442388527',
@ciudad='Obregón', @colonia='Aves del Castillo', @calle='Cisne',
@codigoPostal='85198', @usuario='draxk', @contrasena='1234'

exec sp_CRUDUsuarios @opcion=1, @rol=2, @nombres='Jorge Luis',
@apPaterno='Duarte', @apMaterno='Miranda', @telefono='0000000000',
@ciudad='Obregón', @colonia='Aves del Castillo', @calle='Vicente Padilla',
@codigoPostal='85198', @usuario='kasuto', @contrasena='1234'

exec sp_CRUDUsuarios @opcion=1, @rol=1, @nombres='Miguel Alejandro',
@apPaterno='Lopez', @apMaterno='Humo', @telefono='0000000000',
@ciudad='Obregón', @colonia='', @calle='', @codigoPostal='',
@usuario='MALH', @contrasena='1234'

exec sp_CRUDUsuarios @opcion=1, @rol=1, @nombres='Júlia',
@apPaterno='Cruz', @apMaterno='Hernandez', @telefono='0000000000',
@ciudad='Obregón', @colonia='', @calle='', @codigoPostal='',
@usuario='JUCH', @contrasena='1234'

exec sp_CRUDUsuarios @opcion=1, @rol=1, @nombres='Eric Armando',
@apPaterno='Herrera', @apMaterno='Alfonso', @telefono='0000000000',
@ciudad='Obregón', @colonia='', @calle='', @codigoPostal='',
@usuario='EAHA', @contrasena='1234'

-- Inserciones en Categoria

exec sp_CRUDCategoria @opcion = 1, @categoria='Abarrotes'
exec sp_CRUDCategoria @opcion = 1, @categoria='Lácteos'
exec sp_CRUDCategoria @opcion = 1, @categoria='Enlatados'
exec sp_CRUDCategoria @opcion = 1, @categoria='Botanas'
exec sp_CRUDCategoria @opcion = 1, @categoria='Bebidas'
exec sp_CRUDCategoria @opcion = 1, @categoria='Dulceria'
exec sp_CRUDCategoria @opcion = 1, @categoria='Harinas'
exec sp_CRUDCategoria @opcion = 1, @categoria='Frutas y Verduras'
exec sp_CRUDCategoria @opcion = 1, @categoria='Higiene persobal'
exec sp_CRUDCategoria @opcion = 1, @categoria='Uso doméstico'

-- Inserciones en Proveedores

exec sp_CRUDProveedores @opcion=1, @compania='Coca-Cola', @contacto='Chuy',
        @direccion='C. Michoacan 939, Sochiloa', @ciudad='Ciudad Obregón',
        @CP="85150", @telefono="6444108100"

exec sp_CRUDProveedores @opcion=1, @compania='Sabritas S.A. de C.V.', @contacto='Paco',
        @direccion='Blvd. Las Torres 835, Parque Industrial', @ciudad='Ciudad Obregón',
        @CP='85060', @telefono='6444100468'

/* Calz. Francisco Villanueva, Parque Industrial, 85065 Cd Obregón, Son. */

exec sp_CRUDProveedores @opcion=1, @compania='Pepsico', @contacto='Marcos',
        @direccion='Calz. Francisco Villanueva, Parque Industrial', @ciudad='Ciudad Obregón',
        @CP='85065', @telefono='0000000000'

-- Base
/* exec sp_insertarProveedores @compania='', @contacto='',
        @direccion='', @ciudad='',
        @CP='', @telefono='' */

-- Inserciones en Productos

exec sp_CRUDProductos @opcion=1, @codigo='1', @producto='Coca-Cola',
        @descripcion='500 ml', @stock=24, @precio=120,
        @precioUnitario=13, @categoria=5, @proveedor=1

exec sp_CRUDProductos @opcion=1, @codigo='2', @producto='Cheetos Torciditos',
        @descripcion='55 g', @stock=24, @precio=10,
        @precioUnitario=13, @categoria=4, @proveedor=2
        
exec sp_CRUDProductos @opcion=1, @codigo='3', @producto='Sabritas Original',
        @descripcion='105 g', @stock=24, @precio=10,
        @precioUnitario=15, @categoria=4, @proveedor=2