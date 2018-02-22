function initMap() {
    // Map options
    var options = {
        zoom: 3,
        center: {
            lat: 41.4925,
            lng: -99.9018
        }
    }

    // New Map
    var map = new google.maps.Map(document.getElementById('map'), options);
    
    var shows = [{coords:{lat: 47.658780, lng: -117.426046}, content:'<h3>Name: <span>4th Annual Fall Spokane Sport Horse Farm H.T.</span></h3><h3>Date: Oct 4 - 7, 2018</h3><h3>Levels: BN, N, T, T3D, P, I, A</h3>'}, {coords:{lat: 39.228602, lng: -104.887203}, content:'<h3>Name: <span>Abbe Ranch H.T.<span></h3><h3>Date: June 22 - 24, 2018</h3><h3>Levels: BN, N, T</h3>'}, {coords:{lat: 45.783286, lng: -108.500690}, content:'<h3>Name: <span>Arrowhead H.T.</span></h3><h3>Date: June 22 - 24, 2018</h3><h3>Levels: BN, N, T, P</h3>'}, {coords:{lat: 46.942043, lng: -122.605958}, content:'<div><h3>Name: <span>Aspen Farms H.T.</span></h3><h3>Date: June 8 - 10, 2018</h3><h3>Levels: BN, N, T, P, I, CIC1, CIC2</h3></div><div class="secondEvent"><h3>Name: <span>Aspen Farms H.T.</span></h3><h3>Date: Sep 7 - 9, 2018</h3><h3>Levels: BN, N, T, P, I, A</h3></div>'}, {coords:{lat: 40.515380, lng: -75.161007}, content:'<div><h3>Name: <span>Bucks County Horse Park H.T.</span></h3><h3>Date: June 17, 2018</h3><h3>Levels: BN, N, T, P</h3></div><div class="secondEvent"><h3>Name: <span>Bucks County Horse Park H.T.</span></h3><h3>Date: Sep 9, 2018</h3><h3>Levels: BN, N, T, P</h3></div>'}, {coords:{lat: 46.575660, lng: -122.719426}, content:'<h3>Name: <span>Caber Farm Horse Trial</span></h3><h3>Date: Aug 24 - 26, 2018</h3><h3>Levels: BN, N, T, P, I</h3>'}, {coords:{lat: 39.513775, lng: -121.556359}, content:'<h3><span>Name: Camelot Equestrian Horse Park H.T.</span></h3><h3>Date: June 8 - 10, 2018</h3><h3>Levels: BN, N, T, P</h3>'}, {coords:{lat: 34.981000, lng: -79.224200}, content:'<h3>Name: <span>Carolina International CIC and H.T.</span></h3><h3>Date: Mar 21 - 25, 2018</h3><h3>Levels: T, P, I, A, CIC1, CIC2, CIC3</h3>'}, {coords:{lat: 41.661128, lng: -91.530168}, content:'<h3>Name: <span>Catalpa Corner Charity Horse Trial</span></h3><h3>Date: Aug 4 - 5, 2018</h3><h3>Levels: BN, N, T, P</h3>'},{coords:{lat: 39.613321, lng: -105.016650}, content:'<h3>Name: <span>CCC Spring Gulch H.T.</span></h3><h3>Date: May 19 - 20, 2018</h3><h3>Levels: BN, N, T, P</h3>'}, {coords:{lat: 39.151771, lng: -77.982219}, content:'<div><h3>Name: <span>CDCTA Fall H.T.</span></h3><h3>Date: Sep 16, 2018</h3><h3>Levels: BN, N, T, P</h3></div><div class="secondEvent"><h3>Name: <span>CDCTA Spring H.T.</span></h3><h3>Date: Apr 8, 2018</h3><h3>Levels: BN, N, T, P</h3></div>'}, {coords:{lat: 42.280826, lng: -83.743038}, content:'<h3>Name: <span>Cedar Ridge H.T.</span></h3><h3>Date: Sep 22 - 23, 2018</h3><h3>Levels: BN, N, T, P</h3>'}, {coords:{lat: 38.040584, lng: -84.503716}, content:'<h3>Name: <span>Champagne Run at the Park H.T.</span></h3><h3>Date: Jul 13 - 15, 2018</h3><h3>Levels: BN, N, T, P, I</h3>'}, {coords:{lat: 42.108098, lng: -85.974457}, content:'<h3>Name: <span>Chardon Valley Horse Trials</span></h3><h3>Date: Sep 8 - 9, 2018</h3><h3>Levels: BN, N, T, P</h3>'}, {coords:{lat: 33.567056, lng: -84.581042}, content:'<div><h3>Name: <span>Chattahoochee Hills H.T.</span></h3><h3>Date: Apr 6 - 8, 2018</h3><h3>Levels: BN, N, T, P, I, A, CIC1, CIC2, CIC3</h3></div><div class="secondEvent"><h3>Name: <span>Chattahoochee Hills H.T.</span></h3><h3>Date: May 19 - 20, 2018</h3><h3>Levels: BN, N, T, P</h3></div><div class="secondEvent"><h3>Name: <span>Chattahoochee Hills H.T.</span></h3><h3>Date: June 30 - Jul 1, 2018</h3><h3>Levels: BN, N, T, P, I</h3></div><div class="secondEvent"><h3>Name: <span>Chattahoochee Hills H.T.</span></h3><h3>Date: Jul 6 - 8, 2018</h3><h3>Levels: BN, N, T, P, I</h3></div><div class="secondEvent"><h3>Name: <span>Chattahoochee Hills H.T.</span></h3><h3>Date: Sep 1 - 2, 2018</h3><h3>Levels: BN, N, T, P, I, A, CIC1, CIC2</h3></div><div class="secondEvent"><h3>Name: <span>Chattahoochee Hills H.T.</span></h3><h3>Date: Oct 27 - 28, 2018</h3><h3>Levels: BN, N, T, P, I</h3></div>'}, {coords:{lat: 42.338370, lng: -83.888555}, content:'<h3>Name: <span>Cobblestone Farms H.T.</span></h3><h3>Date: Aug 3 - 5, 2018</h3><h3>Levels: BN, N, T, P</h3>'}, {coords:{lat: 35.198284, lng: -111.651302}, content:'<div><h3>Name: <span>Coconino Spring H.T.</span></h3><h3>Date: May 25 - 27, 2018</h3><h3>Levels: BN, N, T, P</h3></div><div class="secondEvent"><h3>Name: <span>Coconino Summer I H.T.</span></h3><h3>Date: Jul 6 - 8, 2018</h3><h3>Levels: BN, N, T, P, I</h3></div>'}, {coords:{lat: 33.041360, lng: -116.879255}, content:'<div><h3>Name: <span>Copper Meadows H.T.</span></h3><h3>Date: June 9 - 10, 2018</h3><h3>Levels: BN, N, T, P, I, A</h3></div><div class="secondEvent"><h3>Name: <span>Copper Meadows H.T.</span></h3><h3>Date: Sep 8 - 9, 2018</h3><h3>Levels: BN, N, T, P, I, A</h3></div><div class="secondEvent"><h3>Name: <span>Copper Meadows Winter H.T.</span></h3><h3>Date: Mar 16 - 18, 2018</h3><h3>Levels: BN, N, T, P, I, A</h3></div>'}]
    
   
    for(var i = 0; i < shows.length; i++) {
        addMarker(shows[i]);
    }
    
    function addMarker(props){
        var marker = new google.maps.Marker({
        position:props.coords,
        map: map
        });
        
        if(props.content){
            var infoWindow = new google.maps.InfoWindow({
               content:props.content
            })
            
            marker.addListener('click', function(){
               infoWindow.open(map, marker);
            })
        }
    }
}
