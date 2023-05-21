describe('Anmelde-Test', () => {
  it('Sollte einen Benutzer anmelden', () => {
    const usernameInput = $('input[name="username-reg"]');
    const passwordInput = $('input[name="password-reg"]');
    const submitButton = $('button[type="submit"]');

    usernameInput.value = 'Test3';
    passwordInput.value = 'jfhsjfhdsfjskljfssajdfnG3';
    submitButton.click();

    const content = $('.content');
    expect(content).not.toBeNull();
  });
});

describe('Dropdown-Test', () => {
  it('Sollte content im Dropdown haben', () => {
    const dropdown = $('.dropdown button');

    dropdown.click();

    const optionCheck = $('.dropdown-content');

    expect(optionCheck).not.toBeNull();

    dropdown.click();
  });
});
