async function addProduct2() {
    const { value: formValues } = await Swal.fire({
        title: 'Agregar Producto',
        html:
        '<input placeholder="producto" id="swal-input1" class="swal2-input">' +
        '<input placeholder="Descripcion"  id="swal-input2" class="swal2-input">' +
        '<input placeholder="Precio" id="swal-input3" class="swal2-input">' +
        '<input placeholder="Stoke" id="swal-input4" class="swal2-input">' +
        '<input placeholder="Categoria" id="swal-input5" class="swal2-input">',
        // '<input type="submit" value="Agregar" class="btn btn-success swal2-input">',
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById('swal-input1').value,
            document.getElementById('swal-input2').value,
            document.getElementById('swal-input3').value,
            document.getElementById('swal-input4').value,
            document.getElementById('swal-input5').value
          ]
        }
      })
      
      if (formValues) {
        Swal.fire(JSON.stringify(formValues))
      }
}
 
function addProduct() {
	$.post("../controller/")
}

function confirmation(idProducto) {
    // alert('Hola');
    const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-success upd',
        cancelButton: 'btn btn-danger upd'
    },
    buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
    title: '¿Borrar el producto ' + idProducto + '?',
    text: "¡Estos cambios no se pueden revertir!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Borrar',
    cancelButtonText: 'Cancelar',
    reverseButtons: true
    }).then((result) => {
    if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
        'Producto eliminado!',
        'El producto a sido eliminado.',
        'success',
        )
        window.location = '/deleteProduct/' + idProducto;
    } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
    ) {
        swalWithBootstrapButtons.fire(
        'Cancelado',
        'Tú lista de productos no ha sido actualizada',
        'error'
        )
    }})
}  
// document.addEventListener('DOMContentLoaded', () => {
//     $(document).ready(function () {
//         $('#tableProducts').DataTable();
//     });
// })
