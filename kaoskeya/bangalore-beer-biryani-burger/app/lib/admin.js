kAdminConfig = {
	name: "BBBB Admin",
	roles: [ "admin" ],
	collections: {
		Restaurant: {
			tableColumns: [
				{ label: 'Name', name: 'name' },
			]
		},
		Item: {
			tableColumns: [
				{ label: 'Name', name: 'name' },
				{ label: 'Restaurant', name: 'getRestaurant()' },
			],
			omitFields: [ "restaurant" ],
			templates: {
				"new": { name: "AdminAddItem" }
			}
		},
		"Meteor.users": { 
			verbose: "Users",
			templates: { 
				"crud": { name: 'kAccountsAdminFluid' },
				"new": { name: 'yourCustomAdminCreateModule' }
			} 
		},
	}
}

kAccountsAdminConfig = {
    tableColumns: [
        { label: 'Name', name: 'getName()' }
    ]
}