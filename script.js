const selectors = document.getElementsByName("selector")
const fields = document.getElementsByName("field")

for (let selector of selectors) {
    selector.addEventListener("input", updateBaseSelected)
}

function updateBaseSelected(e) {
    let selector_id = e.target.id
    let expected_field_id = selector_id.replace("-selector", "-field")
    for (let field of fields) {
        if (field.id === expected_field_id) {
            field.disabled = false
        } else {
            field.disabled = true
        }
    }
}

for (let field of fields) {
    field.addEventListener("input", updateFields)
}

function updateFields(e) {
    let event_field_id = e.target.id
    let event_field_base;
    if (event_field_id === "binary-field") {
        event_field_base = 2
    } else if (event_field_id === "octal-field") {
        event_field_base = 8
    } else if (event_field_id === "decimal-field") {
        event_field_base = 10
    } else if (event_field_id === "hexadecimal-field") {
        event_field_base = 16
    }
    let event_field_value = e.target.value
    for (let field of fields) {
        if (field.id !== event_field_id) {
            switch (field.id) {
                case "binary-field":
                    field.value = convertNumberBase(event_field_base, 2, event_field_value)
                    break;
                case "octal-field":
                    field.value = convertNumberBase(event_field_base, 8, event_field_value)
                    break;
                case "decimal-field":
                    field.value = convertNumberBase(event_field_base, 10, event_field_value)
                    break;
                case "hexadecimal-field":
                    field.value = convertNumberBase(event_field_base, 16, event_field_value)
                    break;
            }
        }
    }
}

function convertNumberBase(current_base, expected_base, number) {
    if (!number || number.trim() === "")
        return ""

    let decimal_number = parseInt(number.trim(), current_base)

    if (!Number.isNaN(decimal_number))
        return decimal_number.toString(expected_base)

    return ""
}