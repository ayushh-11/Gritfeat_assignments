//Check if any item from user roles exists in required roles.

const hasRequiredRole = (user, required) =>  {
    const map = {};
    for (let role of required)
        map[role] = true;
    for (let role of user){
        if (map[role])
            return true;
    }
    return false
}

const roles = ['admin', 'manager', 'supervisor', 'editor', 'viewer', 'owner'];
const userRoles = ['user', 'editor'];
const requiredRoles = ['admin', 'editor'];

console.log(hasRequiredRole(userRoles, requiredRoles));

//Time complexity O(n+m)