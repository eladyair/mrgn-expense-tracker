const createTransaction = async (parent, args, { models }, info) => {
    const newTransaction = await models.Transaction.create({
        text: args.text,
        amount: args.amount
    });

    return newTransaction;
};

const deleteTransaction = async (parent, args, { models }, info) => {
    const deletedTransaction = await models.Transaction.deleteOne({ _id: args.id });

    return {
        id: args.id
    };
};

module.exports = {
    createTransaction,
    deleteTransaction
};
