export function BtnList(props,tipo) {
    let {id,name}=props
  return  `<li><a class="dropdown-item" href="#" id="${id}" name="${name}" data-tipo="${tipo}">${name}</a></li>`;
}
 