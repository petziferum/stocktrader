import Movies from "../../data/movies"



const state = {
        movies: Movies
};
const mutations = {

}
const actions = {

}
const getters = {
    data: state => {
        return state.movies;
    }
}

export default {
    state,
    mutations,
    actions,
    getters,

}