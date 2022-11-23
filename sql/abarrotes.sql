create database abarrotes;
-- drop database abarrotes;
use abarrotes;

create table nuevosUsuarios (
    idUsuario int,
    fechaRegistro date,
    msg varchar(30),
    usuario varchar(12)
);

create table rol (
    idRol int primary key auto_increment,
    nombre varchar(15) not null,
    descripcion text 
);

create table usuario (
    idUsuario int primary key auto_increment,
    fk_rol int not null,
    nombres varchar(50) not null,
    apellidoPaterno varchar(25) not null,
    apellidoMaterno varchar(25) not null,
    telefono varchar(10) not null,
    ciudad varchar(60),
    colonia varchar(60),
    calle varchar(60),
    codigoPostal varchar(6),
    usuario varchar(10) not null unique,
    contrasena text not null,
    foreign key (fk_rol)
    references rol (idRol)
);

create table proveedor (
    idProveedor int primary key auto_increment,
    nombreCompania varchar(60) not null,
    nombreContacto varchar(60) not null,
    direccion text not null,
    ciudad varchar(20) not null,
    codigoPostal varchar(6) not null,
    telefono varchar(10) not null
);

create table categoria (
    idCategoria int primary key auto_increment,
    categoria varchar(40) not null
);

create table productos (
    idProducto int primary key auto_increment,
    codigoBarras varchar(13),
    nombreProducto varchar(50) not null,
    descripcion text,
    stock int not null,
    precio decimal(11,2) not null,
    precioUnitario decimal(11,2) not null,
    fk_idCategoria int not null,
    fk_idProveedor int not null,
    foreign key (fk_idCategoria)
    references categoria (idCategoria),
    foreign key (fk_idProveedor)
    references proveedor (idProveedor)
);

create table detalleVenta (
    idDetalleVenta int primary key auto_increment,
    fk_idProducto int not null,
    cantidad int not null,
    precio decimal(11,2) not null,
    subtotal decimal(11,2) not null,
    foreign key (fk_idProducto)
    references productos (idProducto)
);

create table venta (
    idVenta int primary key auto_increment,
    fk_idDetalleVenta int not null,
    fk_idUsuario int not null,
    fechaVenta datetime not null,
    total decimal(11,2) not null,
    foreign key (fk_idDetalleVenta)
    references detalleVenta (idDetalleVenta),
    foreign key (fk_idUsuario)
    references usuario (idUsuario)
);