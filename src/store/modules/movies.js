import Movies from "../../data/movies"



const state = {
        movies: Movies
};
const mutations = {
 ADD_MOVIE(state, newMovie) {
     Movies.push(newMovie)
 }
}
const actions = {
    addMovie: ({ commit }, newMovie) => {
        commit("ADD_MOVIE", newMovie);
    }
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