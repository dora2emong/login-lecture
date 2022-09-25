"use strict"

class UserStorage {
    static #users = {
        id: ["z123", "x123", "c123"],
        psword: ["1111", "2222", "3333"],
        name: ["장", "김", "이"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users); // => [id, psword ,name]
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }
}


module.exports = UserStorage;