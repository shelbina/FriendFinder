module.exports = function(app){ 
    //A GET route with the url /api/friends. used to display a JSON of all possible friends.
    app.get("/api/friends", function(req, res){
        res.json(reservations);
    });
    
    //// A POST routes /api/friends. used to handle incoming survey results.
    // This route will also be used to handle the compatibility logic.
    app.get("/api/waitlist", function(req, res){
        res.json(waitList);
    });
    
    //post for making reservation
    
    app.post("/api/reserve", function(req, res){
        console.log(req);
        var reserve = req.body;
        reservations.push(reserve);
        
        
    });

}