import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.pets.helpers({pets:Pets.find({status: 'available'})});

Template.pets.events({
    'click .js-del-pet':function(event) {
        var pet_id = this._id;
        console.log(pet_id);
        $("#"+pet_id).hide('slow',function(){
            Pets.remove({"_id":pet_id});
        })
    },
    'click .js-edit-pet':function() {
        var petid = this._id;
        var gender = this.gender;
        Session.set('selectedPet', petid);
        Session.set('gender', gender);
        console.log("id1 = "+petid+" gender :"+gender);
    },
    'click .js-show-pet':function() {
        var petid = this._id;
        Session.set('selectedPet1', petid);
        console.log("id1 = "+petid);
    },
    'click .js-adopt-pet':function() {
        var petid = this._id;
        alert('You have successfully adopted a pet');
        console.log("id user : "+Meteor.userId()+" email : "+Meteor.user().emails[0].address)
        Pets.update({ _id: petid},
        { $set:
            {userid: Meteor.userId(),
            useremail: Meteor.user().emails[0].address,
            status:'adopted',
            adoptedOn: new Date()}
            
        });
    },
    'click .js-er-adopt-pet':function() {
        alert('You must login to adopt a pet !');
    }
});

Template.AdoptedPets.helpers({adoptedpets:Pets.find({status: 'adopted'}, {sort:{adoptedOn:-1}}
)});

Template.edit_pet_form.helpers({
    'selectedPet': function() {
        var selectedPet = Session.get('selectedPet');
        return Pets.findOne({ _id: selectedPet});
    },
    'isFemale': function() {
        var gen = Session.get('gender');
        return gen === 'Female'? 'checked':'';
    },
    'isMale': function() {
        var gen = Session.get('gender');
        return gen === 'Male'? 'checked':'';
    }
});

Template.show_pet.helpers({
    'selectedPet': function() {
        var selectedPet1 = Session.get('selectedPet1');
        return Pets.findOne({ _id: selectedPet1});
    }
});

Template.add_pet_form.events({
    'submit .js-add-pet':function(event) {
        event.preventDefault();
        var name, type, breed, age, gender, size, weight, characteristic, loc, img;
        name=event.target.name.value;
        type=event.target.type.value;
        breed=event.target.breed.value;
        age=event.target.age.value;
        gender=event.target.gender.value;
        size=event.target.size.value;
        weight=event.target.weight.value;
        characteristic=event.target.characteristic.value;
        loc=event.target.loc.value;
        img=event.target.img.value;
        Pets.insert({
          name:name,
          type:type,
          breed:breed, 
          age:age,
          gender:gender,
          size:size,
          weight:weight,
          characteristic:characteristic,
          loc:loc,
          img_src:img,
          status:'available'
        });
        
        $('#portfolioModal1').modal('hide');
        event.target.reset();
        return false;
    },

    'reset .js-add-pet':function(event) {
        event.preventDefault();
        console.log("cancel cuyyy");
        event.target.reset();
    }
});

Template.edit_pet_form.events({
    'submit .js-update-pet':function(event) {
        var selectedPet = Session.get('selectedPet');
        var name, type, breed, age, gender, size, weight, characteristic, loc;
        name=event.target.name1.value;
        type=event.target.type1.value;
        breed=event.target.breed1.value;
        age=event.target.age1.value;
        gender=event.target.gender1.value;
        size=event.target.size1.value;
        weight=event.target.weight1.value;
        characteristic=event.target.characteristic1.value;
        loc=event.target.loc1.value;
        Pets.update({ _id: selectedPet},
        { $set:
            {name:name,
            type:type,
            breed:breed, 
            age:age,
            gender:gender,
            size:size,
            weight:weight,
            characteristic:characteristic,
            loc:loc}
        });
    }
});

Template.RightNav.events ({
    'click .logout': ()=> {
        console.log(Meteor.userId());
        Meteor.logout();
    },
    'submit form#searchtype':function(event) {
        event.preventDefault();
        var type1= $("#sel1").val();
        console.log("type : "+type1);
        Session.set('pettype', type1);
    }
});

Template['override-atPwdFormBtn'].replaces('atPwdFormBtn');
Template['override-atTextInput'].replaces('atTextInput');
Template['override-atPwdForm'].replaces('atPwdForm');
Template['override-atTitle'].replaces('atTitle');

// Freelancer Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Floating label headings for the contact form
    $(function() {
        $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });

})(jQuery); // End of use strict
/*!
 * Start Bootstrap - Freelancer v3.3.7+1 (http://startbootstrap.com/template-overviews/freelancer)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */
//!function(o){"use strict";o(".page-scroll a").bind("click",function(t){var l=o(this);o("html, body").stop().animate({scrollTop:o(l.attr("href")).offset().top-50},1250,"easeInOutExpo"),t.preventDefault()}),o("body").scrollspy({target:".navbar-fixed-top",offset:51}),o(".navbar-collapse ul li a").click(function(){o(".navbar-toggle:visible").click()}),o("#mainNav").affix({offset:{top:100}}),o(function(){o("body").on("input propertychange",".floating-label-form-group",function(t){o(this).toggleClass("floating-label-form-group-with-value",!!o(t.target).val())}).on("focus",".floating-label-form-group",function(){o(this).addClass("floating-label-form-group-with-focus")}).on("blur",".floating-label-form-group",function(){o(this).removeClass("floating-label-form-group-with-focus")})})}(jQuery);