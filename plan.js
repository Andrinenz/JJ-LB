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

window.addEventListener('DOMContentLoaded', function () {
  let tables = document.getElementsByClassName('stundenplan-table');
  for (let i = 0; i < tables.length; i++) {
    tables[i].closest('.klasse').style.display = 'none';
  }
});

/*----------------------------------------------------------------------------*/
/* EXPORTS                                                                    */
/*----------------------------------------------------------------------------*/
