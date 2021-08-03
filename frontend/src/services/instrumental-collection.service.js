import http from "../http-common";

class InstrumentalCollectionDataService{
    getAll(){
        return http.get("/instrumental-collections");
    }
    get(id){
        return http.get("/instrumental-collections/$" + (id));
    }
    create(data){
        return http.post("/instrumental-collections", data);
    }
    update(id, data){
        return http.put("/instrumental-collections/$" + (id), data);
    }
    delete(id){
        return http.delete("/instrumental-collections/$" + (id));
    }
    deleteAll(){
        return http.delete("/instrumental-collections");
    }
    findByTitle(title){
        return http.get("/instrumental-collections?title=$" + (title));
    }
    getByLimitOffset(limit, offset){
        return http.get("/instrumental-collections/?limit=$" + toString(limit) + "&offset=$" + toString(offset))
    }
}
export default new InstrumentalCollectionDataService();