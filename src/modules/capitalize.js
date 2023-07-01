const capitalize = (string) => {
    const stringOld = string.slice(1);
    const stringNew = string.charAt(0).toUpperCase() + stringOld;
  
    return stringNew;
  };
  
  export { capitalize };