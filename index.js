async function loadTilesets() {
    try {
        // Load LOD1 Tileset and apply orange color style
        lod1Tileset = new Cesium.Cesium3DTileset({
            url: Cesium.IonResource.fromAssetId(2553919)
        });
        viewer.scene.primitives.add(lod1Tileset);
        lod1Tileset.style = new Cesium.Cesium3DTileStyle({
            color: "color('orange')",
        });
        lod1Tileset.show = false;

        // Load LOD2 Tileset and apply conditional color styling (red roofs, white elsewhere)
        lod2Tileset = new Cesium.Cesium3DTileset({
            url: Cesium.IonResource.fromAssetId(2581592)
        });
        viewer.scene.primitives.add(lod2Tileset);
        lod2Tileset.style = new Cesium.Cesium3DTileStyle({
            color: {
                conditions: [
                    ['${Geometr_3D} === "roof"', 'color("red")'],
                    ['true', 'color("white")'],
                ],
            },
        });
        lod2Tileset.show = false;

        // Load Roads Tileset and apply black color style
        roadsTileset = new Cesium.Cesium3DTileset({
            url: Cesium.IonResource.fromAssetId(2653314)
        });
        viewer.scene.primitives.add(roadsTileset);
        roadsTileset.style = new Cesium.Cesium3DTileStyle({
            color: "color('black')",
        });
        treesTileset.show = false;
        viewer.scene.primitives.add(roadsTileset);
        roadsTileset.style = new Cesium.Cesium3DTileStyle({
            color: "color('black')",
        });
        treesTileset.show = false;
        // Load Waterbody Tileset and apply blue color style
        waterbodyTileset = new Cesium.Cesium3DTileset({
            url: Cesium.IonResource.fromAssetId(2766942)
        });
        viewer.scene.primitives.add(waterbodyTileset);
        waterbodyTileset.style = new Cesium.Cesium3DTileStyle({
            color: "color('blue')",
        });
        waterbodyTileset.show = false;

    } catch (error) {
        console.error('Error loading tilesets:', error);
    }
}
