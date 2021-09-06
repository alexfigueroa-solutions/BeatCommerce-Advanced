import http from "../http-common";

export default new class InstrumentalDataService{
    getAll(){
        return http.get("/instrumentals");
    }
    get(id){
        return http.get("/instrumentals/$" + (id));
    }
    create(data){
        return http.post("/instrumentals", data);
    }
    update(id, data){
        return http.put("/instrumentals/$" + (id), data)
    }
    delete(id){
        return http.delete("/instrumentals/$" + (id));
    }
    deleteAll(){
        return http.delete("/instrumentals");
    }
    findByTitle(title){
        return http.get('/instrumentals/?title=$' + (title));
    }
    getByPage(page_num){
        return http.get('/instrumentals/?page=$' + toString(page_num))
    }
    getByLimitOffset(limit, offset){
        return http.get("/instrumentals/?limit=${" + toString(limit) + "}&offset=${" + toString(offset) + "}")
    }
}



