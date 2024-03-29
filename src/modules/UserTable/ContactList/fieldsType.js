const fields = {
  name: {
    name: 'name',
    type: 'text',
    required: true,
    label: 'Contact name',
    placeholder: 'Contact name',
    pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    title:
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
  },
  number: {
    name: 'number',
    type: 'tel',
    required: true,
    label: 'Contact number',
    placeholder: 'Contact number',
    pattern: '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',
    title:
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
  },
};

export default fields;
