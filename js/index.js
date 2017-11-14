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
			]
		}
	],	
	init:function(oParent){//初始化
		this.oParent = oParent;
		this.createMap(0);
	},
	createMap : function(iNow){
		this.nowJson = this.gk[iNow];
		this.oParent.css('width',Math.sqrt(this.nowJson.map.length)*50);
		$.each(this.nowJson.map,$.proxy(function(i,elem){
			this.oParent.append('<div class="pos'+elem+'"></div>');
		},this));
	}
}
