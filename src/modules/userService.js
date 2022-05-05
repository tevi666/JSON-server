export class UserService {
    async getData(url) {
        return fetch(url).then(res => res.json());
    }
    async sendData(options) {
        return fetch(options.url, {
            method: options.method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: options.body
        }).then(res => res.json());
    }

    getUsers() {
        return this.getData('http://localhost:4242/users');
    }

    addUser(user) {
        return this.sendData({
            url: 'http://localhost:4242/users',
            method: 'POST',
            body: JSON.stringify(user)
        });
    }

    removeUser(id) {
        return this.sendData({
            url: `http://localhost:4242/users/${id}`,
            method: 'DELETE'
        });
    }

    changeUser(id, data) {
        return this.sendData({
            url: `http://localhost:4242/users/${id}`,
            method: 'PATCH',
            body: JSON.stringify(data),
        });
    }

    getUser(id) {
        return this.getData(`http://localhost:4242/users/${id}`);
    }

    editUser(id, user) {
        return this.sendData({
            url: `http://localhost:4242/users/${id}`,
            method: 'PUT',
            body: JSON.stringify(user)
        });
    }

    filterUsers(filterOption) {
        return this.getData(`http://localhost:4242/users?${filterOption}=true`);
    }

    getSortUsers(sortOption) {
        return this.getData(`http://localhost:4242/users?_sort=${sortOption.name}&_order=${sortOption.value}`);
    }

    getSearchUser(str) {
        return this.getData(`http://localhost:4242/users?name_like=${str}`);
    }
}