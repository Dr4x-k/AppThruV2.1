use abarrotes;

create view viewUsuarios as
select us.idUsuario, us.nombres, us.apellidoPaterno,
    us.apellidoMaterno, us.usuario,
    r.nombre as rol
from usuario as us
inner join rol as r
on r.idRol = us.fk_rol;

create view viewProductos as
select prod.idProducto, prod.nombreProducto,
    prod.descripcion, prod.precio, cat.categoria
from productos as prod
inner join categoria as cat
on cat.idCategoria = prod.fk_idCategoria;

select * from viewProductos;

select * from viewUsuarios