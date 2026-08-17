const base_selectors = document.getElementsByName("base-selector")
const input_fields = document.getElementsByName("input-fields")

for (let base_selector of base_selectors) {
    let base_selector_id = base_selector.id
    switch (base_selector.id) {
        case "binary-field":
            break;
        case "octal-field":
            break;
        case "decimal-field":
            break;
        case "hexadecimal-field":
            break;                                
    }
}

function convertNumberBase(current_base, expected_base, number) {
    let converted_number;
    switch (expected_base) {
        case 2:
            converted_number = parseInt(number, current_base)
            converted_number = converted_number.toString(2)
            return converted_number
        case 8:
            converted_number = parseInt(number, current_base)
            converted_number = converted_number.toString(8)
            return converted_number            
        case 10:
            converted_number = parseInt(number, current_base)
            converted_number = converted_number.toString(10)
            return converted_number            
        case 16:
            converted_number = parseInt(number, current_base)
            converted_number = converted_number.toString(16)
            return converted_number            
    }
}