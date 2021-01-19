var Pbf = require('pbf');
var fs = require('fs');
var VectorTile = require('vector-tile').VectorTile;

var data = fs.readFileSync('431024000000000.pbf');
var tile = new VectorTile(new Pbf(data));

var layerNames = Object.keys(tile.layers);
console.log("图层名称", layerNames);
if (layerNames.length > 0) {
    //获取其中一个图层的一个要素的geoJson格式;
	console.log("图元个数", tile.layers[layerNames[0]].length);
	console.log("图层符号ID", tile.layers[layerNames[0]].symbol_id);
	console.log("图层符号大小", tile.layers[layerNames[0]].symbol_size);
	for (var i = 0; i < tile.layers[layerNames[0]].length; ++i)
	{
		var orig = tile.layers[layerNames[0]].feature(i).toGeoJSON(0, 0, 1);
		console.log("geojson", orig);
		//查看坐标
		//console.log("部分坐标",orig.geometry.coordinates[0]);
	}
}