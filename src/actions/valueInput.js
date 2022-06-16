export const handleInputValue= (value) => {
    return {
        type: "valueChange",
        payload: [value]
    }
}