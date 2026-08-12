class Producto {
  nombre: string;
  precio: number;
  categoria: string;
  stock: number;

  constructor(
    nombre: string,
    precio: number,
    categoria: string,
    stock: number,
  ) {
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    this.stock = stock;
  }

  describir(): string {
    return `${this.nombre} (${this.categoria}): $${this.precio} — ${this.stock} unidades`;
  }

  hayStock(cantidad: number): boolean {
    return cantidad > 0 && cantidad <= this.stock;
  }

  venderUnidades(cantidad: number): string {
    if (this.hayStock(cantidad)) {
      this.stock = this.stock - cantidad;
      return "Venta realizada";
    } else {
      return "No hay stock suficiente";
    }
  }

  aplicarDescuento(porcentaje: number): number {
    return this.precio - (this.precio * porcentaje) / 100;
  }
}

const play = new Producto("PlayStation 5", 600000, "electrónica", 6);

console.log(play.describir());
