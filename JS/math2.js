export const potencia = (a, b) => a**b;
export const factorial = (a) => {
    if (a == 0) {
        return 1;
    }
    return a * factorial(a-1);
};