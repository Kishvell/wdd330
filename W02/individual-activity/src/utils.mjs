export function renderListWithTemplate(templateFn, parentElement, list, position = "afterbegin", clear = false) {
  if (clear) parentElement.innerHTML = ""; // Clears content if needed
  const htmlStrings = list.map(templateFn).join(""); // Convert data to HTML
  parentElement.insertAdjacentHTML(position, htmlStrings); // Insert dynamically
}
