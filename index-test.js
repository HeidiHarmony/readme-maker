const generateReadme = require('./index');

test('generates a README with the correct title', () => {
  const input = {
    title: 'My Project',
    // other input properties
  };

  const expectedOutput = `# My Project\n\n...`;

  const actualOutput = generateReadme(input);

  expect(actualOutput).toEqual(expectedOutput);
});