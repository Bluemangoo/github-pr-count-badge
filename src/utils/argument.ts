export function isValidName(x: any): boolean {
    if (typeof x != "string") {
        return false;
    }
    for (let i = 0; i < x.length; i++) {
        const x1 = x.charAt(i);
        if (
            !(
                (x1 >= "0" && x1 <= "9") ||
                (x1 >= "a" && x1 <= "z") ||
                (x1 >= "A" && x1 <= "Z") ||
                x1 == "-" ||
                x1 == "_"
            )
        ) {
            return false;
        }
    }
    return true;
}

export function isHexColor(x: any): boolean {
    if (typeof x != "string") {
        return false;
    }
    if (x.length != 7 && x.length != 4) {
        return false;
    }
    if (x.charAt(0) != "#") {
        return false;
    }
    for (let i = 1; i < x.length; i++) {
        const x1 = x.charAt(i);
        if (!((x1 >= "0" && x1 <= "9") || (x1 >= "a" && x1 <= "f") || (x1 >= "A" && x1 <= "F"))) {
            return false;
        }
    }
    return true;
}
