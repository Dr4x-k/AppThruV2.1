-- Consulta de Empleados
use abarrotes;

select em.nombres as 'Nombres', em.apellidoPaterno as 'Apellido Paterno',
    em.apellidoMaterno as 'Apellido Materno', em.usuario,
    r.nombre as 'Rol'
from usuario as em
inner join rol as r
on r.idRol = em.fk_rol
    -- Con procedimiento almacenado
    

-- Consulta de Productos

select p.codigoBarras, p.nombreProducto, p.descripcion,
    p.stock, p.precioUnitario, c.categoria, prov.nombreCompania
from productos as p
inner join categoria as c
on c.idCategoria = p.fk_idCategoria
inner join proveedor as prov
on prov.idProveedor = p.fk_idProveedor
    -- con procedimiento almacenado
    exec sp_CRUDProductos @opcion=2, @codigo=1
