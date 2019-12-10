import axios from "axios";

export const loadData = () => {
  axios
    .get("http://localhost:8080/data.json")
    .then(res => {
      const data = res.data;
      console.log(data[1])
      // const stocks = stock.data;
      // const funds = stock.funds;
      // const stockPortfolio = stock.stockPortfolio;
      // const portfolio = {
      //     stockPortfolio, funds
      // };
      // console.log(stocks)
      // console.log(portfolio)
    })
    .catch(error => {
      console.log(error);
    });
};
// export const loadData01 = ({ commit }) => {
//   axios
//       .get("http://localhost:8080/data.json")
//       .then(response => {
//           console.log(response);
//         if (response) {
//           const stocks = response.stocks;
//           const funds = response.funds;
//           const stockPortfolio = response.stockPortfolio;
//           const portfolio = {
//             stockPortfolio,
//             funds
//           };
//           commit("SET_STOCKS", stocks);
//           commit("SET_PORTFOLIO", portfolio);
//         }
//       }).catch(function (error) {
//     console.log(error);
//   })
//       .finally(function () {
//         console.log("Axios fertig")
//       });
// }
