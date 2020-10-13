const Transaction = require('../../models/Transaction');

const transactions = async (parent, args, { models }, info) => {
    return await models.Transaction.find();
};

module.exports = {
    transactions
};
