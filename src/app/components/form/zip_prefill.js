//when the user clicks off of the zip field:
$(document).ready(function() {
    $('#zip').keyup(function() {
        if ($(this).val().length == 5) {
            var zip = $(this).val();
            var city = '';
            var state = '';
            //make a request to the google geocode api
            $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address=' + zip)
                .success(function(response) {
                    //find the city and state
                    var address_components = response.results[0].address_components;

                    $.each(address_components, function(index, component) {
                        var types = component.types;
                        $.each(types, function(index, type) {
                            if (type == 'locality') {
                                city = component.long_name;
                            }
                            if (type == 'administrative_area_level_1') {
                                state = component.short_name;
                            }
                        });
                    });
                    //pre-fill the city and state
                    var cities = response.results[0].postcode_localities;
                    if (cities) {
                        //turn city into a dropdown if necessary
                        var $select = $(document.createElement('select'));
                        console.log(cities);
                        $.each(cities, function(index, locality) {
                            var $option = $(document.createElement('option'));
                            $option.html(locality);
                            $option.attr('value', locality);
                            if (city == locality) {
                                $option.attr('selected', 'selected');
                            }
                            $select.append($option);
                        });
                        $select.attr('id', 'city');
                        $('#city_wrap').html($select);
                    } else {
                        $('#city').val(city);
                    }
                    $('#state').val(state);
                });
        }
    });
});
