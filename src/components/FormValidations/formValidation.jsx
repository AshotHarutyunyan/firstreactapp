export const required = (value) => {
    if(value) return undefined;
    return "required input";
}
export const maxLength = (maxLength) => (value) => {
    if(value.length > maxLength) return `max length is ${maxLength}`;
    return undefined;
}