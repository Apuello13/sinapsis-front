"use strict";(self.webpackChunksinapsis_front=self.webpackChunksinapsis_front||[]).push([[939],{9939:(R,_,c)=>{c.r(_),c.d(_,{AdminModule:()=>$});var t=c(4893),y=c(6360),b=c(508);const x=["*",[["mat-card-footer"]]],A=["*","mat-card-footer"];let Z=(()=>{class a{constructor(e){this._animationMode=e}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(y.Qb,8))},a.\u0275cmp=t.Xpm({type:a,selectors:[["mat-card"]],hostAttrs:[1,"mat-card","mat-focus-indicator"],hostVars:2,hostBindings:function(e,o){2&e&&t.ekj("_mat-animation-noopable","NoopAnimations"===o._animationMode)},exportAs:["matCard"],ngContentSelectors:A,decls:2,vars:0,template:function(e,o){1&e&&(t.F$t(x),t.Hsn(0),t.Hsn(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px;display:block;overflow:hidden}.mat-card-image img{width:100%}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions:not(.mat-card-actions-align-end) .mat-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-raised-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-actions-align-end .mat-button:last-child,.mat-card-actions-align-end .mat-raised-button:last-child,.mat-card-actions-align-end .mat-stroked-button:last-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"],encapsulation:2,changeDetection:0}),a})(),T=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[b.BQ],b.BQ]}),a})();var k=c(4466),l=c(1780),F=c(655),n=c(2382),v=c(3560),f=c(537),C=c(6943),w=c(5226),h=c.n(w);let p=(()=>{class a{errorAlert(e){h().fire({title:"Ups",text:e,icon:"error",confirmButtonText:"Aceptar"})}confirmDelete(){return h().fire({title:"Un momento",text:"Desea eliminar este registro de manera permanente?",icon:"info",confirmButtonText:"Aceptar",cancelButtonText:"Cancelar",showCancelButton:!0})}successAlert(e){h().fire({title:"Exito",text:e,icon:"success",confirmButtonText:"Aceptar"})}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})(),g=(()=>{class a{constructor(){this.title="",this.buttonText="",this.click=new t.vpe}clickAction(){this.click.emit()}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-admin-header"]],inputs:{title:"title",buttonText:"buttonText"},outputs:{click:"click"},decls:5,vars:2,consts:[[1,"d-flex","justify-content-between","align-items-center"],[1,"btn","btn-primary",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"h5"),t._uU(2),t.qZA(),t.TgZ(3,"button",1),t.NdJ("click",function(){return o.clickAction()}),t._uU(4),t.qZA()()),2&e&&(t.xp6(2),t.Oqu(o.title),t.xp6(2),t.Oqu(o.buttonText))},encapsulation:2}),a})();var u=c(9808);function q(a,r){if(1&a&&(t.TgZ(0,"option",19),t._uU(1),t.qZA()),2&a){const e=r.$implicit;t.Q6J("value",e.idMark),t.xp6(1),t.hij(" ",e.name," ")}}function U(a,r){if(1&a&&(t.TgZ(0,"option",19),t._uU(1),t.qZA()),2&a){const e=r.$implicit;t.Q6J("value",e.idCategory),t.xp6(1),t.hij(" ",e.name," ")}}let D=(()=>{class a{constructor(e,o,i,d,m,z,E){this.fb=e,this._product=o,this._mark=i,this._category=d,this._alert=m,this.router=z,this.route=E,this.marks=[],this.categories=[],this.initForm(),this.getIdByUrl()}initForm(){this.productForm=this.fb.group({id:0,name:["",n.kI.required],description:"",idMark:["",n.kI.required],idCategory:["",n.kI.required],price:[0,n.kI.required],dateExpiry:["",n.kI.required],taxes:[0,n.kI.required]})}ngOnInit(){this.getMarks(),this.getCategories()}getMarks(){this._mark.getMarks().subscribe(e=>{this.marks=e},e=>console.log(e))}getCategories(){this._category.getCategories().subscribe(e=>{this.categories=e},e=>console.log(e))}getIdByUrl(){this.route.queryParams.subscribe(e=>{"{}"!==JSON.stringify(e)&&this.getProduct()})}getProduct(){const e=this._product.getProduct(),d=(0,F._T)(e,["category","typeProduct"]);this.productForm.setValue(d)}goProduct(){this.router.navigateByUrl("/admin/product")}save(){var e;const o=0===(null===(e=this.productForm.get("id"))||void 0===e?void 0:e.value);this._product[o?"saveProduct":"updateProduct"](this.productForm.value).subscribe(()=>{this._alert.successAlert(o?"Producto creado":"Producto actualizado"),this.goProduct()},i=>console.log(i))}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(n.qu),t.Y36(v.M),t.Y36(f.H),t.Y36(C.H),t.Y36(p),t.Y36(l.F0),t.Y36(l.gz))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-admin-form-product"]],decls:50,vars:6,consts:[[3,"title","buttonText","click"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-12"],[1,"form-group"],["type","text","formControlName","name",1,"form-control"],[1,"col-6"],["formControlName","idMark",1,"form-control"],["value",""],[3,"value",4,"ngFor","ngForOf"],["formControlName","idCategory",1,"form-control"],[1,"col-4"],["type","text","formControlName","price",1,"form-control"],["type","text","formControlName","taxes",1,"form-control"],["type","date","formControlName","dateExpiry",1,"form-control"],["type","text","formControlName","description",1,"form-control"],[1,"d-flex","align-items-center","justify-content-between"],["type","button","routerLink","/admin/product",1,"btn","btn-danger"],["type","submit",1,"btn","btn-primary",3,"disabled"],[3,"value"]],template:function(e,o){1&e&&(t.TgZ(0,"app-admin-header",0),t.NdJ("click",function(){return o.goProduct()}),t.qZA(),t.TgZ(1,"form",1),t.NdJ("ngSubmit",function(){return o.save()}),t.TgZ(2,"div",2)(3,"div",3)(4,"div",4)(5,"label"),t._uU(6,"Nombre"),t.qZA(),t._UZ(7,"input",5),t.qZA()(),t.TgZ(8,"div",6)(9,"div",4)(10,"label"),t._uU(11,"Marca"),t.qZA(),t.TgZ(12,"select",7)(13,"option",8),t._uU(14,"Seleccione..."),t.qZA(),t.YNc(15,q,2,2,"option",9),t.qZA()()(),t.TgZ(16,"div",6)(17,"div",4)(18,"label"),t._uU(19,"Categoria"),t.qZA(),t.TgZ(20,"select",10)(21,"option",8),t._uU(22,"Seleccione..."),t.qZA(),t.YNc(23,U,2,2,"option",9),t.qZA()()(),t.TgZ(24,"div",11)(25,"div",4)(26,"label"),t._uU(27,"Precio"),t.qZA(),t._UZ(28,"input",12),t.qZA()(),t.TgZ(29,"div",11)(30,"div",4)(31,"label"),t._uU(32,"Impuestos"),t.qZA(),t._UZ(33,"input",13),t.qZA()(),t.TgZ(34,"div",11)(35,"div",4)(36,"label"),t._uU(37,"Fecha de vencimiento"),t.qZA(),t._UZ(38,"input",14),t.qZA()(),t.TgZ(39,"div",3)(40,"div",4)(41,"label"),t._uU(42,"Descripci\xf3n"),t.qZA(),t._UZ(43,"textarea",15),t.qZA()(),t.TgZ(44,"div",3)(45,"div",16)(46,"button",17),t._uU(47," Cancelar "),t.qZA(),t.TgZ(48,"button",18),t._uU(49," Guardar "),t.qZA()()()()()),2&e&&(t.Q6J("title","Formulario de producto")("buttonText","Crear"),t.xp6(1),t.Q6J("formGroup",o.productForm),t.xp6(14),t.Q6J("ngForOf",o.marks),t.xp6(8),t.Q6J("ngForOf",o.categories),t.xp6(25),t.Q6J("disabled",o.productForm.invalid))},directives:[g,n._Y,n.JL,n.sg,n.Fj,n.JJ,n.u,n.EJ,n.YN,n.Kr,u.sg,l.rH],encapsulation:2}),a})();var s=c(2446);let I=(()=>{class a{constructor(e,o,i,d,m){this.dialogRef=e,this.category=o,this.fb=i,this._category=d,this._alert=m,this.initForm()}initForm(){this.categoryForm=this.fb.group({idCategory:this.category?this.category.idCategory:0,name:[this.category?this.category.name:"",n.kI.required]})}save(){this._category[this.category?"updateCategory":"saveCategory"](this.categoryForm.value).subscribe(()=>{this._alert.successAlert(this.category?"Categoria actualizada":"Categoria creada"),this.closeDialog()},e=>{console.log(e)})}closeDialog(){this.dialogRef.close()}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(s.so),t.Y36(s.WI),t.Y36(n.qu),t.Y36(C.H),t.Y36(p))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-admin-form-category"]],decls:15,vars:2,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[3,"formGroup"],[1,"row"],[1,"col-12"],[1,"form-group"],["type","text","formControlName","name",1,"form-control"],["mat-dialog-actions","",1,"d-flex","justify-content-between","align-items-center"],[1,"btn","btn-danger",3,"click"],["type","button",1,"btn","btn-primary",3,"disabled","click"]],template:function(e,o){1&e&&(t.TgZ(0,"h1",0),t._uU(1,"Formulario de categoria"),t.qZA(),t.TgZ(2,"div",1)(3,"form",2)(4,"div",3)(5,"div",4)(6,"div",5)(7,"label"),t._uU(8,"Nombre"),t.qZA(),t._UZ(9,"input",6),t.qZA()()()()(),t.TgZ(10,"div",7)(11,"button",8),t.NdJ("click",function(){return o.closeDialog()}),t._uU(12,"Cancelar"),t.qZA(),t.TgZ(13,"button",9),t.NdJ("click",function(){return o.save()}),t._uU(14,"Guardar"),t.qZA()()),2&e&&(t.xp6(3),t.Q6J("formGroup",o.categoryForm),t.xp6(10),t.Q6J("disabled",o.categoryForm.invalid))},directives:[s.uh,s.xY,n._Y,n.JL,n.sg,n.Fj,n.JJ,n.u,s.H8],encapsulation:2}),a})();function J(a,r){if(1&a){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td")(4,"i",3),t.NdJ("click",function(){const d=t.CHM(e).$implicit;return t.oxw().openDialog(d.idCategory)}),t.qZA(),t.TgZ(5,"i",4),t.NdJ("click",function(){const d=t.CHM(e).$implicit;return t.oxw().delete(d.idCategory)}),t.qZA()()()}if(2&a){const e=r.$implicit;t.xp6(2),t.Oqu(e.name)}}let S=(()=>{class a{constructor(e,o,i){this._category=e,this._alert=o,this.dialog=i,this.categories=[],this.columns=["Nombre","Acciones"]}ngOnInit(){this.getCategories()}getCategories(){this._category.getCategories().subscribe(e=>{this.categories=e},e=>{console.log(e)})}delete(e){this._alert.confirmDelete().then(o=>{o.isConfirmed&&this._category.deleteById(e).subscribe(()=>{this._alert.successAlert("Categoria eliminada con exito"),this.categories=this.categories.filter(i=>i.idCategory!==e)},i=>console.log(i))})}openDialog(e){const o=this.categories.find(d=>d.idCategory===e),i=new s.vA;i.width="300px",i.data=o,this.dialog.open(I,i).afterClosed().subscribe(()=>this.getCategories())}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(C.H),t.Y36(p),t.Y36(s.uw))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-admin-category"]],decls:10,vars:3,consts:[[3,"title","buttonText","click"],[1,"table","mt-4"],[4,"ngFor","ngForOf"],[1,"bx","bx-pencil","mr-3","text-primary","pointer",3,"click"],[1,"bx","bxs-trash-alt","text-danger","pointer",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"app-admin-header",0),t.NdJ("click",function(){return o.openDialog()}),t.qZA(),t.TgZ(1,"table",1)(2,"thead")(3,"tr")(4,"th"),t._uU(5,"Name"),t.qZA(),t.TgZ(6,"th"),t._uU(7,"Actions"),t.qZA()()(),t.TgZ(8,"tbody"),t.YNc(9,J,6,1,"tr",2),t.qZA()()),2&e&&(t.Q6J("title","Categorias")("buttonText","Crear"),t.xp6(9),t.Q6J("ngForOf",o.categories))},directives:[g,u.sg],encapsulation:2}),a})(),M=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-admin-home"]],decls:2,vars:0,template:function(e,o){1&e&&(t.TgZ(0,"p"),t._uU(1,"home "),t.qZA())},encapsulation:2}),a})();function N(a,r){if(1&a&&(t.TgZ(0,"li",8)(1,"a",9),t._UZ(2,"i"),t.TgZ(3,"span"),t._uU(4),t.qZA()()()),2&a){const e=r.$implicit;t.xp6(1),t.Q6J("routerLink","/admin"+e.path),t.xp6(1),t.Tol(e.icon),t.xp6(2),t.Oqu(e.name)}}let P=(()=>{class a{constructor(){this.menus=[]}ngOnInit(){this.loadMenus()}loadMenus(){this.menus=[{name:"Dashboard",icon:"bx bxs-dashboard",path:"/home"},{name:"Marcas",icon:"bx bxs-bookmarks",path:"/mark"},{name:"Categorias",icon:"bx bx-category",path:"/category"},{name:"Productos",icon:"bx bx-cart-add",path:"/product"}]}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-admin-sidebar"]],decls:11,vars:1,consts:[["id","accordionSidebar",1,"navbar-nav","bg-gradient-primary","sidebar","sidebar-dark","accordion"],["href","index.html",1,"sidebar-brand","d-flex","align-items-center","justify-content-center"],[1,"sidebar-brand-icon","rotate-n-15"],[1,"fas","fa-laugh-wink"],[1,"sidebar-brand-text","mx-3"],[1,"sidebar-divider","my-0"],["routerLinkActive","active-route","class","nav-item",4,"ngFor","ngForOf"],[1,"sidebar-divider"],["routerLinkActive","active-route",1,"nav-item"],[1,"nav-link",3,"routerLink"]],template:function(e,o){1&e&&(t.TgZ(0,"ul",0)(1,"a",1)(2,"div",2),t._UZ(3,"i",3),t.qZA(),t.TgZ(4,"div",4),t._uU(5,"Shope Admin"),t.TgZ(6,"sup"),t._uU(7,"0"),t.qZA()()(),t._UZ(8,"hr",5),t.YNc(9,N,5,4,"li",6),t._UZ(10,"hr",7),t.qZA()),2&e&&(t.xp6(9),t.Q6J("ngForOf",o.menus))},directives:[u.sg,l.Od,l.yS],encapsulation:2}),a})(),Y=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-admin-navbar"]],decls:27,vars:0,consts:[[1,"navbar","navbar-expand","navbar-light","bg-white","topbar","mb-4","static-top","shadow"],["id","sidebarToggleTop",1,"btn","btn-link","d-md-none","rounded-circle","mr-3"],[1,"fa","fa-bars"],[1,"navbar-nav","ml-auto"],[1,"nav-item","dropdown","no-arrow","d-sm-none"],["href","#","id","searchDropdown","role","button","data-toggle","dropdown","aria-haspopup","true","aria-expanded","false",1,"nav-link","dropdown-toggle"],[1,"fas","fa-search","fa-fw"],["aria-labelledby","searchDropdown",1,"dropdown-menu","dropdown-menu-right","p-3","shadow","animated--grow-in"],[1,"topbar-divider","d-none","d-sm-block"],[1,"nav-item","dropdown","no-arrow"],["href","#","id","userDropdown","role","button","data-toggle","dropdown","aria-haspopup","true","aria-expanded","false",1,"nav-link","dropdown-toggle"],[1,"mr-2","d-none","d-lg-inline","text-gray-600","small"],["aria-labelledby","userDropdown",1,"dropdown-menu","dropdown-menu-right","shadow","animated--grow-in"],["href","#",1,"dropdown-item"],[1,"fas","fa-user","fa-sm","fa-fw","mr-2","text-gray-400"],[1,"fas","fa-cogs","fa-sm","fa-fw","mr-2","text-gray-400"],[1,"fas","fa-list","fa-sm","fa-fw","mr-2","text-gray-400"],[1,"dropdown-divider"],["href","#","data-toggle","modal","data-target","#logoutModal",1,"dropdown-item"],[1,"fas","fa-sign-out-alt","fa-sm","fa-fw","mr-2","text-gray-400"]],template:function(e,o){1&e&&(t.TgZ(0,"nav",0)(1,"button",1),t._UZ(2,"i",2),t.qZA(),t.TgZ(3,"ul",3)(4,"li",4)(5,"a",5),t._UZ(6,"i",6),t.qZA(),t._UZ(7,"div",7),t.qZA(),t._UZ(8,"div",8),t.TgZ(9,"li",9)(10,"a",10)(11,"span",11),t._uU(12," Douglas McGee "),t.qZA()(),t.TgZ(13,"div",12)(14,"a",13),t._UZ(15,"i",14),t._uU(16," Profile "),t.qZA(),t.TgZ(17,"a",13),t._UZ(18,"i",15),t._uU(19," Settings "),t.qZA(),t.TgZ(20,"a",13),t._UZ(21,"i",16),t._uU(22," Activity Log "),t.qZA(),t._UZ(23,"div",17),t.TgZ(24,"a",18),t._UZ(25,"i",19),t._uU(26," Logout "),t.qZA()()()()())},encapsulation:2}),a})(),H=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-admin-layout"]],decls:9,vars:0,consts:[["id","wrapper"],["id","content-wrapper","className","d-flex flex-column"],["id","content"],["className","container-fluid"],[1,"container"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"app-admin-sidebar"),t.TgZ(2,"div",1)(3,"div",2),t._UZ(4,"app-admin-navbar"),t.TgZ(5,"div",3)(6,"div",4)(7,"mat-card"),t._UZ(8,"router-outlet"),t.qZA()()()()()())},directives:[P,Y,Z,l.lC],styles:['@import"https://fonts.googleapis.com/css2?family=Comforter+Brush&family=Montserrat:wght@100&family=Poppins:wght@100;400&display=swap";.active-route[_ngcontent-%COMP%]{color:#fff}']}),a})(),O=(()=>{class a{constructor(e,o,i,d,m){this.dialogRef=e,this.mark=o,this.fb=i,this._mark=d,this._alert=m,this.initForm()}initForm(){this.markForm=this.fb.group({idMark:this.mark?this.mark.idMark:0,name:[this.mark?this.mark.name:"",n.kI.required]})}closeDialog(){this.dialogRef.close()}save(){this._mark[this.mark?"updateMark":"saveMark"](this.markForm.value).subscribe(()=>{this._alert.successAlert(this.mark?"Marca actualiza":"Marca creada"),this.closeDialog()},e=>console.log(e))}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(s.so),t.Y36(s.WI),t.Y36(n.qu),t.Y36(f.H),t.Y36(p))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-admin-form-mark"]],decls:15,vars:2,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[3,"formGroup"],[1,"row"],[1,"col-12"],[1,"form-group"],["type","text","formControlName","name",1,"form-control"],["mat-dialog-actions","",1,"d-flex","justify-content-between","align-items-center"],[1,"btn","btn-danger",3,"click"],["type","button",1,"btn","btn-primary",3,"disabled","click"]],template:function(e,o){1&e&&(t.TgZ(0,"h1",0),t._uU(1,"Formulario de marca"),t.qZA(),t.TgZ(2,"div",1)(3,"form",2)(4,"div",3)(5,"div",4)(6,"div",5)(7,"label"),t._uU(8,"Nombre"),t.qZA(),t._UZ(9,"input",6),t.qZA()()()()(),t.TgZ(10,"div",7)(11,"button",8),t.NdJ("click",function(){return o.closeDialog()}),t._uU(12,"Cancelar"),t.qZA(),t.TgZ(13,"button",9),t.NdJ("click",function(){return o.save()}),t._uU(14," Guardar "),t.qZA()()),2&e&&(t.xp6(3),t.Q6J("formGroup",o.markForm),t.xp6(10),t.Q6J("disabled",o.markForm.invalid))},directives:[s.uh,s.xY,n._Y,n.JL,n.sg,n.Fj,n.JJ,n.u,s.H8],encapsulation:2}),a})();function j(a,r){if(1&a){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td")(4,"i",3),t.NdJ("click",function(){const d=t.CHM(e).$implicit;return t.oxw().openDialog(d.idMark)}),t.qZA(),t.TgZ(5,"i",4),t.NdJ("click",function(){const d=t.CHM(e).$implicit;return t.oxw().delete(d.idMark)}),t.qZA()()()}if(2&a){const e=r.$implicit;t.xp6(2),t.Oqu(e.name)}}const B=function(a){return{productId:a}};function Q(a,r){if(1&a){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.ALo(5,"currency"),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.ALo(8,"percent"),t.qZA(),t.TgZ(9,"td")(10,"i",3),t.NdJ("click",function(){const d=t.CHM(e).$implicit;return t.oxw().setProduct(d)}),t.qZA(),t.TgZ(11,"i",4),t.NdJ("click",function(){const d=t.CHM(e).$implicit;return t.oxw().delete(d.id)}),t.qZA()()()}if(2&a){const e=r.$implicit;t.xp6(2),t.Oqu(e.name),t.xp6(2),t.Oqu(t.lcZ(5,4,e.price)),t.xp6(3),t.Oqu(t.lcZ(8,6,e.taxes)),t.xp6(3),t.Q6J("queryParams",t.VKq(8,B,e.id))}}const X=[{path:"",component:H,children:[{path:"",redirectTo:"/home",pathMatch:"full"},{path:"home",component:M},{path:"category",component:S},{path:"mark",component:(()=>{class a{constructor(e,o,i){this._mark=e,this._alert=o,this.dialog=i,this.marks=[]}ngOnInit(){this.getMarks()}getMarks(){this._mark.getMarks().subscribe(e=>{this.marks=e},e=>{console.log(e)})}delete(e){this._alert.confirmDelete().then(o=>{o.isConfirmed&&this._mark.deleteById(e).subscribe(()=>{this._alert.successAlert("Marca elimina con exito"),this.marks=this.marks.filter(i=>i.idMark!==e)},i=>console.log(i))})}openDialog(e){const o=this.marks.find(d=>d.idMark===e),i=new s.vA;i.width="300px",i.data=o,this.dialog.open(O,i).afterClosed().subscribe(()=>this.getMarks())}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(f.H),t.Y36(p),t.Y36(s.uw))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-admin-mark"]],decls:10,vars:3,consts:[[3,"title","buttonText","click"],[1,"table","mt-4"],[4,"ngFor","ngForOf"],[1,"bx","bx-pencil","mr-3","text-primary","pointer",3,"click"],[1,"bx","bxs-trash-alt","text-danger","pointer",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"app-admin-header",0),t.NdJ("click",function(){return o.openDialog()}),t.qZA(),t.TgZ(1,"table",1)(2,"thead")(3,"tr")(4,"th"),t._uU(5,"Name"),t.qZA(),t.TgZ(6,"th"),t._uU(7,"Actions"),t.qZA()()(),t.TgZ(8,"tbody"),t.YNc(9,j,6,1,"tr",2),t.qZA()()),2&e&&(t.Q6J("title","Marcas")("buttonText","Crear"),t.xp6(9),t.Q6J("ngForOf",o.marks))},directives:[g,u.sg],encapsulation:2}),a})()},{path:"product",component:(()=>{class a{constructor(e,o,i){this._product=e,this._alert=o,this.router=i,this.products=[]}ngOnInit(){this.getProducts()}getProducts(){this._product.getProducts().subscribe(e=>{this.products=e},e=>console.log(e))}goForm(){this.router.navigateByUrl("/admin/product/form")}delete(e){this._alert.confirmDelete().then(o=>{o.isConfirmed&&this._product.deleteById(e).subscribe(()=>{this._alert.successAlert("Producto eliminado con exito"),this.products=this.products.filter(i=>i.id!==e)},i=>{console.log(i)})})}setProduct(e){this._product.setProduct(e)}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(v.M),t.Y36(p),t.Y36(l.F0))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-admin-product"]],decls:14,vars:3,consts:[[3,"title","buttonText","click"],[1,"table","mt-4"],[4,"ngFor","ngForOf"],["routerLink","/admin/product/form",1,"bx","bx-pencil","mr-3","text-primary","pointer",3,"queryParams","click"],[1,"bx","bxs-trash-alt","text-danger","pointer",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"app-admin-header",0),t.NdJ("click",function(){return o.goForm()}),t.qZA(),t.TgZ(1,"table",1)(2,"thead")(3,"tr")(4,"th"),t._uU(5,"Nombre"),t.qZA(),t.TgZ(6,"th"),t._uU(7,"Precio"),t.qZA(),t.TgZ(8,"th"),t._uU(9,"Impuesto"),t.qZA(),t.TgZ(10,"th"),t._uU(11,"Acciones"),t.qZA()()(),t.TgZ(12,"tbody"),t.YNc(13,Q,12,10,"tr",2),t.qZA()()),2&e&&(t.Q6J("title","Productos")("buttonText","Crear"),t.xp6(13),t.Q6J("ngForOf",o.products))},directives:[g,u.sg,l.rH],pipes:[u.H9,u.Zx],encapsulation:2}),a})()},{path:"product/form",component:D}]}];let G=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[l.Bz.forChild(X)],l.Bz]}),a})(),$=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a,bootstrap:[M]}),a.\u0275inj=t.cJS({imports:[[G,k.m,T]]}),a})()}}]);