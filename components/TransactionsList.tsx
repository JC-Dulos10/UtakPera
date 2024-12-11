import { Text, TouchableOpacity, View } from "react-native";
import { Category, Transaction } from "../types";
import TransactionListItem from "./TransactionListItem";

export default function TransactionsList({
    transactions,
    categories,
    deleteTransaction,
}: {
    transactions: Transaction[];
    categories: Category[];
    setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>;
    deleteTransaction: (id: number) => Promise<void>;
}) {
    return (
        <View style={{gap: 15}}>
            {
                transactions.map((transaction) => {
                    const categoryForCurrentItem = categories
                        .find((category) => category.id === transaction.category_id);
                    return (
                        <TouchableOpacity
                            key={transaction.id}
                            onLongPress={() => {
                                deleteTransaction(transaction.id);
                            }}
                            activeOpacity={.7}
                        >
                            {
                                <TransactionListItem 
                                    transaction={transaction} 
                                    categoryInfo={categoryForCurrentItem} />
                            }
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}
