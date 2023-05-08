

export function cardPopulares(){
    const $card= document.createElement('div')
    $card.classList.add("d-flex","justify-content-center")
    $card.id="tendecias"
    
    $card.innerHTML=`
    <img src="" alt="" width="120px" class="py-2 m-2">
    `   

    return $card
}