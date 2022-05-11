class SavingsAccount extends Account{
    constructor(number, balance, interest){

        super(number, balance);
        this.interest= interest;
    }
    setInterest(interest){ 
        this.interest= interest;
    }
    getInterest(){
        return this.interest;
    }

    addInterest(){
        return (this.balance * this.interest)/ 100
    }
    
    toString() {
        return "Account " + this._number + ": balance " + this._balance;
    }

}
class CheckingAccount extends Account{
constructor(number, balance, overdraft){

    super(number, balance);
    this.overdraft= overdraft;
}
setOverdraft(overdraft){
    this.overdraft= overdraft;
}
getOverdraft(){
    return this.overdraft;
}
withdraw(amount) {
    if (amount <= 0) {
        throw new RangeError("Withdraw amount has to be greater than zero");
    }
    if (amount > this._balance) {
        throw Error("Insufficient funds");
    }
    this._balance -= amount;
}
toString() {
    return "Account " + this._number + ": balance " + this._balance;
}
}

class Bank{
    let Bank = {[]}
}