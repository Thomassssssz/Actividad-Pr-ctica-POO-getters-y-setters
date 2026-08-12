class CuentaBancaria {
  readonly titular: string;
  private saldo: number;
  private historial: string[];

  constructor(titular: string, saldoInicial: number) {
    this.titular = titular;
    this.saldo = saldoInicial;
    this.historial = [];
  }

  depositar(monto: number): void {
    if (monto <= 0) {
      throw new Error("El monto a depositar debe ser mayor a 0");
    }

    this.saldo = this.saldo + monto;
    this.historial.push(`Depósito: +$${monto}`);
  }

  retirar(monto: number): void {
    if (monto <= 0) {
      throw new Error("El monto a retirar debe ser mayor a 0");
    }

    if (monto > this.saldo) {
      throw new Error("Saldo insuficiente");
    }

    this.saldo = this.saldo - monto;
    this.historial.push(`Retiro: -$${monto}`);
  }

  consultarSaldo(): number {
    return this.saldo;
  }

  obtenerHistorial(): string[] {
    return [...this.historial];
  }
}

const cuenta = new CuentaBancaria("Tomás", 50000);

console.log(cuenta.consultarSaldo());
