import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
 	// code to run on server at startup
	if(Pets.find().count() == 0) {

		Pets.insert ({
			img_src: '/img/pets/lucy.jpg',
			img_alt: 'Lucy',
			name: 'Lucy',
			type: 'Cat',
			breed: 'Maine Coon',
			age: '3',
			gender: 'Female',
			size: 'Medium',
			weight: '3',
			characteristic: 'Wild',
			status: 'available',
			loc: 'Kota Makassar'
		});

		Pets.insert ({
			img_src: '/img/pets/molly.jpg',
			img_alt: 'Molly',
			name: 'Molly',
			type: 'Cat',
			breed: 'Angora',
			age: '2',
			gender: 'Male',
			size: 'Medium',
			weight: '1',
			characteristic: 'House Trained',
			status: 'available',
			loc: 'Kota Jakarta'
		});

		Pets.insert ({
			img_src: '/img/pets/chloe.jpg',
			img_alt: 'Chloe',
			name: 'Chloe',
			type: 'Bird',
			breed: 'Parrot',
			age: '2',
			gender: 'Female',
			size: 'Medium',
			weight: '1',
			characteristic: 'House Trained',
			status: 'available',
			loc: 'Kota Surabaya'
		});

		Pets.insert ({
			img_src: '/img/pets/esther.jpg',
			img_alt: 'Esther',
			name: 'Esther',
			type: 'Dog',
			breed: 'Cockapoo',
			age: '3',
			gender: 'Female',
			size: 'Medium',
			weight: '3',
			characteristic: 'House Trained',
			status: 'available',
			loc: 'Kota Makassar'
		});

		Pets.insert ({
			img_src: '/img/pets/max.jpg',
			img_alt: 'Max',
			name: 'Max',
			type: 'Dog',
			breed: 'Dalmatian',
			age: '2',
			gender: 'Male',
			size: 'Small',
			weight: '4',
			characteristic: 'House Trained',
			status: 'available',
			loc: 'Kota Surabaya'
		});

		Pets.insert ({
			img_src: '/img/pets/bella.jpg',
			img_alt: 'Bella',
			name: 'Bella',
			type: 'Cat',
			breed: 'Persian',
			age: '1',
			gender: 'Female',
			size: 'Small',
			weight: '3',
			characteristic: 'House Trained',
			status: 'available',
			loc: 'Kota Jakarta'
		});

		Pets.insert ({
			img_src: '/img/pets/charlie.jpg',
			img_alt: 'Charlie',
			name: 'Charlie',
			type: 'Hamster',
			breed: 'Chinese',
			age: '1',
			gender: 'Male',
			size: 'Medium',
			weight: '1',
			characteristic: 'Wild',
			status: 'available',
			loc: 'Kota Bandung'
		});

		Pets.insert ({
			img_src: '/img/pets/tony.jpg',
			img_alt: 'Tony',
			name: 'Tony',
			type: 'Dog',
			breed: 'Pomeranian',
			age: '2',
			gender: 'Male',
			size: 'Small',
			weight: '2',
			characteristic: 'House Trained',
			status: 'available',
			loc: 'Kota Surabaya'
		});
  	}
});

Roles.addUsersToRoles('F92g7JAAzHvhupHDB', ['admin']);

var postSignUp = function(userId, info) {
	console.log(userId);
	Roles.addUsersToRoles(userId, ['normal-user']);
}

AccountsTemplates.configure({
	postSignUpHook: postSignUp
});
