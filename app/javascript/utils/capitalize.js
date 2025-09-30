export const capitalize = (string) => {
  return string?.charAt(0).toUpperCase() + string.slice(1);
}

export const capitalizeFirstChar = (string) => {
    return string?.split(' ').map(n => n[0]).slice(0,2).join('').toUpperCase()
}
