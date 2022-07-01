function fourOrLessNames(names){
    return names.filter(function(value){
        return value.length <= 4;
    });
}