import {
    render
} from './render';
import {
    debounce
} from './helpers';
import {
    errorMessage
} from './helpers';
export const searchUsers = () => {
    const input = document.getElementById('search-input');

    const debounceSearch = debounce(() => {
        userService.getSearchUsers(input.value).then(users => {
            render(users);
        }).catch(() => {
            errorMessage();
        });
    }, 500);

    input.addEventListener('input', debounceSearch);
};