import {
    render
} from './render';
import {
    errorMessage
} from './helpers';
export const changePermissions = () => {
    const tbody = document.getElementById('table-body');

    tbody.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.closest('input[type=checkbox]')) {
            const tr = e.target.closest('tr');
            const input = tr.querySelector('input[type=checkbox]');
            const id = tr.dataset.key;

            userService.changeUser(id, {
                permissions: input.checked
            }).then(res => {
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