export function renderListWithTemplate(templateFn, parentElement, list, position = "afterbegin", clear = false) {
  if (clear) parentElement.innerHTML = "";  
  const htmlStrings = list.map(templateFn).join('');
  parentElement.insertAdjacentHTML(position, htmlStrings);
}
