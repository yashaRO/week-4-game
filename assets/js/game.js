var charDataset = function() {
    return {
		bayonetta:{
        	health:100,
			attack:15,
			counter:10
		},
		bowser:{
			health:150,
			attack:8,
			counter:10
		},
		captain:{
			health:130,
			attack:12,
			counter:10
		},
		charizard:{
			health:120,
			attack:10,
			counter:10
		},
		cloud:{
			health:130,
			attack:17,
			counter:15
		},
		corrin:{
			health:110,
			attack:10,
			counter:10
		},
		crazy:{
			health:200,
			attack:7,
			counter:12
		},
		darkpit:{
			health:100,
			attack:10,
			counter:10
		},
		dedede:{
			health:120,
			attack:11,
			counter:7
		},
		diddy:{
			health:100,
			attack:10,
			counter:10
		},
		donkeykong:{
			health:200,
			attack:10,
			counter:20
		},
		drmario:{
			health:190,
			attack:10,
			counter:10
		},
		duckhunt:{
			health:50,
			attack:25,
			counter:25
		},
		falco:{
			health:120,
			attack:13,
			counter:10
		},
		fox:{
			health:100,
			attack:7,
			counter:16
		},
		gamewatch:{
			health:100,
			attack:10,
			counter:10
		},
		ganon:{
			health:140,
			attack:15,
			counter:10
		},
		greninja:{
			health:100,
			attack:10,
			counter:10
		},
		ike:{
			health:170,
			attack:10,
			counter:10
		},
		jigglypuff:{
			health:130,
			attack:8,
			counter:15
		},
		kirby:{
			health:130,
			attack:8,
			counter:15
		},
		koopajr:{
			health:160,
			attack:14,
			counter:10
		},
		link:{
			health:100,
			attack:18,
			counter:10
		},
		littlemac:{
			health:40,
			attack:30,
			counter:25
		},
		lucario:{
			health:100,
			attack:12,
			counter:10
		},
		lucas:{
			health:140,
			attack:12,
			counter:12
		},
		lucina:{
			health:120,
			attack:14,
			counter:16
		},
		luigi:{
			health:70,
			attack:17,
			counter:18
		},
		mario:{
			health:100,
			attack:16,
			counter:12
		},
		marth:{
			health:150,
			attack:17,
			counter:14
		},
		megaman:{
			health:100,
			attack:20,
			counter:12
		},
		metaknight:{
			health:120,
			attack:10,
			counter:10
		},
		mewtwo:{
			health:130,
			attack:18,
			counter:18
		},
		ness:{
			health:90,
			attack:20,
			counter:20
		},
		pacman:{
			health:140,
			attack:13,
			counter:16
		},
		palutena:{
			health:110,
			attack:10,
			counter:14
		},
		peach:{
			health:130,
			attack:12,
			counter:12
		},
		pikachu:{
			health:170,
			attack:15,
			counter:15
		},
		pikmin:{
			health:110,
			attack:13,
			counter:11
		},
		pit:{
			health:100,
			attack:15,
			counter:25
		},
		robin:{
			health:100,
			attack:18,
			counter:18
		},
		robot:{
			health:190,
			attack:12,
			counter:14
		},
		rosetta:{
			health:300,
			attack:5,
			counter:5
		},
		roy:{
			health:190,
			attack:19,
			counter:12
		},
		ryu:{
			health:150,
			attack:17,
			counter:15
		},
		samus:{
			health:90,
			attack:20,
			counter:15
		},
		sheik:{
			health:60,
			attack:25,
			counter:30
		},
		shulk:{
			health:160,
			attack:13,
			counter:17
		},
		sonic:{
			health:110,
			attack:17,
			counter:17
		},
		toonlink:{
			health:120,
			attack:15,
			counter:20
		},
		villager:{
			health:60,
			attack:25,
			counter:25
		},
		wario:{
			health:140,
			attack:17,
			counter:17
		},
		wiifit:{
			health:130,
			attack:10,
			counter:10
		},
		yoshi:{
			health:170,
			attack:9,
			counter:18
		},
		zelda:{
			health:170,
			attack:13,
			counter:15
		},
		zss:{
			health:120,
			attack:15,
			counter:20
		}
	}
}
var charData = charDataset()
var charSelect = enemySelect = rBonus = false;
var played = 0
var pChar, eChar, pBase, eBase;
$(document).ready(function() {
    $('.smashicon').mouseenter(function() {
        $(this).css('background-color','orange')
    })
    $('.smashicon').mouseleave(function() {
        $(this).css('background-color','lightblue')
    })
    $('.game').hide()
    $('.smashicon').click(function() {
        if (charSelect && !enemySelect) {
            var img = $('<img />', { 
                id: 'enemy',
                class:'play',
                src: this.src.replace('Icons','Portraits')
            });
            eChar = charData[this.src.slice(this.src.indexOf('Icons/') + 6, -4)]
			eBase = eChar.attack
            img.appendTo('.pField')
            enemySelect = true;
            $(this).hide()
			if (!played) {
            	$("<button class='game' id='butty' onclick='fight()'>Fight!</button><br><br>").prependTo('.battle')
				$('<div class="game" style="display:inline-block;"><h1 id="eHealth">' + eChar.health + '</h1></div>').appendTo('.battle')
			}
			else {
				$('#eHealth').html(eChar.health)
				$('#butty').html('Fight')
				$('#butty').attr('onclick','fight()')
			}
			played++;
        }
        if (!charSelect) {
            var img = $('<img />', { 
                id: 'player',
                class:'play',
                src: this.src.replace('Icons','Portraits')
            });
            pChar = charData[this.src.slice(this.src.indexOf('Icons/') + 6, -4)]
            console.log(this.src)
			pBase = pChar.attack;
            img.appendTo('.pField');
            charSelect = true;
            $(this).hide()
			$('<div class="game" style="display:inline-block;"><h1 id="pHealth">' + pChar.health + '</h1></div>').appendTo('.battle')
        }
    })
	
})
var fight = function() {
	if (played == 9) {
		alert('BOTH YOU AND THE ENEMY REGEN. THEY ALSO GET INCREASING POWER!')
		played++
	}
	if (played >= 20 && !rBonus) {
		eChar.counter *= played * 1.5
		eChar.health *= Math.round(played / 2);
		pChar.health = Math.floor(2.2 * pChar.health)
		pChar.attack *= 1.2
		$('#pHealth').html(pChar.health)
		$('#eHealth').html(eChar.health)
		rBonus = true
	}
	else if (played >= 9 && !rBonus) {
		eChar.counter *= Math.round(played / 3) - 1
		eChar.health *= Math.round(played / 4) - 1;
		pChar.health = Math.floor(pChar.health * 1.75)
		pChar.attack *= .8
		$('#pHealth').html(pChar.health)
		$('#eHealth').html(eChar.health)
		rBonus = true
	}
	eChar.health -= pChar.attack
	pChar.attack += pBase
	if(eChar.health < 0) {
		eChar.health = 0;
		$('#butty').html('Next')
		$('#butty').attr('onclick','next()')		
	}
	$('#eHealth').html(eChar.health)
	if(eChar.health > 0) {
		pChar.health -= eChar.counter
		if(pChar.health < 0) {
			pChar.health = 0;
			$('#butty').html('LOST')
			$('#butty').attr('onclick','reset()')
		}
		$('#pHealth').html(pChar.health)
	}
	else {return}
}
var next = function() {
	if(!$('.smashicon').is(":visible")) {
		alert('GG');
		return;
	}
	$('#enemy').remove()
	enemySelect = false;
	rBonus = false;
	
	
}
var reset = function() {
	charData = charDataset()
	$('#butty').remove()
	$('.battle br').remove()
	$('#eHealth').remove()
	$('#pHealth').remove()
	$('#enemy').remove()
	enemySelect = false
	$('#player').remove()
	charSelect = false;
	played = 0;
	$('.game').remove()
	$('.smashicon').show()
}