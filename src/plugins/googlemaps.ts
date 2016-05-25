/**
 * ----- IMPORTANT NOTES -----
 *
 * - The current event listeners might not work. They might need an alternative implementation.
 * - Constructors of the "sub-objects" are not meant to be used. They are for ionic-native developer only.
 * - The plugin isn't fully tested and documented yet. Use at your own risk, and don't hesitate to ask questions.
 *
 * ---------------------------
 */

import {Cordova, Plugin} from './plugin';
import {Observable} from 'rxjs/Rx';
import {CordovaInstance} from './plugin';
/**
 * Created by Ibrahim on 3/29/2016.
 */
declare var plugin: any;
/**
 * @name Google Maps
 * @description This plugin uses the native Google Maps SDK
 * @usage
 * ```
 * import {GoogleMaps} from 'ionic-native';
 *
 * ...
 *
 * // somewhere in your component
 * let map = new GoogleMaps('elementID');
 *
 * map.onInit().subscribe(() => console.log("Map is ready!"));
 * ```
 */
@Plugin({
    pluginRef: 'plugin.google.maps.Map',
    plugin: 'cordova-plugin-googlemaps',
    repo: 'https://github.com/mapsplugin/cordova-plugin-googlemaps'
})
export class GoogleMap {

    private _objectInstance: any;

    /**
     * Checks if a map object has been created.
     * @return {Promise<GoogleMap>} returns a promise that resolves with the Map object (if it exists).
     */
    @Cordova()
    static isAvailable (): Promise<GoogleMap> {return; }

    constructor (elementId: string) {
        this._objectInstance = plugin.google.maps.Map.getMap(document.getElementById(elementId));
    }

    /**
     * Get notified via an Observable when the user clicks on the map. (Event: MAP_CLICK)
     */
    @Cordova({
        eventObservable: true,
        event: 'plugin.google.maps.event.MAP_CLICK'
    })
    static onMapClick (): Observable<GoogleMapsLatLng> {return; }

    /**
     * Get notified via an Observable when the user long-clicks on the map. (Event: MAP_LONG_CLICK)
     */
    @Cordova({
        eventObservable: true,
        event: 'plugin.google.maps.event.MAP_LONG_CLICK'
    })
    static onMapLongClick (): Observable<GoogleMapsLatLng> {return; }

    /**
     * Get notified via an Observable when the user clicks the `My Location` button. (Event: MY_LOCATION_BUTTON_CLICK)
     */
    @Cordova({
        eventObservable: true,
        event: 'plugin.google.maps.event.MY_LOCATION_BUTTON_CLICK'
    })
    static onMyLocationButtonClick (): Observable<any> {return; }

    /**
     * Get notified via an Observable when the user changes the view. (Event: CAMERA_CHANGE)
     */
    @Cordova({
        eventObservable: true,
        event: 'plugin.google.maps.event.CAMERA_CHANGE'
    })
    static onCameraChange (): Observable<any> {return; }

    /**
     * Get notified via an Observable when the view is on idle. (Event: CAMERA_IDLE)
     */
    @Cordova({
        eventObservable: true,
        event: 'plugin.google.maps.event.CAMERA_IDLE',
        platforms: ['iOS']
    })
    static onCameraIdle (): Observable<any> {return; }

    /**
     * Get notified via an Observable when the map is ready. (Event: MAP_READY)
     */
    @Cordova({
        eventObservable: true,
        event: 'plugin.google.maps.event.MAP_READY'
    })
    static onMapReady (): Observable<GoogleMap> {return; }

    /**
     * Get notified via an Observable when the map is loaded. (Event: MAP_LOADED)
     */
    @Cordova({
        eventObservable: true,
        event: 'plugin.google.maps.event.MAP_LOADED',
        platforms: ['Android']
    })
    static onMapLoaded (): Observable<GoogleMap> {return; }

    /**
     * Get notified via an Observable when the map will move. (Event: MAP_WILL_MOVE)
     */
    @Cordova({
        eventObservable: true,
        event: 'plugin.google.maps.event.MAP_WILL_MOVE',
        platforms: ['iOS']
    })
    static onMapWillMove (): Observable<any> {return; }

    /**
     * Get notified via an Observable when the user closes the map. (Event: MAP_CLOSE)
     */
    @Cordova({
        eventObservable: true,
        event: 'plugin.google.maps.event.MAP_CLOSE'
    })
    static onMapClose (): Observable<any> {return; }

    @CordovaInstance({
        sync: true
    })
    setDebuggable (isDebuggable: boolean): void {}

    @CordovaInstance({
        sync: true
    })
    setClickable (isClickable: boolean): void {}

    /**
     * Get the position of the camera
     */
    @CordovaInstance()
    getCameraPosition (): Promise<CameraPosition> {return; }

    /**
     * Get the location of the user
     */
    @CordovaInstance()
    getMyLocation (): Promise<MyLocation> {return; }

    /**
     * Get the visible region
     */
    @CordovaInstance()
    getVisibleRegion (): Promise<VisibleRegion> {return; }

    @CordovaInstance({
        sync: true
    })
    showDialog (): void { }

    @CordovaInstance({
        sync: true
    })
    closeDialog (): void { }

    @CordovaInstance()
    getLicenseInfo (): Promise<string> {return ;}

    @CordovaInstance({
        sync: true
    })
    setCenter (latLng: GoogleMapsLatLng): void { }

    @CordovaInstance({
        sync: true
    })
    setZoom (zoomLevel: number): void { }

    @CordovaInstance({
        sync: true
    })
    setMapTypeId (typeId: string): void { }

    @CordovaInstance({
        sync: true
    })
    setTilt (tiltLevel: number): void { }

    @CordovaInstance({
        sync: true
    })
    animateCamera (cameraPosition: CameraPosition): void { }

    @CordovaInstance({
        sync: true
    })
    moveCamera (cameraPosition: CameraPosition): void { }

    @CordovaInstance({
        sync: true
    })
    setMyLocationEnabled (enabled: boolean): void { }

    @CordovaInstance({
        sync: true
    })
    setIndoorEnabled (enabled: boolean): void { }

    @CordovaInstance({
        sync: true
    })
    setTrafficEnabled (enabled: boolean): void { }

    @CordovaInstance({
        sync: true
    })
    setCompassEnabled (enabled: boolean): void { }

    @CordovaInstance({
        sync: true
    })
    setAllGesturesEnabled (enabled: boolean): void { }

    addMarker (options: GoogleMapsMarkerOptions): GoogleMapsMarker {
        let objectInstance: any = this._objectInstance.addMarker(options);
        return new GoogleMapsMarker(objectInstance);
    }

    addCircle (options: GoogleMapsCircleOptions): GoogleMapsCircle {
        let objectInstance: any = this._objectInstance.addCircle(options);
        return new GoogleMapsCircle(objectInstance);
    }

    @CordovaInstance({
        sync: true
    })
    addPolygon (options: any): void { }

    @CordovaInstance({
        sync: true
    })
    addPolyline (options: any): void { }

    @CordovaInstance({
        sync: true
    })
    addTileOverlay (options: any): void { }

    @CordovaInstance({
        sync: true
    })
    addGroundOverlay (options: any): void { }

    @CordovaInstance({
        sync: true
    })
    setDiv (domNode: HTMLElement): void { }

    @CordovaInstance({
        sync: true
    })
    setVisible (visible: boolean): void { }

    @CordovaInstance({
        sync: true
    })
    setOptions (options: any): void { }

    @CordovaInstance({
        sync: true
    })
    setBackgroundColor (backgroundColor: string): void { }

    @CordovaInstance({
        sync: true
    })
    setPadding (top?: number, right?: number, bottom?: number, left?: number): void { }

    @CordovaInstance({
        sync: true
    })
    clear (): void { }

    @CordovaInstance({
        sync: true
    })
    refreshLayout (): void { }

    @CordovaInstance()
    fromLatLngToPoint (latLng: GoogleMapsLatLng, point: any): Promise<any> {return; }

    @CordovaInstance()
    fromPointToLatLng (point: any, latLng: GoogleMapsLatLng): Promise<GoogleMapsLatLng> {return; }

    @CordovaInstance()
    toDataURL (): Promise<any> {return; }

    @CordovaInstance({
        sync: true
    })
    remove (): void { }

    @CordovaInstance({
        sync: true
    })
    panBy (): void { }

}

export interface AnimateCameraOptions {
    target: string;
    tilt: number;
    zoom: number;
    bearing: number;
    duration: number;
}
export interface CameraPosition {
    target: {
        lat: string;
        lng: string;
    };
    zoom: number;
    tilt: number;
    bearing: number;
}
export interface MyLocation {
    latLng: {
        lat: string;
        lng: string;
    };
    speed: number;
    time: string;
    bearing: number;
}
export interface VisibleRegion {
    northeast: any;
    southwest: any;
}

export interface GoogleMapsMarkerOptions {
    icon: any;
    title: string;
    snippet: string;
    position: GoogleMapsLatLng;
    infoWindowAnchor: number[];
    draggable: boolean;
    flat: boolean;
    rotation: number;
    visible: boolean;
    styles: any;
    animation: string;
    zIndex: number;
}
export interface GoogleMapsMarkerIcon {
    url: string;
    size: {
        width: number;
        height: number;
    }
}
export class GoogleMapsMarker {

    constructor (private _objectInstance: any) { }

    @CordovaInstance({
        sync: true
    })
    isVisible (): boolean {return;}

    @CordovaInstance()
    setVisible (visible: boolean): void { }

    @CordovaInstance({
        sync: true
    })
    getHashCode (): string {return; }

    @CordovaInstance({
        sync: true
    })
    remove(): void { }

    @CordovaInstance({
        sync: true
    })
    setOpacity (alpha: number): void { }

    @CordovaInstance({
        sync: true
    })
    getOpacity(): number {return; }

    @CordovaInstance({
        sync: true
    })
    setZIndex(): void { }

    @CordovaInstance({
        sync: true
    })
    setIconAnchor(x: number, y: number): void { }

    @CordovaInstance({
        sync: true
    })
    setInfoWindowAnchor(x: number, y:number): void { }

    @CordovaInstance({
        sync: true
    })
    setDraggable(draggable: boolean): void { }

    @CordovaInstance({
        sync: true
    })
    isDraggable(): boolean {return; }

    @CordovaInstance({
        sync: true
    })
    setFlat(flat: boolean): void {return; }

    @CordovaInstance({
        sync: true
    })
    setIcon(icon: GoogleMapsMarkerIcon): void { }

    @CordovaInstance({
        sync: true
    })
    setTitle(title: string): void { }

    @CordovaInstance({
        sync: true
    })
    getTitle(): string {return; }

    @CordovaInstance({
        sync: true
    })
    setSnippet(snippet: string): void { }

    @CordovaInstance({
        sync: true
    })
    getSnippet(): string {return; }

    @CordovaInstance({
        sync: true
    })
    setRotation(rotation: number): void { }

    @CordovaInstance({
        sync: true
    })
    getRotation(): number {return; }

    @CordovaInstance({
        sync: true
    })
    showInfoWindow(): number {return; }

    @CordovaInstance({
        sync: true
    })
    hideInfoWindow(): number {return; }

    @CordovaInstance({
        sync: true
    })
    setPosition(latLng: GoogleMapsLatLng): void { }

    @CordovaInstance()
    getPosition(): Promise<GoogleMapsLatLng> {return; }

    @CordovaInstance({
        sync: true
    })
    getMap(): GoogleMap {return; }

    @CordovaInstance({
        sync: true
    })
    setAnimation(animation: string): void { }



}

export interface GoogleMapsCircleOptions {
    center: GoogleMapsLatLng;
    radius: number;
    strokeColor: string;
    strokeWidth: number;
    fillColor: string;
    visible: boolean;
    zIndex: number;
}
export class GoogleMapsCircle {

    constructor(private _objectInstnace: any) { }

    @CordovaInstance({
        sync: true
    })
    getCenter(): GoogleMapsLatLng {return; }

    @CordovaInstance({
        sync: true
    })
    getRadius(): number {return; }

    @CordovaInstance({
        sync: true
    })
    getStrokeColor(): string {return; }

    @CordovaInstance({
        sync: true
    })
    getVisible(): boolean {return; }

    @CordovaInstance({
        sync: true
    })
    getZIndex(): number {return; }

    @CordovaInstance({
        sync: true
    })
    remove(): void { }

    @CordovaInstance({
        sync: true
    })
    setCenter(latLng: GoogleMapsLatLng): void { }

    @CordovaInstance({
        sync: true
    })
    setFillColor(fillColor: string): void { }

    @CordovaInstance({
        sync: true
    })
    setStrokeColor(strokeColor: string): void { }

    @CordovaInstance({
        sync: true
    })
    setStrokeWidth(strokeWidth: number): void { }

    @CordovaInstance({
        sync: true
    })
    setVisible(visible: boolean): void { }

    @CordovaInstance({
        sync: true
    })
    setZIndex(zIndex: number): void { }

    @CordovaInstance({
        sync: true
    })
    setRadius(radius: number): void { }

    @CordovaInstance({
        sync: true
    })
    getMap(): GoogleMap {return; }



}

export interface GoogleMapsPolylineOptions {
    points: Array<GoogleMapsLatLng>;
    visible: boolean;
    googledesic: boolean;
    color: string;
    width: number;
    visible: boolean;
    zIndex: number;
}
export class GoogleMapsPolyline {
    constructor (private _objectInstance: any) { }

    // TODO add event listeners

    @CordovaInstance({sync: true})
    getPoints(): Array<GoogleMapsLatLng> {return; }

    @CordovaInstance({sync: true})
    getCOlor(): string {return; }

    @CordovaInstance({sync: true})
    getWidth(): number {return; }

    @CordovaInstance({sync: true})
    getGeodesic(): boolean {return; }

    @CordovaInstance({sync: true})
    getZIndex(): number {return; }

    @CordovaInstance({sync: true})
    remove(): void { }

    @CordovaInstance({sync: true})
    setPoints(points: Array<GoogleMapsLatLng>): void { }

    @CordovaInstance({sync: true})
    setColor(color: string): void { }

    @CordovaInstance({sync: true})
    setWidth(width: number): void { }

    @CordovaInstance({sync: true})
    setVisible(visible: boolean): void { }

    @CordovaInstance({sync: true})
    setZIndex(zIndex: number): void { }

    @CordovaInstance({sync: true})
    setGeoDesic(geoDesic: boolean): void { }

    @CordovaInstance({sync: true})
    getMap(): GoogleMap {return; }

}

export class GoogleMapsLatLng {
    private _objectInstance: any;

    constructor (public lat: string, public lng: string) {
        this._objectInstance = plugin.google.maps.LatLng(lat, lng);
    }

    @CordovaInstance({
        sync: true
    })
    equals (other: GoogleMapsLatLng): boolean {return; }

    @CordovaInstance({
        sync: true
    })
    toString (): string {return; }

    @CordovaInstance({
        sync: true
    })
    toUrlValue (precision?: number): string {return; }
}