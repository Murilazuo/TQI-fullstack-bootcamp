class ContaBancaria {
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0; 
    }

    get saldo(){
        return this._saldo
    }
    set saldo(newSaldo){
        this._saldo = newSaldo
    }

    sacar(saque){
        if(saque > this.saldo){
            return "Operação negada";
        }else{
            this._saldo -= saque;
            return this._saldo
        }
    }
    depositar(deposito){
        this.saldo += deposito;
        return this._saldo
    }
}

class ContaCorrent extends ContaBancaria {
    constructor (agencia, numero, cartaoCredito){
        super(agencia,numero)
        this.tipo = 'ContaCorrente';
        this._cartaoCredito = cartaoCredito

    
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }
    set cartaoCredito(newCartaoCredito){
        this._cartaoCredito = newCartaoCredito;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor (agencia, numero){
        super(agencia,numero)
        this.tipo = 'Poupança';
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor (agencia, numero){
        super(agencia,numero)
        this.tipo = 'ContaUniversitaria';
    }

    sacar(saque){
        if(saque < 500 && saque < this._saldo){
            this.saldo -= saque;
            return this.saldo
        }else{
            return "Operação invalida"
        }
    }
}
