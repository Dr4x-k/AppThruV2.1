use abarrotes;
-- Procedimiento almacenado CRUD empleados

create procedure sp_CRUDUsuarios (
    @idUsuario int = null,
    @rol int = null,
    @nombres varchar(50) = null,
    @apPaterno varchar(25) = null,
    @apMaterno varchar(25) = null,
    @telefono varchar(10) = null,
    @ciudad varchar(60) = null,
    @colonia varchar(60) = null,
    @calle varchar(60) = null,
    @codigoPostal varchar(6) = null,
    @usuario varchar(10) = null,
    @contrasena text = null,
    @opcion int
)
as
if @opcion = 1
    begin
        insert into usuario values (@rol, @nombres, @apPaterno, @apMaterno,
            @telefono, @ciudad, @colonia, @calle, @codigoPostal, @usuario,
            @contrasena)
    end
if @opcion = 2
    begin
        select * from usuario where idUsuario = @idUsuario
            or usuario = @usuario
    end
if @opcion = 3
    begin
        update usuario set fk_rol = @rol, nombres = @nombres,
            apellidoPaterno = @apPaterno, apellidoMaterno = @apMaterno,
            telefono = @telefono, ciudad = @ciudad, colonia = @colonia,
            calle = @calle, codigoPostal = @codigoPostal,
            usuario = @usuario, contrasena = @contrasena
    end
if @opcion = 4
    begin
        delete usuario where idUsuario = @idUsuario or usuario = @usuario
    end
go

-- Procedimiento almacenado CRUD proveedores

create procedure sp_CRUDProveedores (
    @idProveedor int = null,
    @compania varchar(60) = null,
    @contacto varchar(60) = null,
    @direccion text = null,
    @ciudad varchar(20) = null,
    @CP varchar(6) = null,
    @telefono varchar(10) = null,
    @opcion int
) as
if @opcion = 1
    begin
        insert into proveedor values (@compania, @contacto,
            @direccion, @ciudad, @CP, @telefono)
    end
if @opcion = 2
    begin
        select * from proveedor where idProveedor = @idProveedor
    end
if @opcion = 3
    begin
        update proveedor set nombreCompania = @compania,
            nombreContacto = @contacto, direccion = @direccion,
            ciudad = @ciudad, codigoPostal = @CP, telefono = @telefono
    end
if @opcion = 4
    begin
        delete proveedor where idProveedor = @idProveedor
    end
go

-- Procedimiento almacenado para insertar categorias

create procedure sp_CRUDCategoria (
    @idCategoria int = null,
    @categoria varchar(40),
    @opcion int
) as
if @opcion = 1
    begin
        insert into categoria values (@categoria)
    end
if @opcion = 2
    begin
        select @idCategoria, @categoria from categoria
    end
if @opcion = 3
    begin
        update categoria set categoria = @categoria
    end
if @opcion = 4
    begin
        delete categoria where idCategoria = @idCategoria
    end
go

-- Procedimiento almacenado CRUD productos

create procedure sp_CRUDProductos (
    @idProducto int = null,
    @codigo varchar(13) = null,
    @producto varchar(50) = null,
    @descripcion text = null,
    @stock int = null,
    @precio decimal = null,
    @precioUnitario decimal = null,
    @categoria int = null,
    @proveedor int = null,
    @opcion int
) as
if @opcion = 1
    begin
        insert into productos values (@codigo, @producto, @descripcion,
            @stock, @precio, @precioUnitario, @categoria, @proveedor)
    end
if @opcion = 2
    begin
        /* select * from productos where idProducto = @idProducto
            or codigoBarras = @codigo */
        select p.codigoBarras, p.nombreProducto, p.descripcion,
            p.stock, p.precioUnitario, c.categoria, prov.nombreCompania
        from productos as p
        inner join categoria as c
        on c.idCategoria = p.fk_idCategoria
        inner join proveedor as prov
        on prov.idProveedor = p.fk_idProveedor
        where p.idProducto = @idProducto
            or p.codigoBarras = @codigo
    end
if @opcion = 3
    begin
        update productos set codigoBarras = @codigo, nombreProducto = @producto,
            descripcion = @descripcion, stock = @stock, precio = @precio,
            precioUnitario = @precioUnitario, fk_idCategoria = @categoria,
            fk_idProveedor = @proveedor
    end
if @opcion = 4
    begin
        delete productos where idProducto = @idProducto 
            or codigoBarras = @codigo
    end
go

-- Procedimiento almacenado para los detalles de venta

/* create procedure sp_detalleVenta (
    @idDetalleVenta int = null,
    @fk_idProducto int,
    @cantidad int,
    @precio decimal,
    @subtotal decimal
) as
begin
    insert into detalleVenta values (
        @fk_idProducto, @cantidad, @precio, @subtotal)
end
go */