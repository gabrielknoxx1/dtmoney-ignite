import { makeObservable, observable, action, configure } from "mobx";
import { createContext } from "react";

export interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, "id" | "createdAt">;

class TransactionStore {
  transactions: Transaction[] = [
    {
      id: 1,
      title: "Freelance de website",
      type: "deposit",
      category: "Dev",
      amount: 6000,
      createdAt: String(new Date("2021-02-12 09:00:00")),
    },
    {
      id: 2,
      title: "Jogo",
      type: "withdraw",
      category: "Games",
      amount: 350,
      createdAt: String(new Date("2021-02-12 15:00:00")),
    },
    {
      id: 3,
      title: "Comida",
      type: "withdraw",
      category: "Food",
      amount: 250,
      createdAt: String(new Date("2021-02-12 15:00:00")),
    },
  ];

  constructor() {
    makeObservable(this, {
      transactions: observable,
      getTransactions: action,
      createTransaction: action,
    });
  }

  getTransactions(transaction: Transaction[]) {
    return this.transactions.push(...transaction);
  }

  createTransaction(transactionInput: TransactionInput) {
    const newTransaction = {
      ...transactionInput,
      createdAt: String(new Date("2021-02-12 15:00:00")),
      id: Math.random(),
    };

    return this.transactions.concat(newTransaction);
  }
}

export default createContext(new TransactionStore());
