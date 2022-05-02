function getAdmins(map) {
    let admins = [];

    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Daniel', 'Admin');
usuarios.set('Emilio', 'User');
usuarios.set('Jose', 'Admin');
usuarios.set('Lucas', 'User');

console.log(getAdmins(usuarios));