/*----------------------------------------------------------------------------*/
/* IMPORTS                                                                    */
/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------*/
/* plan                                                                       */
/*----------------------------------------------------------------------------*/

const showPlan = (option) => {
  let classPlan = option.value + '-plan';

  let tables = document.getElementsByClassName('stundenplan-table');
  for (let i = 0; i < tables.length; i++) {
    tables[i].closest('.klasse').style.display = 'none';
  }

  let choosedTable = document.getElementById(classPlan);
  if (choosedTable) {
    choosedTable.closest('.klasse').style.display = 'table-row';
  }
};

const clearDropdown = () => {
  let dropdownContent = document.getElementById('dropdown-class');
  let inputField = dropdownContent.querySelector('.search-input-class');
  dropdownContent.innerHTML = '';
  dropdownContent.appendChild(inputField);
};

const toggleDropdown = () => {
  let dropdownContent = document.getElementById('dropdown');

  if (dropdownContent.style.display === 'block') {
    dropdownContent.style.display = 'none';
  } else {
    dropdownContent.style.display = 'block';
    fetchOptions('fach');
  }
};

const toggleDropdownClass = () => {
  let dropdownContent = document.getElementById('dropdown-class');

  if (dropdownContent.style.display === 'block') {
    dropdownContent.style.display = 'none';
  } else {
    dropdownContent.style.display = 'block';
    fetchOptions('class');
  }
};

const fetchOptions = (type) => {
  if (type === 'fach') {
    fetch('http://localhost:8080/getFachrichtungen')
      .then((response) => response.json())
      .then((data) => {
        let dropdownOptions = '';
        data.result.forEach((option) => {
          dropdownOptions +=
            '<option value="' +
            option.id +
            '" onclick="selectOption(this)">' +
            option.fachrichtung +
            '</option>';
        });
        document.getElementById('dropdown').innerHTML += dropdownOptions;
      })
      .catch((error) => console.error('Error:', error));
  } else {
    let selectedFachrichtung =
      document.getElementById('selected-option').innerText;
    fetch(`http://localhost:8080/getClass?fachrichtung=${selectedFachrichtung}`)
      .then((res) => res.json())
      .then((data) => {
        let dropdownOptions = '';
        data.result.forEach((option) => {
          dropdownOptions +=
            '<option value="' +
            option.id +
            '" onclick="showPlan(this)">' +
            option.class +
            '</option>';
        });
        document.getElementById('dropdown-class').innerHTML += dropdownOptions;
      })
      .catch((error) => console.log('Error:', error));
  }
};

const selectOption = (option) => {
  clearDropdown();

  fetch(`http://localhost:8080/getClass?fachrichtung=${option.innerHTML}`)
    .then((res) => res.json())
    .then((data) => {
      let dropdownOptions = '';
      data.result.forEach((option) => {
        dropdownOptions +=
          '<option value="' +
          option.id +
          '" onclick="showPlan(this)">' +
          option.class +
          '</option>';
      });
      document.getElementById('dropdown-class').innerHTML += dropdownOptions;
    })
    .catch((error) => console.log('Error:', error));

  let tables = document.getElementsByClassName('stundenplan-table');
  for (let i = 0; i < tables.length; i++) {
    tables[i].closest('.klasse').style.display = 'none';
  }

  let classDropdown = document.getElementById('class-dropdown');
  let selectedValue = option.value;
  let selectedLabel = option.innerHTML;
  if (selectedLabel) {
    classDropdown.style.display = 'block';
  }
  document.getElementById('selected-option').innerHTML = selectedLabel;
  toggleDropdown();
};

const filterOptions = () => {
  let input, filter, options, i;
  input = document.getElementsByClassName('search-input')[0];
  filter = input.value.toUpperCase();
  options = document.getElementById('dropdown').getElementsByTagName('option');

  for (i = 0; i < options.length; i++) {
    if (options[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
      options[i].style.display = '';
    } else {
      options[i].style.display = 'none';
    }
  }
};

window.addEventListener('DOMContentLoaded', function () {
  let tables = document.getElementsByClassName('stundenplan-table');
  for (let i = 0; i < tables.length; i++) {
    tables[i].closest('.klasse').style.display = 'none';
  }
});

/*----------------------------------------------------------------------------*/
/* EXPORTS                                                                    */
/*----------------------------------------------------------------------------*/
