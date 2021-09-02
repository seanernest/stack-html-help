var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AnimeSiteMap1YuruCampSeason2_1 = new ol.format.GeoJSON();
var features_AnimeSiteMap1YuruCampSeason2_1 = format_AnimeSiteMap1YuruCampSeason2_1.readFeatures(json_AnimeSiteMap1YuruCampSeason2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnimeSiteMap1YuruCampSeason2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnimeSiteMap1YuruCampSeason2_1.addFeatures(features_AnimeSiteMap1YuruCampSeason2_1);
var lyr_AnimeSiteMap1YuruCampSeason2_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AnimeSiteMap1YuruCampSeason2_1, 
                style: style_AnimeSiteMap1YuruCampSeason2_1,
                interactive: true,
                title: '<img src="styles/legend/AnimeSiteMap1YuruCampSeason2_1.png" /> Anime Site Map(1) Yuru Camp Season 2'
            });
var format_AnimeSiteMap1YuruCampSeason1_2 = new ol.format.GeoJSON();
var features_AnimeSiteMap1YuruCampSeason1_2 = format_AnimeSiteMap1YuruCampSeason1_2.readFeatures(json_AnimeSiteMap1YuruCampSeason1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnimeSiteMap1YuruCampSeason1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnimeSiteMap1YuruCampSeason1_2.addFeatures(features_AnimeSiteMap1YuruCampSeason1_2);
var lyr_AnimeSiteMap1YuruCampSeason1_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AnimeSiteMap1YuruCampSeason1_2, 
                style: style_AnimeSiteMap1YuruCampSeason1_2,
                interactive: true,
                title: '<img src="styles/legend/AnimeSiteMap1YuruCampSeason1_2.png" /> Anime Site Map(1) Yuru Camp Season 1'
            });
var format_AnimeSiteMap1HeyaCamp_3 = new ol.format.GeoJSON();
var features_AnimeSiteMap1HeyaCamp_3 = format_AnimeSiteMap1HeyaCamp_3.readFeatures(json_AnimeSiteMap1HeyaCamp_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnimeSiteMap1HeyaCamp_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnimeSiteMap1HeyaCamp_3.addFeatures(features_AnimeSiteMap1HeyaCamp_3);
var lyr_AnimeSiteMap1HeyaCamp_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AnimeSiteMap1HeyaCamp_3, 
                style: style_AnimeSiteMap1HeyaCamp_3,
                interactive: true,
                title: '<img src="styles/legend/AnimeSiteMap1HeyaCamp_3.png" /> Anime Site Map(1) Heya Camp'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_AnimeSiteMap1YuruCampSeason2_1.setVisible(true);lyr_AnimeSiteMap1YuruCampSeason1_2.setVisible(true);lyr_AnimeSiteMap1HeyaCamp_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_AnimeSiteMap1YuruCampSeason2_1,lyr_AnimeSiteMap1YuruCampSeason1_2,lyr_AnimeSiteMap1HeyaCamp_3];
lyr_AnimeSiteMap1YuruCampSeason2_1.set('fieldAliases', {'Name': 'Name', 'description': 'Description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnimeSiteMap1YuruCampSeason1_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnimeSiteMap1HeyaCamp_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnimeSiteMap1YuruCampSeason2_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_AnimeSiteMap1YuruCampSeason1_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_AnimeSiteMap1HeyaCamp_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_AnimeSiteMap1YuruCampSeason2_1.set('fieldLabels', {'Name': 'inline label', 'description': 'inline label', });
lyr_AnimeSiteMap1YuruCampSeason1_2.set('fieldLabels', {'Name': 'inline label', 'description': 'inline label', });
lyr_AnimeSiteMap1HeyaCamp_3.set('fieldLabels', {'Name': 'inline label', 'description': 'inline label', });
lyr_AnimeSiteMap1HeyaCamp_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});