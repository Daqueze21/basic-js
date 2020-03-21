module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let arr = members.map(function (val) {
      if (typeof val === 'string') {
        return val.trim().toUpperCase()[0];
      };
    });
    
    return arr.sort().join(''); 
  } else {
    return false;
  };
};
