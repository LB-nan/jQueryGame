$(function(){
	Game.init($('#div1')); // game runing..
})
var Game = {
	gk:[//关卡的数据
		{ 
			map:[
				1,1,2,2,2,2,1,1,
				1,1,2,3,3,2,1,1,
				1,2,2,4,3,2,2,1,
				1,2,4,4,4,3,2,1,
				2,2,4,4,4,4,2,2,
				2,4,4,2,4,4,4,2,
				2,4,4,4,4,4,4,2,
				2,2,2,2,2,2,2,2
			],
			box:[
				{x:3,y:4},
				{x:4,y:3},
				{x:4,y:5},
				{x:5,y:5}
			],
			person:{x:3,y:6}
		}
	],	
	init:function(oParent){//初始化
		this.oParent = oParent;
		this.createMap(0);
	},
	createMap : function(iNow){ //创建地图
		this.nowJson = this.gk[iNow];
		this.oParent.css('width',Math.sqrt(this.nowJson.map.length)*50);
		$.each(this.nowJson.map,$.proxy(function(i,elem){
			this.oParent.append('<div class="pos'+elem+'"></div>');
		},this));
		this.createBox();
		this.createPerson();
	},
	createBox : function(){//创建箱子
		$.each(this.nowJson.box,$.proxy(function(i,elem){
			var oBox = $('<div class="box"></div>');
			oBox.css('left',elem.x * 50);
			oBox.css('top',elem.y * 50);
			this.oParent.append(oBox);
		},this));
	},
	createPerson : function(){ //创建人物
		var oPerson = $('<div class="person"></div>');
		oPerson.css('left',this.nowJson.person.x * 50);
		oPerson.css('top',this.nowJson.person.y * 50);
		this.oParent.append(oPerson);
		this.bindPerson(oPerson); 
	},
	bindPerson : function(op){
		$(document).keydown(function(ev){
			switch(ev.which){
				case 37: //左
					op.css('backgroundPosition','-150px 0');
					break;
				case 38://上
					op.css('backgroundPosition','0px 0');
					break;
				case 39://右
					op.css('backgroundPosition','-50px 0');
					break;
				case 40://下
					op.css('backgroundPosition','-100px 0');
					break;
			}
		});
	}
}
