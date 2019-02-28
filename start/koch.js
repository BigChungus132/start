function koch(t,len,level){
if(level==1){tv.fd(len);}
else{
koch(tv,len/2,level-1);tv.lt(60);
koch(tv,len/2,level-1);tv.lt(120);
koch(tv,len/2,level-1);tv.lt(60);
koch(tv,len/2,level-1);
}
}
function StriA(t,len,level){
	if(level==0){}
	else{
	tv.fd(len);StriA(t,len/2,level-1);tv.rt(120);
	tv.fd(len);StriA(t,len/2,level-1);tv.rt(120);
	tv.fd(len);StriA(t,len/2,level-1);tv.rt(120);
}
}
function nineSq(t,len,level){
	if(level==0){t.fd(len);}
	else{
	nineSq(tv,len/3,level-1);tv.lt(90);
	nineSq(tv,len/3,level-1);tv.rt(90);
	nineSq(tv,len/3,level-1);tv.lt(90);
	nineSq(tv,len/3,level-1);tv.rt(90);
	nineSq(tv,len/3,level-1);tv.lt(90);
	nineSq(tv,len/3,level-1);tv.rt(90);
	nineSq(tv,len/3,level-1);tv.lt(90);
	nineSq(tv,len/3,level-1);tv.rt(90);
	nineSq(tv,len/3,level-1);
}}