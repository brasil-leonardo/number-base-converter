const base_selectors = document.getElementsByName("base-selector")

// const binary_selector = document.getElementById("binary")
// const octal_selector = document.getElementById("octal")
// const decimal_selector = document.getElementById("decimal")
// const hexadecimal_selector = document.getElementById("hexadecimal")

const input_fields = document.getElementsByName("input-field")

const binary_field = document.getElementById("binary-field")
const octal_field = document.getElementById("octal-field")
const decimal_field = document.getElementById("decimal-field")
const hexadecimal_field = document.getElementById("hexadecimal-field")

for (const base_selector of base_selectors) {
    base_selector.addEventListener("input", updateBaseSelected)
}

function updateBaseSelected(e) {
    const base_selected_id = e.target.id
    for (const input_field of input_fields) {
        const input_field_id = input_field.id.replace("-field", "")
        input_field.disabled = !(base_selected_id === input_field_id)
    }
}

// -- Bad method to add listeners in radio input --

// binary_selector.addEventListener("input", () => {
//     binary_field.disabled = false
//     octal_field.disabled = true
//     decimal_field.disabled = true
//     hexadecimal_field.disabled = true
// })

// octal_selector.addEventListener("input", () => {
//     binary_field.disabled = true
//     octal_field.disabled = false
//     decimal_field.disabled = true
//     hexadecimal_field.disabled = true
// })

// decimal_selector.addEventListener("input", () => {
//     binary_field.disabled = true
//     octal_field.disabled = true
//     decimal_field.disabled = false
//     hexadecimal_field.disabled = true
// })

// hexadecimal_selector.addEventListener("input", () => {
//     binary_field.disabled = true
//     octal_field.disabled = true
//     decimal_field.disabled = true
//     hexadecimal_field.disabled = false
// })

for (const input_field of input_fields) {
    input_field.addEventListener("input", updateAllInputFields)
}

function updateAllInputFields(e) {
    const input_field_id = e.target.id.replace("-field", "")
    const input_field_value = e.target.value
    switch (input_field_id) {
        case "binary":
            convertAllInputFieldsValue(2, input_field_value)
            break;
        case "octal":
            convertAllInputFieldsValue(8, input_field_value)
            break;
        case "decimal":
            convertAllInputFieldsValue(10, input_field_value)
            break;
        case "hexadecimal":
            convertAllInputFieldsValue(16, input_field_value)
            break;
    }
}

function convertAllInputFieldsValue(current_base, number) {
    binary_field.value = convertNumberBase(current_base, 2, number)
    octal_field.value = convertNumberBase(current_base, 8, number)
    decimal_field.value = convertNumberBase(current_base, 10, number)
    hexadecimal_field.value = convertNumberBase(current_base, 16, number)
}

function convertNumberBase(current_base, expected_base, number) {
    let converted_number;
    converted_number = parseInt(number, current_base)
    converted_number = converted_number.toString(expected_base)
    return converted_number    
}