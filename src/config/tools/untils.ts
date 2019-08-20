export const filters = (txt:string) : string[] => {
  let r = /(\#)(.*?)[\r]/g
  let reg = txt.match(r)
  return reg
}