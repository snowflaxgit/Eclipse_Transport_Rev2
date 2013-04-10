$(document).on("pageinit", function() {
    var nextId = 1;
    $("#add").click(function() {
        console.log('clicked');
        nextId++;
        var collapsible_content = "<div data-role='collapsible' data-theme='b' data-content-theme='b' id='collapsible" + nextId + "'><h3>Section " + nextId + '</h3><div data-role="collapsible" data-theme="b" id="collapsible' + nextId +'_sub_collapsible1" data-content-theme="b"><h4>Kopfzeile</h4><a href="#" id="collapsible' + nextId +'_sub_collapsible1_add_'+ nextId +'" data-role="button" data-icon="plus" data-iconpos="notext">Add</a></div><div data-role="collapsible" data-theme="b" id="collapsible' + nextId +'_sub_collapsible2" data-content-theme="b"><h4>Zeiterfassung</h4><a href="#" id="collapsible' + nextId +'_sub_collapsible1_add_'+ nextId +'" data-role="button" data-icon="plus" data-iconpos="notext">Add</a></div><div data-role="collapsible" data-theme="b" id="collapsible' + nextId +'_sub_collapsible3" data-content-theme="b"><h4>Temperaturmessungen</h4><a href="#" id="collapsible' + nextId +'_sub_collapsible1_add_'+ nextId +'" data-role="button" data-icon="plus" data-iconpos="notext">Add</a></div><div data-role="collapsible" data-theme="b" id="collapsible' + nextId +'_sub_collapsible4" data-content-theme="b"><h4>Längsmarkierung</h4><a href="#" id="collapsible' + nextId +'_sub_collapsible1_add_'+ nextId +'" data-role="button" data-icon="plus" data-iconpos="notext">Add</a></div><div data-role="collapsible" data-theme="b" id="collapsible' + nextId +'_sub_collapsible5" data-content-theme="b"><h4>Fussgängerstreifen</h4><a href="#" id="collapsible' + nextId +'_sub_collapsible1_add_'+ nextId +'" data-role="button" data-icon="plus" data-iconpos="notext">Add</a></div><div data-role="collapsible" data-theme="b" id="collapsible' + nextId +'_sub_collapsible6" data-content-theme="b"><h4>Bushaltestellen</h4><a href="#" id="collapsible' + nextId +'_sub_collapsible1_add_'+ nextId +'" data-role="button" data-icon="plus" data-iconpos="notext">Add</a></div><div data-role="collapsible" data-theme="b" id="collapsible' + nextId +'_sub_collapsible7" data-content-theme="b"><h4>Seitenmarkierung</h4><a href="#" id="collapsible' + nextId +'_sub_collapsible1_add_'+ nextId +'" data-role="button" data-icon="plus" data-iconpos="notext">Add</a></div><div data-role="collapsible" data-theme="b" id="collapsible' + nextId +'_sub_collapsible8" data-content-theme="b"><h4>Verkehrsteiler</h4><a href="#" id="collapsible' + nextId +'_sub_collapsible1_add_'+ nextId +'" data-role="button" data-icon="plus" data-iconpos="notext">Add</a></div><div data-role="collapsible" data-theme="b" id="collapsible' + nextId +'_sub_collapsible9" data-content-theme="b"><h4>Regie Personal</h4><a href="#" id="collapsible' + nextId +'_sub_collapsible1_add_'+ nextId +'" data-role="button" data-icon="plus" data-iconpos="notext">Add</a></div><div data-role="collapsible" data-theme="b" id="collapsible' + nextId +'_sub_collapsible10" data-content-theme="b"><h4>Maschinen Fahrzeuge</h4><a href="#" id="collapsible' + nextId +'_sub_collapsible1_add_'+ nextId +'" data-role="button" data-icon="plus" data-iconpos="notext">Add</a></div><div data-role="collapsible" data-theme="b" id="collapsible' + nextId +'_sub_collapsible11" data-content-theme="b"><h4>Neueinträge</h4><a href="#" id="collapsible' + nextId +'_sub_collapsible1_add_'+ nextId +'" data-role="button" data-icon="plus" data-iconpos="notext">Add</a></div><div data-role="collapsible" data-theme="b" id="collapsible' + nextId +'_sub_collapsible12" data-content-theme="b"><h4>Material Entsorgung</h4><a href="#" id="collapsible' + nextId +'_sub_collapsible1_add_'+ nextId +'" data-role="button" data-icon="plus" data-iconpos="notext">Add</a></div>';
        $("#main_collapsible").append( collapsible_content );
        //$("#main_collapsible").collapsibleset('refresh',true);
        $('#main_collapsible').find('div[data-role=collapsible]').collapsible();
        //$('#main_collapsible').find('a[data-role=button]').button();
        $("#main_collapsible").find('a[data-role=button]').buttonMarkup("refresh");
    });
    var sub_collapsible_sectionId=0;
    $("#collapsible1_sub_collapsible1_add_2").click(function(){
        sub_collapsible_sectionId++;
        var sub_collapsible_section_content="<div data-role='collapsible' data-content-theme='b data-theme='b' id='sub_collapsible2_section_"+sub_collapsible_sectionId+"'><h3>Leerer Eintrag</h3></div>";
        $("#sub_inner_collepsibleSet").append( sub_collapsible_section_content );
        $("#sub_inner_collepsibleSet").collapsibleset('refresh',true);
        //$("#sub_collapsible2").find('div[data-role=collapsible]').collapsible();
        //console.log( $('#sub_collapsible2').find('div[data-role=collapsible]'));
        //$('#sub_collapsible2').find('div[data-role=collapsible]').collapsible();

    });
    $("#expand").click(function() {
        $("#main_collapsible").children(":last").trigger( "expand" );
    });
    $("#collapse").click(function() {
        $("#main_collapsible").children(":last").trigger( "collapse" );
    });
}); 