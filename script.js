//your JS code here. If required.

function removeColor() {
            const selectElement = document.getElementById('colorSelect'); // Get the select element
            const selectedOption = selectElement.options[selectElement.selectedIndex]; // Get the selected option

            // Remove the selected option from the dropdown list
            selectElement.removeChild(selectedOption);
        }