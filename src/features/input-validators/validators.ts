export type FieldValidatorType = (value: string) => string | undefined

export const required: FieldValidatorType = (value) => {
    if (value) return undefined;

    return "Field is required";
}

export const maxLengthCreator = (maxLength: number): FieldValidatorType => (value) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}

export const minLengthCreator = (minLength: number): FieldValidatorType => (value) => {
    if (typeof value === 'string' && value.length < minLength) {
        return `Min length is ${minLength}`
    }
    return undefined;
}
