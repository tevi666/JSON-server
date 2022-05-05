import {
    render
}
from './render';
import {
    errorMessage
} from './helpers';
export const sortUsers = () => {
    const headerSortIsChildren = document.getElementById('sort-is-children');
    const headerSortIsId = document.getElementById('sort-is-id');
    const headerSortIsName = document.getElementById('sort-is-name');
    const headerSortIsEmail = document.getElementById('sort-is-email');
    const headerSortIsPremissions = document.getElementById('sort-is-premissions');

    let isSort = false;
    headerSortIsChildren.style.cursor = 'pointer';
    headerSortIsId.style.cursor = 'pointer';
    headerSortIsName.style.cursor = 'pointer';
    headerSortIsEmail.style.cursor = 'pointer';
    headerSortIsPremissions.style.cursor = 'pointer';


    headerSortIsChildren.addEventListener('click', () => {
        userService.getSortUsers({
            name: 'children',
            value: isSort ? 'ask' : 'desc'
        }).then(users => {
            render(users);
        });
        isSort = !isSort;
    });

    headerSortIsId.addEventListener('click', () => {
        userService.getSortUsers({
            name: 'id',
            value: isSort ? 'ask' : 'desc'
        }).then(users => {
            render(users);
        }).catch(() => {
            errorMessage();
        });
        isSort = !isSort;
    });

    headerSortIsName.addEventListener('click', () => {
        userService.getSortUsers({
            name: 'name',
            value: isSort ? 'ask' : 'desc'
        }).then(users => {
            render(users);
        }).catch(() => {
            errorMessage();
        });
        isSort = !isSort;
    });

    headerSortIsEmail.addEventListener('click', () => {
        userService.getSortUsers({
            name: 'email',
            value: isSort ? 'ask' : 'desc'
        }).then(users => {
            render(users);
        }).catch(() => {
            errorMessage();
        });
        isSort = !isSort;
    });

    headerSortIsPremissions.addEventListener('click', () => {
        userService.getSortUsers({
            name: 'permissions',
            value: isSort ? 'ask' : 'desc'
        }).then(users => {
            render(users);
        }).catch(() => {
            errorMessage();
        });
        isSort = !isSort;
    });

};