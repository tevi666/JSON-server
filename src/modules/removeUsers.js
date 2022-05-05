import {
    render
} from './render';
import {
    errorMessage
} from './helpers';
export const removeUsers = () => {
    const tbody = document.getElementById('table-body');

    tbody.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.closest('.btn-remove')) {
            const tr = e.target.closest('tr');
            const id = tr.dataset.key;

            userService.removeUser(id).then(res => {
                userService.getUsers(id).then(users => {
                    render(users);
                }).catch(() => {
                    errorMessage();
                });
            }).catch(() => {
                errorMessage();
            });
        }
    });
};