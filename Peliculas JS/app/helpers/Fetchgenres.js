export async function Ajax(tipo,props){
    let {url,cbSuccess}=props;
    await  fetch(url)
.then((res) => (res.ok ? res.json() : Promise.reject(res)))
.then((json) => {
  const content=json.genres
  cbSuccess(content,tipo)} )
.catch((err) => {
  let message = err.statusText || "Ocurrio un error";
  document.getElementById("main").innerHTML = `<div class="error"><p>Error ${err.status} :${message}</p></div>`;
  console.log(err);
});
}

