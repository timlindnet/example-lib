function ButtonRed(theme) {
  return {
    '.btn-red': {
      backgroundColor: '#e3342f',
      '&:hover': {
        backgroundColor: '#cc1f1a',
      },
    },
  };
}

function ButtonBlue(theme) {
  return {
    '.btn-blue': {
      backgroundColor: '#3490dc',
      '&:hover': {
        backgroundColor: '#2779bd',
      },
    },
  };
}

module.exports = Button = (theme) => ({
  '.btn': {
    '@apply py-[.5rem] px-[1rem]': {},
    background: theme('colors.gray.600'),
    borderRadius: '.25rem',
    fontWeight: '600',
  },
  ...ButtonRed(theme),
  ...ButtonBlue(theme),
});
