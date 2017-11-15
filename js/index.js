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
		oPerson.data('x',this.nowJson.person.x);
		oPerson.data('y',this.nowJson.person.y);
		this.oParent.append(oPerson);
		this.bindPerson(oPerson); 
	},
	bindPerson : function(oPerson){
		$(document).keydown($.proxy(function(ev){
			switch(ev.which){
				case 37: //左
					oPerson.css('backgroundPosition','-150px 0');
					this.runPerson(oPerson,{x:-1});
					break;
				case 38://上
					oPerson.css('backgroundPosition','0px 0');
					this.runPerson(oPerson,{y:-1});
					break;
				case 39://右
					oPerson.css('backgroundPosition','-50px 0');
					this.runPerson(oPerson,{x:1});
					break;
				case 40://下
					oPerson.css('backgroundPosition','-100px 0');
					this.runPerson(oPerson,{y:1});
					break;
			}
		},this));
	},
	runPerson : function(oPerson,opt){//人物运动
		var setpX = opt.x || 0;
		var setpY = opt.y || 0;
		if(this.nowJson.map[(oPerson.data('y')+setpY) * Math.sqrt(this.nowJson.map.length) + (oPerson.data('x') + setpX)] !=2){
			oPerson.data('x',oPerson.data('x')+setpX);
			oPerson.data('y',oPerson.data('y')+setpY);
			oPerson.css('left',oPerson.data('x')*50);
			oPerson.css('top',oPerson.data('y')*50);
		}
	}
}
