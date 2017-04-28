exports.capitalizeFirstLetter = function(string) {
    if(string == undefined || string.length <= 2) {
        return undefined;
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
};