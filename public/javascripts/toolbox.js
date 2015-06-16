
module.exports = {
    isBrowser: function(){
        return typeof window !== "undefined";
    },
    parseDataReactId: function(dataReactId){
        var dataArray = dataReactId.split("$");
        if (Array.isArray(dataArray) && dataArray.length)
            return dataArray[1];
    }
};