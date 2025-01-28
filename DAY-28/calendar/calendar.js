let months ={jan:31,feb:28,mar:31,Apr:30,may:31,jun:30,jul:31,aug:31,sep:30,oct:31,Nov:30,dec:31}
let m = {jan:"January",feb:"February",mar:"March",Apr:"April",may:"May",jun:"June",jul:"July",aug:"August",sep:"September",oct:"October",Nov:"November",dec:"december"};
let cal = document.querySelector('.container');
for(let c in months) {
    let month = document.createElement('div');
    cal.appendChild(month)
    
    let date = new Date(new Date().getFullYear(),i,1)
   month.innerHTML = `
     <div>
            <input type="calendar" id="a1" value=${m[c]}>
        </div>
        <div>
            <input type="button" value="SUN" class="a2" style="color:rgb(246, 10, 25)">
            <input type="button" value="MON" class="a2">
            <input type="button" value="TUE" class="a2">
            <input type="button" value="WED" class="a2">
            <input type="button" value="THU" class="a2">
            <input type="button" value="FRI" class="a2">
            <input type="button" value="SAT" class="a2">
        </div>
        <div>
            <input type="button" value="" >
            <input type="button" value="" >
            <input type="button" value="" >
            <input type="button" value="" >
            <input type="button" value="" >
            <input type="button" value="1">
            <input type="button" value="2" >
        </div>
        <div>
            <input type="button" value="3" >
            <input type="button" value="4" >
            <input type="button" value="5">
            <input type="button" value="6" >
            <input type="button" value="7" >
            <input type="button" value="8">
            <input type="button" value="9" >
        </div>
        <div>
            <input type="button" value="10" >
            <input type="button" value="11" >
            <input type="button" value="12">
            <input type="button" value="13" >
            <input type="button" value="14" >
            <input type="button" value="15">
            <input type="button" value="16" >  
        </div>
        <div>
            <input type="button" value="17" > 
            <input type="button" value="18" >
            <input type="button" value="19">
            <input type="button" value="20" >
            <input type="button" value="21" >
            <input type="button" value="22">
            <input type="button" value="23" >
        </div>
        <div>
            <input type="button" value="24" >
            <input type="button" value="25" >
            <input type="button" value="26">
            <input type="button" value="27" >
            <input type="button" value="28">
            <input type="button" value="29" >
            <input type="button" value="30" >
        </div>
   `


}
console.log(months);