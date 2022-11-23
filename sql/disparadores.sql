-- Disparador de inicios de sesión 

create trigger trNuevosUsuarios on usuario
for insert as
declare @idUsuario int
    select @idUsuario = idUsuario from inserted;
    insert into nuevosUsuarios values (@idUsuario,
    getdate(), 'registro insertado', system_user)
go

-- Disparador para ventas

-- create trigger tr_venta on detalleVenta
-- for insert
-- as
-- declare @id


-- trigger actualización de stock

/* create trigger tr_actualizarStock on detalleVenta
for insert for each row
declare
begin
    update productos
    set stock = stock - :new.cantidad
    where idProducto = :new.idProducto
end */