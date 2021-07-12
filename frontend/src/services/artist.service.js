import http from "../http-common";

class ArtistDataService {
    getAll(){
        return http.get("/artists");
    }
    get(id){
        return http.get('/artists/${' + toString(id) + '}');
    }
    create(data){
        return http.post("/artists", data);
    }
    update(id, data){
        return http.put('/artists/${' + toString(id) + "}", data);
    }
    delete(id){
        return http.delete('/artists/$' + id);
    }
    deleteAll(){
        return http.delete('/artists');
    }
    findByAlias(alias){
        return http.get('/artists?alias=$' + (alias) + '');
    }
}
export default new ArtistDataService();