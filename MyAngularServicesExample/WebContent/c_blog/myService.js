myApp.service("myService", function() {
	this.blogs = [];

	this.getAllBlogs = getBlogs();

	this.blogs1 = [ {
		"blogname" : "name1",
		"blogdescription" : "desc1"
	}, {
		"blogname" : "name2",
		"blogdescription" : "desc2"
	}, {
		"blogname" : "name3",
		"blogdescription" : "desc3"
	}, {
		"blogname" : "name4",
		"blogdescription" : "desc4"
	}

	];

	function getBlogs() {
		this.blogs = [ {
			"blogname" : "name1",
			"blogdescription" : "desc1"
		}, {
			"blogname" : "name2",
			"blogdescription" : "desc2"
		}, {
			"blogname" : "name3",
			"blogdescription" : "desc3"
		}, {
			"blogname" : "name4",
			"blogdescription" : "desc4"
		}

		];
		return this.blogs;
	}

});