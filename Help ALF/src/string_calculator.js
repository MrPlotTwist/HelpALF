// HelpALF.js
function HelpALF() {}
HelpALF.prototype.add = 
function HelpALF() {}

HelpALF.prototype.add = function findSpaceship(map) {
    if (map === '') {
        return "Spaceship lost forever.";
    }

    var rows = map.split(",");
    
    for (var i = 0; i < rows.length; i++) {
        var position = parseInt(rows[i]);
        
        if (!isNaN(position) && position === 7) {
            return "Spaceship found!";
        }
    }
    
    return "Spaceship lost forever.";
}

	
