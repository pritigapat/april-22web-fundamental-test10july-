fetch ('https://fakestoreapi.com/products').then((data) => {
  return data.json();

}).then((completedata) =>{
//console.log(completedata);
//document.getElementById(`root`).innerHTML=completedata;
let data1="";
completedata.map((values)=>{
  data1=` <div class="d2">
  <h3 style="margin: 0; " >Leanne graham</h3>
  <h5 style="margin: 0">sincere@april.biz</h5>
  <h4 style="margin: 0; ">Gwenborought</h4>
  <h5 style="margin-top: 0;">hildgard.org</h5>
  <button >FETCH DATA</button>
</div>`
})
document.getElementById(cards).innerHTML=data1;
}).catch((err)=>{
  console.log(err);
})
