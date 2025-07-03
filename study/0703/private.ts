// class BankAccount {
//     #balance: number = 100;

//     deposit(amount: number){
//         if (amount <= 0) {
//             console.log("0원 이상만 입금할 수 있습니다.");
//             return;
//         }
//         this.#balance += amount;
//         console.log(`${amount}원이 입금되었습니다.`);
//     }

//     getBalance(): number{
//         console.log(this.#balance)
//         return this.#balance;
//     }
//     setBalance(amount: number){
//         amount = amount * 1.1;
//         this.#balance = amount;
//     }
// }

// let account = new BankAccount();
// account.setBalance(1000);
// account.getBalance();
// console.log(account.getBalance());