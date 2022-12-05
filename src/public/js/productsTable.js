async function addProduct() {
  const { value: formValues } = await Swal.fire({
    title: "Agregar Producto",
    html:
        '<form action="/addProduct" method="post">' +
        '<input placeholder="producto" name="product" id="swal-input1" class="swal2-input">' +
        '<input placeholder="Descripcion" name="description" id="swal-input2" class="swal2-input">' +
        '<input type="number" placeholder="Stock" name="stock" id="swal-input3" class="swal2-input">' +
        '<input type="number" placeholder="Precio" name="price" id="swal-input4" class="swal2-input">' +
        '<input type="number" placeholder="Categoria" name="category" id="swal-input5" class="swal2-input">' +
        '<input type="number" placeholder="Proveedor" name="supplier" id="swal-input6" class="swal2-input">' +
        "</form>",
    // '<input type="submit" value="Agregar" class="btn btn-success swal2-input">',
    focusConfirm: false,
    preConfirm: () => {
        return {
            nombreProducto: document.getElementById("swal-input1").value,
            descripcion: document.getElementById("swal-input2").value,
            stock: document.getElementById("swal-input3").value,
            precio: document.getElementById("swal-input4").value,
            fk_idCategoria: document.getElementById("swal-input5").value,
            fk_idProveedor: document.getElementById("swal-input6").value,
        };
    },
    });

    if (formValues) {
        // Swal.fire(JSON.stringify(formValues))
        fetch("/products", {
        method: "post",
        body: new URLSearchParams(formValues),
    });
        // .then(res => res.redirect('../products')) // console.log(res.text())
        window.location.href = "../products";
    }
}

function confirmation(idProducto) {
    // alert('Hola');
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success upd",
            cancelButton: "btn btn-danger upd",
        },
    buttonsStyling: false,
    }
);

  swalWithBootstrapButtons
    .fire({
      title: "¿Esta seguro de eliminar?",
      text: "¡Estos cambios no se pueden revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
      reverseButtons: true,
    })
    .then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
            "Producto eliminado!",
            "El producto a sido eliminado.",
            "success"
            );
        window.location = "/deleteProduct/" + idProducto;
        // window.location.reload();
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
        swalWithBootstrapButtons.fire(
            "Cancelado",
            "Tú lista de productos no ha sido actualizada",
            "error"
        );
        }
    });
}
