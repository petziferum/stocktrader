import axios from "axios";

export const loadData = ({commit}) => {
  axios
    .get("http://localhost:8080/data.json")
    .then(res => {
        console.log("res: ",res);
        const daten = res.data;
        for (let key in daten) {
            const stocks = daten[key];
            stocks.id = key;
            const s = stocks.stocks;
            console.log("stocks: ", s);
            if (stocks) {
                const stocks = stocks.stocks;
                const funds = stocks.funds;
                console.log("actions:", funds);
                const stockPortfolio = res.stockPortfolio;
                const portfolio = {
                    stockPortfolio,
                    funds
                };
                commit("SET_STOCKS", stocks);
                commit("SET_PORTFOLIO", portfolio)
            }
        }
    })
    .catch(error => {
      console.log(error);
    });
};
