function distanceFromHqInBlocks(pickup){
    if (pickup <= 42){
        return 42 - pickup
    }
    else if (pickup > 42){
        return pickup - 42
    }
}

function distanceFromHqInFeet(pickup){
    let distanceInBlocks = distanceFromHqInBlocks(pickup);
    return distanceInBlocks*264;
}

function distanceTravelledInFeet(start, destination){
    function distanceTravelledInBlocks (start, destination)
    {
        if (start > destination){
        return start - destination;
    }
    else if (start < destination){
        return destination-start;
    }
    }

    let distanceInBlocks = distanceTravelledInBlocks(start, destination);
    return distanceInBlocks*264; 
}

function calculatesFarePrice(start, destination){
    let distanceTravelled = distanceTravelledInFeet(start, destination);
    if (distanceTravelled <= 400){
        return 0
    }
    else if (distanceTravelled >=2500){
        return 'cannot travel that far';
    }
    else if (distanceTravelled <= 2000){
        return (distanceTravelled-400)*.02;
    }
    else if (distanceTravelled > 2000){
        return 25;
    }
    
}