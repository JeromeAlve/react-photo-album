//Italicize javascript string using unicode characters (convert from normal string)
const conv = {
    c: function (text, obj) {
        return text.replace(
            new RegExp(`[${obj.reduce((s, { r }) => (s += r), "")}]`, "g"),
            (e) => {
                const t = e.codePointAt(0);
                if (
                    (t >= 48 && t <= 57) ||
                    (t >= 65 && t <= 90) ||
                    (t >= 97 && t <= 122)
                ) {
                    return obj.reduce((s, { r, d }) => {
                        if (new RegExp(`[${r}]`).test(e))
                            s = String.fromCodePoint(e.codePointAt(0) + d)
                        return s
                    }, "")
                }
                return e
            }
        )
    },
    italic: function (text) {
        return this.c(text, [
            { r: "A-Z", d: 120263 },
            { r: "a-z", d: 120257 },
        ])
    }
}

export default conv