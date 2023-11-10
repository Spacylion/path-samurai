import { createSelector } from 'reselect';
// selectors users
const getUsersSelector = (state) => {
    return state.usersPage.users;
}

/**  первый аргумен проверяет зависимости.
 * последний  параметр - функция запускается если 
 есть изменения*/
export const getUsersSuperSelector =
    createSelector(getUsersSelector, (users) => {
        return users.filter(u => true);
    })
export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state) => {
    return state.usersPage.page
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}