var data = {
    F1: [
        "s1_1",
        "s1_2",
        "s1_3"
    ],
    F2: [
        "s2_1",
        "s2_2",
        "s2_3"
    ]
}
module.exports = {
    getFeeders: function(){
        return Object.keys(data);
    },
    getSignets: function(feedetId){
        return data[feedetId];
    }
};