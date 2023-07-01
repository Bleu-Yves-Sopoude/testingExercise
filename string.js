const stringLength = (string) => {
    if (string.length < 1 || string.length > 10) {
      throw new Error('String length is not appropriate. It must be between 1 and 10 characters.');
    }
  
    return string.length;
  };
  
  const reverseString = (string) => {
    return string.split('').reverse().join('');
  };
  
  export { stringLength, reverseString };

  