/*
Gestion de datos:
Fecha: 27-02-2017
Autor: Arturo Sarmiento Paszor
Verión: 1.0
Descripción: Para hacer un pedido necesitamos estos datos:
- Una fecha de pedido
- Un número total de artículos
- Un total de pedido
- Una dirección de entrega
- Una dirección de facturación
*/
function Pedido(fechaPedido,
								totalArticulos,
								totalPedido,
								direccionEntrega,
								direccionFacturacion) {
	this.fechaPedido = fechaPedido;
	this.totalArticulos = totalArticulos;
	this.totalPedido = totalPedido;
	this.direccionEntrega = direccionEntrega;
	this.direccionFacturacion = direccionFacturacion;

	// Metodo para conocer la fecha del pedido
	this.getFechaPedido = function () {
		return this.fechaPedido;
	};

	// Metodo para conocer los articuloa
	this.getTotalArticulo = function () {
		return this.totalArticulos;
	};

	// Metodo para conocer el pedido total
	this.getTotalPedido = function () {
		return this.totalPedido;
	};

	// Metodo para conocer la direccion de entrega
	this.getDireccionEntrega = function () {
		return this.direccionEntrega;
	};

	// Metodo para conocer le direccion de facturacion
	this.getDireccionFacturacion = function () {
		return this.direccionFacturacion;
	};

	// Metodo para poder cambiar la fecha de pedido
	this.setFechaPedido = function (fechaPedido) {
		this.fechaPedido = fechaPedido;
	};

	// Metodo para poder cambiar la direccion de facturacion
	this.setTotalArticulo = function (totalArticulos) {
		this.totalArticulos = totalArticulos;
	};

		// Metodo para poder cambiar el pedido
	this.setTotalPedido = function (totalPedido) {
		this.totalPedido = totalPedido;
	};

	// Metodo para poder cambiar la direccion de entrega
	this.setDireccionEntrega = function (direccionEntrega) {
		this.direccionEntrega = direccionEntrega;
	};

		// Metodo para poder cambiar la direccion de facturacion
	this.setDireccionFacturacion = function (direccionFacturacion) {
		this.direccionFacturacion = direccionFacturacion;
	};
}