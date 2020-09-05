let enemycou = document.getElementById('enemycou');
let enemySec = document.getElementById('enemySec');
let playerImg = document.getElementById('playerImg');
let enemyImg = document.getElementById('enemyImg');
let enemySt2 = document.getElementById('enemySt2');
let enemySt4 = document.getElementById('enemySt4');
let right = document.getElementById('right');
let left = document.getElementById('left');
let playerSt1 = document.getElementById('playerSt1');
let enemySt1 = document.getElementById('enemySt1');
let plySt2 = document.getElementById('plySt2');
let playerSt3 = document.getElementById('playerSt3');
let enemySt3 = document.getElementById('enemySt3');
let enemySt0 = document.getElementById('enemySt0');
let  = document.getElementById('');
let  = document.getElementById('');
let  = document.getElementById('');

let plev=1;
let enelev=1;
let plpow=plev*5;
let enepow=enelev*3;
let plhp=plev*100;
let enehp=enelev*50;
let tasoitya=0;
let zonelev=1;
let eneno=zonelev*3;
let enenono=eneno;
let keiken=0;
let atcou=10;
let abc=0;

function ahokus(){
	enehp=enehp-plpow;
	enemySt2.textContent="HP:"+enehp;
	if (enehp<=0){
		enehp=enelev*50;
		tasoitya++;
		enemySt4.textContent="倒した部隊数:"+tasoitya;
		enenono=enenono-1;
		keiken++;
		if (keiken=10){
			keiken=0;
			plev++;
			playerSt1.textContent="レベル:"+plev;
			let plpow=plev*5;
            let plhp=plev*100;
            plySt2.textContent="HP:"+plhp;
            playerSt3.textContent="攻撃力"+plpow;

		}
		if (enenono<=0){
			zonelev++;
			eneno=zonelev*3;
			enenono=eneno;
			enelev=zonelev;
			enepow=enelev*3;
            enehp=enelev*50;
            enemySt1.textContent="レベル:"+enelev;
            enemySt3.textContent="攻撃力:"+enepow;
            if (zonelev>10){
            	enemyImg.src="img/lastbos.jpg";
            	enemycou.textContent="ラスボスっぽいやつ";
            	enemySt1.textContent="レベル:???";
            	enemySt2.textContent="HP:999999999999999999999999999999999999999999999999999999999999999999999999999999999";
            	enemySt3.textContent="攻撃力???";
            	enemySt0.textContent="ラスボスっぽいやつ";
            	enepow=0;
                enehp=999999999999999999999999999999999999999999999999999999999999999999999999999999999;
                zonelev=114514;
                let abc=1;
            }

		}
		enemycou.textContent="残り部隊数"+enenono;
	}
}

function nextlev(){
	zonelev++;
	eneno=zonelev*3;
	enenono=eneno;
	enemycou.textContent="残り部隊数"+enenono;
	enelev=zonelev;
	enepow=enelev*3;
    enehp=enelev*50;
    enemySt1.textContent="レベル:"+enelev;
    enemySt1.textContent="レベル:"+enelev;
    enemySt3.textContent="攻撃力:"+enepow;
    if (zonelev=10){
    	enemyImg.src="img/lastbos.jpg";
        enemySt1.textContent="レベル:???";
        enemySt2.textContent="HP:???";
        enemySt3.textContent="攻撃力???";
        enemySt0.textContent="ラスボスっぽいやつ";
        enepow=0;
        enehp=999999999999999999999999999999999999999999999999999999999999999999999999999999999;
        zonelev=114514;
        let abc=1;

    }

}
function lowlev(){
	zonelev=zonelev-1;
	eneno=zonelev*3;
	enenono=eneno;
	enemycou.textContent="残り部隊数"+enenono;
	enelev=zonelev;
	enepow=enelev*3;
    enehp=enelev*50;
    enemySt1.textContent="レベル:"+enelev;
    enemySt1.textContent="レベル:"+enelev;
    enemySt3.textContent="攻撃力:"+enepow;
    if (zonelev<=0){
    	enemycou.textContent="Game Over";
    }
}

function eneat(){
	atcou=atcou-1;
	enemySec.textContent="敵部隊の攻撃まで"+atcou;
	if (atcou<=0) {
		atcou=10;
	}

}

function enderaaaaa(){
	if (abc=1) {
		enemycou.textContent="clear";
		enemyImg.src="img/clear.jpg";
	}
}

playerImg.addEventListener("click",enderaaaaa);
playerImg.addEventListener("click",eneat);
playerImg.addEventListener("click",ahokus);
right.addEventListener("click",nextlev);
left.addEventListener("click",lowlev);