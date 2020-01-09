import axios from 'axios'

const state = {
    funds: 0,
    stocks: []
};

const mutations = {
    'BUY_STOCK'(state, {stockId, quantity, stockPrice}) {
        const record = state.stocks.find(element => element.id == stockId);
        if (record) {
            record.quantity += quantity;
        } else {
            state.stocks.push({
                id: stockId,
                quantity: quantity
            });
        }
        state.funds -= stockPrice * quantity;
    },
    'SELL_STOCK' (state, {stockId, quantity, stockPrice}) {
        const record = state.stocks.find(element => element.id == stockId);
        if (record.quantity > quantity) {
            record.quantity -= quantity;
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }
        state.funds += stockPrice * quantity;
    },
    'SELL_ALL' (state, {stockId,stockPrice}){
        const record = state.stocks.find(element => element.id == stockId);
        console.log(record.quantity + " Stück verkauft");
        state.funds += stockPrice * record.quantity;
        state.stocks.splice(state.stocks.indexOf(record),1);
        record.quantity = 0;
    },
    'SET_PORTFOLIO' (state, portfolio) {
        state.funds = portfolio.funds;
        state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
    }
};

const actions = {
    sellStock({commit}, order) {
        commit('SELL_STOCK', order);
    },
    sellAll({commit},order){
        commit('SELL_ALL', order);
}
};

const getters = {
    stockPortfolio (state, getters) {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id == stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        });
    },
    funds (state) {
        axios.get("http://localhost:8080/data.json")
            .then(res => {
                const items = [];
                for(let key in res.data) {
                    const item = res.data[key];
                    item.id = key;
                    item.funds = res.data[key].funds
                    items.push(item);
                    console.log("portfolio item: ", item.id, item.funds)
                }
                console.log(items[0].funds)
                state.funds = items[0].funds;
            });

      return state.funds;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}