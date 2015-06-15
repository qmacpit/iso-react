var data = [
    {
        id: "F1",
        signets: [
            {
                id: "s1_1"   
            },
            {
                id: "s1_2"   
            },
            {
                id: "s1_3"   
            }           
        ]
    },
    {
        id: "F2",
        signets: [
             {
                id: "s2_1"   
            },
            {
                id: "s2_2"   
            },
            {
                id: "s2_3"   
            }      
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