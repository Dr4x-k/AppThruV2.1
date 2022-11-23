use abarrotes;

drop procedure insert_usuario;

delimiter //
create procedure insert_usuario (
    in nombres varchar(50),
    in apellidoPaterno varchar(25),
    in apellidoMaterno varchar(25),
    in telefono varchar(10),
    in usuario varchar(10),
    in contrasena text,
    in fk_rol int
)
begin
    insert into usuario values (nombres, apellidoPaterno, apellidoMaterno, telefono, usuario, contrasena, fk_rol);
end //
delimiter;

delimiter //
create procedure insert_producto (
    in nombreProucto varchar(50),
    in stock int,
    in precio decimal,
    in precioUnitario decimal,
    in fk_idCategoria int,
    in fk_idProveedor int
)
begin
    insert into productos values (nombreProducto, stock, precio, precioUnitario, fk_idCategoria, fk_idProveedor);
end //
delimiter;

delimiter //
create procedure insert_proveedor (
    in nombreCompania varchar(60),
    in nombreContacto varchar(60),
    in direccion text,
    in ciudad varchar(20),
    in codigoPostal varchar(6),
    in telefono varchar(10)
)
begin
    insert into proveedor values (nombreCompania, nombreContacto, direccion, ciudad, codigoPostal, telefono);
end //
delimiter;