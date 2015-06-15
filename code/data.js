var data = [
    {
        id: "F1",
        signets: [
            "s1_1",
            "s1_2",
            "s1_3"
        ]
    },
    {
        id: "F2",
        signets: [
            "s2_1",
            "s2_2",
            "s2_3"
        ]
    }
];

module.exports = {
    getFeeders: function(){
        return data;
    },
    getSignets: function(feederId){
        var i =0, l = data.length,
            current;
        for(; i < l; i ++){
            current = data[i];
            if (current.id === feederId)
                return current.signets;
        }        
    }
};