export const requiredField = value => {
    if (value) return undefined;
    return 'error message'
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (typeof value === 'string' && value.length > maxLength) {
        return `Max length is ${maxLength}`;
    }
    return undefined;
}

export const minLengthCreator = (minLength) => (value) => {
    if (typeof value === 'string' && value.length < minLength) {
        return `Min length is ${minLength}`;
    }
    return undefined;
}
