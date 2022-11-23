function confirmation(idProducto) {
    alert('Hola');
    // const swalWithBootstrapButtons = Swal.mixin({
    // customClass: {
    //     confirmButton: 'btn btn-success upd',
    //     cancelButton: 'btn btn-danger upd'
    // },
    // buttonsStyling: false
    // })

    // swalWithBootstrapButtons.fire({
    // title: '¿Borrar el producto ' + idProducto + '?',
    // text: "¡Estos cambios no se pueden revertir!",
    // icon: 'warning',
    // showCancelButton: true,
    // confirmButtonText: 'Borrar',
    // cancelButtonText: 'Cancelar',
    // reverseButtons: true
    // }).then((result) => {
    // if (result.isConfirmed) {
    //     swalWithBootstrapButtons.fire(
    //     'Producto eliminado!',
    //     'El producto a sido eliminado.',
    //     'success',
    //     )
    //     window.location = '/delete/' + idProducto;
    // } else if (
    //     /* Read more about handling dismissals below */
    //     result.dismiss === Swal.DismissReason.cancel
    // ) {
    //     swalWithBootstrapButtons.fire(
    //     'Cancelado',
    //     'Tú lista de productos no ha sido actualizada',
    //     'error'
    //     )
    // }})
}  
document.addEventListener('DOMContentLoaded', () => {
    $(document).ready(function () {
        $('#tableProducts').DataTable();
    });
})
