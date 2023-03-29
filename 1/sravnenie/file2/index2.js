var timer = function(name) {
    var start = new Date();
    return {
        stop: function() {
            var end  = new Date();
            var time = end.getTime() - start.getTime();
            console.log('Timer:', name, 'finished in', time, 'ms');
        }
    }
};

var getRandom = function (min, max) {
  return Math.random() * (max - min) + min;
};

var lastNames = ['SMITH','JOHNSON','WILLIAMS','JONES','BROWN','DAVIS','MILLER','WILSON','MOORE','TAYLOR','ANDERSON','THOMAS'];

var genLastName = function() {
    var index = Math.round(getRandom(0, lastNames.length - 1));
    return lastNames[index];
};

var sex = ["Male", "Female"];

var genSex = function() {
    var index = Math.round(getRandom(0, sex.length - 1));
    return sex[index];
};

var Person = function() {
	this.name = genLastName();
	this.age = Math.round(getRandom(0,100))
	this.sex = "Male"
};

var genPersons = function() {
for (var i = 0; i < 100000; i++)
	personSet.add(new Person());
};

var changeSex = function() {
	for (var key of personSet) {
		key.sex = genSex();
	}
};

var deleteMale = function() {
	for (var key of personSet) {
		if (key.sex === "Male") {
			personSet.delete(key)
		}
	}
};

var t = timer("Set");

var personSet = new Set();

genPersons();

changeSex();

deleteMale();

t.stop();

console.log("Done! There are " + personSet.size + " persons.")
/*Создание массива (125000)

var n = 125000;
var arr = Array.apply( null, Array( n ) ).map( ( x, i ) => i );
console.info( arr.length ); // 125000
1. Поиск индекса

Мы сравнили метод has для Set с Array indexOf:

Массив/ indexOf (0,281 мс) | Установить/ иметь (0,053 мс)

// Helpers
var checkArr = ( arr, item ) => arr.indexOf( item ) !== -1;
var checkSet = ( set, item ) => set.has( item );

// Vars
var set, result;

console.time( 'timeTest' );
result = checkArr( arr, 123123 );
console.timeEnd( 'timeTest' );

set = new Set( arr );

console.time( 'timeTest' );
checkSet( set, 123123 );
console.timeEnd( 'timeTest' );
2. Добавление нового элемента

Мы сравниваем методы add и push объектов Set и Array соответственно:

Массив/ push (1,612 мс) | Установить/ добавить (0,006 мс)

console.time( 'timeTest' );
arr.push( n + 1 );
console.timeEnd( 'timeTest' );

set = new Set( arr );

console.time( 'timeTest' );
set.add( n + 1 );
console.timeEnd( 'timeTest' );

console.info( arr.length ); // 125001
console.info( set.size ); // 125001
3. Удаление элемента

При удалении элементов мы должны иметь в виду, что Array и Set не запускаются при одинаковых условиях. У массива нет собственного метода, поэтому необходима внешняя функция.

Массив/ deleteFromArr (0,356 мс) | Установить/ удалить (0,019 мс)

var deleteFromArr = ( arr, item ) => {
    var i = arr.indexOf( item );
    i !== -1 && arr.splice( i, 1 );
};

console.time( 'timeTest' );
deleteFromArr( arr, 123123 );
console.timeEnd( 'timeTest' );

set = new Set( arr );

console.time( 'timeTest' );
set.delete( 123123 );
console.timeEnd( 'timeTest' );*/