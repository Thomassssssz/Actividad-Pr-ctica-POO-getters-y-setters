import { Empleado, EmpleadoFijo } from "./ej3.ts";

class EmpleadoPorHoras extends Empleado {
  horasTrabajadas: number;
  valorHora: number;

  constructor(
    nombre: string,
    antiguedad: number,
    horasTrabajadas: number,
    valorHora: number,
  ) {
    super(nombre, antiguedad);
    this.horasTrabajadas = horasTrabajadas;
    this.valorHora = valorHora;
  }

  calcularSueldo(): number {
    const sueldo = this.horasTrabajadas * this.valorHora;
    return sueldo;
  }
}

class EmpleadoPorComision extends Empleado {
  ventasDelMes: number;
  porcentajeComision: number;

  constructor(
    nombre: string,
    antiguedad: number,
    ventasDelMes: number,
    porcentajeComision: number,
  ) {
    super(nombre, antiguedad);
    this.ventasDelMes = ventasDelMes;
    this.porcentajeComision = porcentajeComision;
  }

  calcularSueldo(): number {
    const sueldo = this.ventasDelMes * (this.porcentajeComision / 100);

    return sueldo;
  }
}

const empleados: Empleado[] = [
  new EmpleadoFijo("Tomás", 4, 500000),
  new EmpleadoPorHoras("Facundo", 2, 120, 5000),
  new EmpleadoPorComision("Franco", 3, 3000000, 10),
];

for (const empleado of empleados) {
  console.log(empleado.calcularSueldo());
}

function calcularNomina(empleados: Empleado[]): number {
  let total = 0;

  for (const empleado of empleados) {
    total = total + empleado.calcularSueldo();
  }

  return total;
}

console.log(`Total de nómina: $${calcularNomina(empleados)}`);
