"use strict";(self.webpackChunkpantau_dashboard=self.webpackChunkpantau_dashboard||[]).push([[8715],{8715:(P,u,i)=>{i.r(u),i.d(u,{FaskesPageModule:()=>C});var f=i(8583),p=i(665),o=i(2859),m=i(3955),c=i(4762),g=i(4742),h=i(5946),e=i(3018),k=i(1628),Z=i(2005);function F(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"ion-item"),e.TgZ(1,"ion-label"),e._uU(2),e.qZA(),e.TgZ(3,"ion-label"),e._uU(4),e.qZA(),e.TgZ(5,"ion-label"),e._uU(6),e.qZA(),e.TgZ(7,"ion-label"),e._uU(8),e.qZA(),e.TgZ(9,"ion-label"),e._uU(10),e.qZA(),e.TgZ(11,"ion-button",1),e.NdJ("click",function(){const r=e.CHM(t).$implicit;return e.oxw().editFaskes(r)}),e._uU(12,"Edit"),e.qZA(),e.TgZ(13,"ion-button",5),e.NdJ("click",function(){const r=e.CHM(t).$implicit;return e.oxw().deleteFaskes(r)}),e._uU(14,"Delete"),e.qZA(),e.qZA()}if(2&s){const t=l.$implicit,a=l.index;e.xp6(2),e.AsE("",a+1,". ",t.nama,""),e.xp6(2),e.Oqu(t.phone),e.xp6(2),e.Oqu(t.alamat),e.xp6(2),e.Oqu(t.latitude),e.xp6(2),e.Oqu(t.longitude)}}const T=[{path:"",component:(()=>{class s{constructor(t,a,n,r,d){this.storage=t,this.loadingController=a,this.modalController=n,this.firestore=r,this.toastController=d}ngOnInit(){this.loadData()}loadData(){return(0,c.__awaiter)(this,void 0,void 0,function*(){var t=yield g.Z.firestore().collection("faskes").get();t.empty?this.faskes=[]:(this.faskes=[],t.forEach(a=>{var n=a.data();n.id=a.id,this.faskes.push(n)}),this.tmpfaskes=this.faskes)})}addForm(){return(0,c.__awaiter)(this,void 0,void 0,function*(){(yield this.modalController.create({component:h.B,swipeToClose:!0,backdropDismiss:!1,componentProps:{onGoBack:()=>{this.loadData()}}})).present()})}deleteFaskes(t){g.Z.firestore().collection("faskes").doc(t.id).delete().then(()=>(0,c.__awaiter)(this,void 0,void 0,function*(){(yield this.toastController.create({message:"Fasilitas kesehatan berhasil dihapus",duration:3e3,color:"success"})).present(),setTimeout(()=>{this.loadData()},500)})),this.loadData()}editFaskes(t){return(0,c.__awaiter)(this,void 0,void 0,function*(){yield(yield this.modalController.create({component:h.B,swipeToClose:!0,backdropDismiss:!1,componentProps:{onGoBack:()=>{this.loadData()},data:t,isEdit:!0}})).present()})}search(t){const a=t.detail.value;this.faskes=this.tmpfaskes,this.faskes=""==a?this.tmpfaskes:this.faskes.filter(n=>n.nama.toLowerCase().includes(a.toLowerCase())||n.alamat.toLowerCase().includes(a.toLowerCase()))}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(k.K),e.Y36(o.HT),e.Y36(o.IN),e.Y36(Z.ST),e.Y36(o.yF))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-faskes"]],decls:11,vars:1,consts:[["slot","end"],["fill","clear","color","primary",3,"click"],["placeholder","Search",3,"ionChange"],[1,"ion-padding"],[4,"ngFor","ngForOf"],["fill","clear","color","danger",3,"click"]],template:function(t,a){1&t&&(e.TgZ(0,"ion-header"),e.TgZ(1,"ion-toolbar"),e.TgZ(2,"ion-title"),e._uU(3,"Fasilitas Kesehatan"),e.qZA(),e.TgZ(4,"ion-buttons",0),e.TgZ(5,"ion-button",1),e.NdJ("click",function(){return a.addForm()}),e._uU(6,"Tambah"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(7,"ion-searchbar",2),e.NdJ("ionChange",function(r){return a.search(r)}),e.qZA(),e.qZA(),e.TgZ(8,"ion-content",3),e.TgZ(9,"ion-list"),e.YNc(10,F,15,6,"ion-item",4),e.qZA(),e.qZA()),2&t&&(e.xp6(10),e.Q6J("ngForOf",a.faskes))},directives:[o.Gu,o.sr,o.wd,o.Sm,o.YG,o.VI,o.j9,o.W2,o.q_,f.sg,o.Ie,o.Q$],styles:[""]}),s})()}];let v=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[[m.Bz.forChild(T)],m.Bz]}),s})(),C=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[[f.ez,p.u5,o.Pc,v]]}),s})()}}]);